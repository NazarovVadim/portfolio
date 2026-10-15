import { Quote } from 'lucide-react';
import { FadeIn } from '../components/motion/FadeIn';
import { reviews } from '../data/reviews';

export function ReviewsSection() {
  return (
    <section className="bg-white px-5 pb-32 pt-20 text-[#0C0C0C] sm:px-8 sm:pb-40 sm:pt-24 md:px-10 md:pb-48 md:pt-32">
      <div className="mx-auto max-w-[1500px]">
        <FadeIn>
          <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-24">
            Отзывы
          </h2>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {reviews.map((review, index) => (
            <FadeIn key={`${review.name}-${review.role}`} delay={index * 0.1}>
              <article className="flex min-h-full flex-col rounded-[32px] border border-[#0C0C0C]/15 bg-[#F4F4F4] p-6 sm:rounded-[40px] sm:p-8 md:p-10">
                <div className="mb-10 flex items-center justify-between gap-4">
                  <Quote className="size-9" strokeWidth={1.5} aria-hidden="true" />
                  <span className="rounded-full border border-[#0C0C0C]/20 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-widest opacity-60">
                    Демо-отзыв
                  </span>
                </div>
                <p className="mb-10 text-[clamp(1.05rem,1.65vw,1.4rem)] font-medium leading-relaxed">
                  «{review.text}»
                </p>
                <footer className="mt-auto border-t border-[#0C0C0C]/15 pt-5">
                  <p className="font-semibold uppercase tracking-wide">{review.name}</p>
                  <p className="mt-1 text-sm font-light opacity-60">{review.role}</p>
                </footer>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
