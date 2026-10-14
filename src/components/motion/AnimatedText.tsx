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
  const start = index / total;
  const end = Math.min((index + 1) / total, 1);
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
    offset: ['start 0.8', 'end 0.2'],
  });
  const characters = Array.from(text);

  return (
    <p ref={paragraphRef} className={className} aria-label={text}>
      {characters.map((character, index) => (
        <AnimatedCharacter
          key={`${index}-${character}`}
          character={character}
          index={index}
          total={characters.length}
          progress={scrollYProgress}
          reduceMotion={reduceMotion}
        />
      ))}
    </p>
  );
}
