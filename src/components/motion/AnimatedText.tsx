import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedCharacterProps {
  character: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
}

function AnimatedCharacter({
  character,
  index,
  total,
  progress,
  reduceMotion,
}: AnimatedCharacterProps) {
  const sequencePosition = index / Math.max(total - 1, 1);
  const start = sequencePosition * 0.68;
  const end = Math.min(start + 0.14, 1);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block" aria-hidden="true">
      <span className="invisible">{character === ' ' ? '\u00A0' : character}</span>
      <motion.span className="absolute inset-0" style={{ opacity: reduceMotion ? 1 : opacity }}>
        {character === ' ' ? '\u00A0' : character}
      </motion.span>
    </span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.85', 'end 0.5'],
  });
  const characters = Array.from(text);
  let characterOffset = 0;
  const segments = text
    .split(/(\s+)/)
    .filter(Boolean)
    .map((segment) => {
      const segmentCharacters = Array.from(segment);
      const startIndex = characterOffset;
      characterOffset += segmentCharacters.length;
      return { segment, characters: segmentCharacters, startIndex };
    });

  return (
    <p ref={paragraphRef} className={className} aria-label={text}>
      {segments.map(({ segment, characters: segmentCharacters, startIndex }, segmentIndex) => {
        const renderedCharacters = segmentCharacters.map((character, characterIndex) => (
          <AnimatedCharacter
            key={`${startIndex + characterIndex}-${character}`}
            character={character}
            index={startIndex + characterIndex}
            total={characters.length}
            progress={scrollYProgress}
            reduceMotion={reduceMotion}
          />
        ));

        if (/^\s+$/.test(segment)) {
          return renderedCharacters;
        }

        return (
          <span key={`${segmentIndex}-${segment}`} className="inline-block" aria-hidden="true">
            {renderedCharacters}
          </span>
        );
      })}
    </p>
  );
}
