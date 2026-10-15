import { Quote, Sparkles, Star } from 'lucide-react';
import { FadeIn } from '../components/motion/FadeIn';
import { reviews } from '../data/reviews';

const reviewLayouts = [
  'md:col-span-7 md:row-span-2 md:min-h-[640px]',
  'md:col-span-5 md:min-h-[310px]',
  'md:col-span-5 md:min-h-[310px]',
] as const;
const reviewGlows = [
  'radial-gradient(circle at 82% 18%, rgba(182,0,168,0.72), transparent 38%), radial-gradient(circle at 8% 92%, rgba(190,76,0,0.5), transparent 34%)',
  'radial-gradient(circle at 88% 4%, rgba(72,68,255,0.65), transparent 42%)',
  'radial-gradient(circle at 88% 8%, rgba(0,168,181,0.55), transparent 42%)',
] as const;

export function ReviewsSection() {
  return (
    <section className="relative z-10 -mt-10 overflow-hidden rounded-t-[40px] bg-[#0C0C0C] px-5 pb-40 pt-24 text-[#D7E2EA] sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pb-48 sm:pt-28 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-56 md:pt-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent" />
      <div className="pointer-events-none absolute -right-52 top-20 size-[600px] rounded-full bg-fuchsia-700/20 blur-[150px]" />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="mb-16 grid items-end gap-8 sm:mb-20 md:mb-24 md:grid-cols-[1fr_auto]">
          <FadeIn>
            <div>
              <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-300 sm:text-sm">
                <Sparkles className="size-4" aria-hidden="true" />
                Результат глазами клиента
              </div>
              <h2 className="hero-heading text-[clamp(3.8rem,11vw,155px)] font-black uppercase leading-[0.78] tracking-[-0.07em]">
                Отзывы
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.12} y={20}>
            <div className="flex items-center gap-4 md:pb-1">
              <span className="text-5xl font-black tracking-[-0.06em] sm:text-6xl">5.0</span>
              <div>
                <div className="mb-1 flex gap-1 text-amber-300">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">Demo stories</p>
              </div>
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
              <article className="group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-[36px] border border-white/15 bg-[#121212] p-7 shadow-[0_32px_90px_rgba(0,0,0,0.4)] transition duration-500 hover:-translate-y-2 hover:border-white/30 sm:rounded-[46px] sm:p-9 md:p-11">
                <div
                  className="pointer-events-none absolute inset-0 opacity-75 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                  style={{ background: reviewGlows[index] }}
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1.5px)] bg-[size:22px_22px] opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_65%)]" />

                <div className="relative flex items-start justify-between gap-4">
                  <Quote
                    className={`${index === 0 ? 'size-16 sm:size-20' : 'size-11'} text-white/90`}
                    strokeWidth={1.1}
                    aria-hidden="true"
                  />
                  <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/60 backdrop-blur-md">
                    Демо-отзыв
                  </span>
                </div>

                <p
                  className={`relative mt-auto pt-12 font-medium leading-[1.22] tracking-[-0.025em] ${
                    index === 0
                      ? 'text-[clamp(1.65rem,3vw,3.4rem)]'
                      : 'text-[clamp(1.15rem,1.8vw,1.65rem)]'
                  }`}
                >
                  «{review.text}»
                </p>

                <footer className="relative mt-9 flex items-end justify-between gap-4 border-t border-white/15 pt-5">
                  <div>
                    <p className="font-semibold uppercase tracking-[0.12em]">{review.name}</p>
                    <p className="mt-1 text-sm font-light text-white/45">{review.role}</p>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/35">
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
