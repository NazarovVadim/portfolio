import {
  ArrowUpRight,
  Bot,
  PanelsTopLeft,
  RefreshCw,
  Rocket,
  ServerCog,
  type LucideIcon,
} from 'lucide-react';
import { FadeIn } from '../components/motion/FadeIn';
import { InkHeading } from '../components/ui/InkHeading';
import { services } from '../data/services';

const serviceIcons: readonly LucideIcon[] = [ServerCog, PanelsTopLeft, Bot, RefreshCw, Rocket];
const cardLayouts = [
  'md:col-span-7 md:min-h-[440px]',
  'md:col-span-5 md:min-h-[440px]',
  'md:col-span-4 md:min-h-[380px]',
  'md:col-span-4 md:min-h-[380px]',
  'md:col-span-4 md:min-h-[380px]',
] as const;
const cardGlows = [
  'radial-gradient(circle at 82% 14%, rgba(182,0,168,0.65), transparent 37%)',
  'radial-gradient(circle at 78% 12%, rgba(42,118,255,0.6), transparent 38%)',
  'radial-gradient(circle at 80% 12%, rgba(0,181,255,0.55), transparent 39%)',
  'radial-gradient(circle at 80% 12%, rgba(255,211,61,0.58), transparent 38%)',
  'radial-gradient(circle at 80% 12%, rgba(255,89,46,0.6), transparent 38%)',
] as const;

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-1/4 size-[520px] rounded-full bg-fuchsia-300/25 blur-[120px]" />
      <div className="relative mx-auto max-w-[1500px]">
        <div className="mb-16 grid items-end gap-8 sm:mb-20 md:mb-24 md:grid-cols-[1fr_0.42fr]">
          <FadeIn>
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] opacity-50 sm:text-sm">
                Fullstack expertise / 01—05
              </p>
              <InkHeading
                as="h2"
                text="Навыки"
                className="text-[clamp(3.8rem,11vw,155px)] font-black uppercase leading-[0.78] tracking-[-0.07em]"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.12} y={20}>
            <p className="max-w-lg text-[clamp(1rem,1.5vw,1.3rem)] font-light leading-relaxed opacity-60 md:pb-2">
              Закрываю весь цикл разработки — от архитектуры и интерфейса до интеграций, запуска и
              поддержки продукта.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-4 md:grid-cols-12 md:gap-5">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] ?? ServerCog;
            return (
              <FadeIn
                key={service.number}
                className={cardLayouts[index] ?? 'md:col-span-4'}
                delay={index * 0.08}
              >
                <article className="group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-[34px] border border-white/15 bg-[#0C0C0C] p-6 text-[#D7E2EA] shadow-[0_30px_80px_rgba(12,12,12,0.16)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_38px_100px_rgba(73,10,89,0.3)] sm:rounded-[44px] sm:p-8 md:p-10">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-80 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                    style={{ background: cardGlows[index] }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

                  <div className="relative flex items-start justify-between gap-5">
                    <span className="text-[clamp(3.5rem,7vw,7.5rem)] font-black leading-none tracking-[-0.08em] text-white/15 transition-colors duration-500 group-hover:text-white/25">
                      {service.number}
                    </span>
                    <div className="flex size-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md transition duration-500 group-hover:rotate-6 group-hover:scale-110 sm:size-16 sm:rounded-3xl">
                      <Icon className="size-7 sm:size-8" strokeWidth={1.4} aria-hidden="true" />
                    </div>
                  </div>

                  <div className="relative mt-auto pt-14">
                    <InkHeading
                      as="h3"
                      text={service.name}
                      className="max-w-2xl text-[clamp(1.55rem,3vw,3.2rem)] font-semibold uppercase leading-[0.95] tracking-[-0.04em]"
                    />
                    <p className="mt-5 max-w-2xl text-[clamp(0.9rem,1.3vw,1.15rem)] font-light leading-relaxed text-[#D7E2EA]/65">
                      {service.description}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[0.67rem] font-medium uppercase tracking-wider text-white/70 backdrop-blur sm:text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ArrowUpRight
                    className="absolute bottom-8 right-8 size-8 translate-y-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-70"
                    strokeWidth={1.3}
                    aria-hidden="true"
                  />
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
