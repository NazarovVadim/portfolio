import { useEffect, useRef } from 'react';
import { marqueeRowOne, marqueeRowTwo, type MarqueeImage } from '../data/marqueeImages';

interface MarqueeRowProps {
  images: readonly MarqueeImage[];
  rowRef: React.RefObject<HTMLDivElement>;
}

function MarqueeRow({ images, rowRef }: MarqueeRowProps) {
  return (
    <div ref={rowRef} className="flex w-max gap-3" style={{ willChange: 'transform' }}>
      {[0, 1, 2].flatMap((repeat) =>
        images.map((image) => (
          <img
            key={`${repeat}-${image.id}`}
            src={image.src}
            alt={repeat === 0 ? image.alt : ''}
            aria-hidden={repeat > 0}
            className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
            width="420"
            height="270"
            loading="lazy"
            decoding="async"
          />
        )),
      )}
    </div>
  );
}

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowOneRef = useRef<HTMLDivElement>(null);
  const rowTwoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const rowOne = rowOneRef.current;
    const rowTwo = rowTwoRef.current;
    if (!section || !rowOne || !rowTwo) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let sectionTop = section.getBoundingClientRect().top + window.scrollY;
    let frame: number | null = null;

    const render = () => {
      frame = null;
      if (reducedMotion.matches) {
        rowOne.style.transform = 'translate3d(0, 0, 0)';
        rowTwo.style.transform = 'translate3d(0, 0, 0)';
        return;
      }

      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      const translation = offset - 200;
      rowOne.style.transform = `translate3d(${translation}px, 0, 0)`;
      rowTwo.style.transform = `translate3d(${-translation}px, 0, 0)`;
    };

    const scheduleRender = () => {
      if (frame === null) frame = requestAnimationFrame(render);
    };

    const handleResize = () => {
      sectionTop = section.getBoundingClientRect().top + window.scrollY;
      scheduleRender();
    };

    window.addEventListener('scroll', scheduleRender, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    reducedMotion.addEventListener('change', scheduleRender);
    render();

    return () => {
      window.removeEventListener('scroll', scheduleRender);
      window.removeEventListener('resize', handleResize);
      reducedMotion.removeEventListener('change', scheduleRender);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Selected motion work"
      className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow images={marqueeRowOne} rowRef={rowOneRef} />
        <MarqueeRow images={marqueeRowTwo} rowRef={rowTwoRef} />
      </div>
    </section>
  );
}
