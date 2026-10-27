import { useEffect, useRef } from 'react';
import { FadeIn } from '../components/motion/FadeIn';
import { InkHeading } from '../components/ui/InkHeading';
import { marqueeRowOne, marqueeRowTwo, type MarqueeImage } from '../data/marqueeImages';

interface MarqueeRowProps {
  images: readonly MarqueeImage[];
  rowRef: React.RefObject<HTMLDivElement>;
}

function MarqueeRow({ images, rowRef }: MarqueeRowProps) {
  return (
    <div className="marquee-scrollo verflow-hidden px-5 sm:px-8 md:overflow-visible md:px-0">
      <div
        ref={rowRef}
        className="flex w-max snap-x snap-mandatory gap-3 md:snap-none"
        style={{ willChange: 'transform' }}
      >
        {[0, 1, 2].flatMap((repeat) =>
          images.map((image) => (
            <div
              key={`${repeat}-${image.id}`}
              className={`${repeat > 0 ? 'hidden md:block' : ''} group relative aspect-[14/9] w-[calc(100vw-2.5rem)] max-w-[420px] shrink-0 snap-center overflow-hidden rounded-[28px] border border-white/10 bg-[#131313] shadow-[0_20px_60px_rgba(0,0,0,0.38)] sm:w-[calc(100vw-4rem)] md:h-[270px] md:w-[420px] md:max-w-none md:aspect-auto`}
              aria-hidden={repeat > 0}
            >
              <img
                src={image.src}
                alt={repeat === 0 ? image.alt : ''}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                width="420"
                height="270"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/[0.04]" />
            </div>
          )),
        )}
      </div>
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

    const render =(time = performance.now())) > {
      frame = null;
      if (reducedMotion.matches || window.innerWidth < 768) {
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
    frame = requestAnimationFrame(render);

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
      aria-label="Проекты и направления разработки"
      className="relative overflow-hidden bg-[#0C0C0C] pb-16 pt-24 sm:pb-20 sm:pt-32 md:pb-24 md:pt-40"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/4 size-[700px] -translate-x-1/2 rounded-full bg-fuchsia-800/10 blur-[160px]" />
      <div className="relative mx-auto mb-14 max-w-[1500px] px-5 sm:mb-16 sm:px-8 md:mb-20 md:px-10">
        <FadeIn>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-300 sm:text-sm">
            Real projects × Fullstack engineering
          </p>
          <InkHeading
            as="h2"
            text={'Код. Дизайн.\nРезультат.'}
            className="max-w-6xl text-[clamp(3rem,8vw,118px)] font-black uppercase leading-[0.86] tracking-[-0.06em] text-[#D7E2EA]"
          />
        </FadeIn>
      </div>
            <div className="relative flex flex-col gap-3">
        <MarqueeRow images={marqueeRowOne} rowRef={rowOneRef} />
        <MarqueeRow images={marqueeRowTwo} rowRef={rowTwoRef} />
      </div>
    </section>
  );
}
