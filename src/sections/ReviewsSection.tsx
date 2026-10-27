import { Quote, Sparkles } from 'lucide-react';
import { FadeIn } from '../components/motion/FadeIn';
import { InkHeading } from '../components/ui/InkHeading';
import { reviews } from '../data/reviews';

const reviewLayouts = [
  'md:col-span-7 md:row-span-2 md:min-h-[640px]',
  'md:col-span-5 md:min-h-[310px]',
  'md:col-span-5 md:min-h-[310px]',
] as const;

const reviewGlows = [
  'radial-gradient(circle at 82% 18%, rgba(182,0,168,0.72), transparent 38%), radial-gradient(circle at 8% 92%, rgba(20,29,141,0.75), transparent 42%)',
  'radial-gradient(circle at 88% 4%, rgba(72,68,255,0.65), transparent 42%)',
  'radial-gradient(circle at 88% 8%, rgba(0,168,181,0.55), transparent 42%)',
] as const;

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="relative z-10 -mt-10 scroll-mt-8 overflow-hidden rounded-t-[40px] bg-[#0C0C0C] px-5 pb-40 pt-24 text-white sm:-mt-12 sm:rounded-t-[60px] md:px-10"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="pointer-events-none absolute -right-52 top-20 size-[600px] rounded-full bg-fuchsia-700/20 blur-[160px]" />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="mb-16 sm:mb-20 md:mb-24">
          <FadeIn>
            <div>
              <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
                <Sparkles className="size-4" aria-hidden="true" />
                Результат глазами клиента
              </div>
              <InkHeading
                as="h2"
                text="Отзывы"
                className="hero-heading text-[clamp(3.8rem,11vw,155px)] font-black uppercase leading-[0.78] tracking-tight text-[#EAF0F6]"
              />
            </div>
          </FadeIn>
        </div>

        <div className="grid gap-4 md:grid-cols-12 md:gap-5">
          {reviews.map((review, index) => (
            <FadeIn
              key={`${review.name}-${review.role}`}
              className={reviewLayouts[index] ?? 'md:col-span-5'}
              delay={index * 0.1}
            >
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-[32px] bg-[#121215] p-6 sm:rounded-[36px] sm:p-8 md:p-10 ${
                  index === 0
                    ? 'min-h-[260px] sm:min-h-[300px] md:min-h-[640px] md:p-12'
                    : 'min-h-[260px] sm:min-h-[300px] md:min-h-[310px]'
                }`}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-75 transition duration-700 group-hover:scale-105"
                  style={{ background: reviewGlows[index] }}
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:18px_18px] opacity-40" />

                <div className="relative">
                  <Quote
                    className={`size-8 text-white/90 sm:size-10 ${index === 0 ? 'md:size-16' : 'md:size-11'}`}
                    strokeWidth={1.1}
                    aria-hidden="true"
                  />
                </div>

                <p
                  className={`relative mt-auto pt-8 font-medium leading-[1.3] tracking-[-0.02em] text-base sm:text-lg ${
                    index === 0
                      ? 'md:text-[clamp(1.65rem,3vw,3.4rem)] md:leading-[1.22]'
                      : 'md:text-[clamp(1.15rem,1.8vw,1.65rem)]'
                  }`}
                >
                  «{review.text}»
                </p>

                <footer className="relative mt-8 flex items-end justify-between gap-4 border-t border-white/15 pt-5 text-sm">
                  <div>
                    <p className="font-semibold uppercase tracking-[0.12em] text-xs sm:text-sm">{review.name}</p>
                    <p className="mt-1 text-xs font-light text-white/45 sm:text-sm">{review.role}</p>
                  </div>
                  <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-white/35 sm:text-xs">
                    0{index + 1}
                  </span>
                </footer>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
