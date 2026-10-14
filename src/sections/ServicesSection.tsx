import { FadeIn } from '../components/motion/FadeIn';
import { services } from '../data/services';

export function ServicesSection() {
  return (
    <section className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn>
        <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl border-t border-[rgba(12,12,12,0.15)]">
        {services.map((service, index) => (
          <FadeIn key={service.number} delay={index * 0.1}>
            <article className="grid grid-cols-[minmax(72px,0.32fr)_1fr] gap-5 border-b border-[rgba(12,12,12,0.15)] py-8 sm:grid-cols-[minmax(120px,0.36fr)_1fr] sm:gap-8 sm:py-10 md:py-12">
              <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none">
                {service.number}
              </span>
              <div className="flex flex-col justify-center gap-3 sm:gap-4">
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight">
                  {service.name}
                </h3>
                <p className="max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">
                  {service.description}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
