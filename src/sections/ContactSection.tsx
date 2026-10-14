import { FadeIn } from '../components/motion/FadeIn';

const contactEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

export function ContactSection() {
  const isConfigured = Boolean(contactEndpoint);

  return (
    <section
      id="contact"
      className="relative z-20 scroll-mt-8 rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="mb-12 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-16 md:mb-20">
            Контакты
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <form
            className="grid gap-8"
            action={contactEndpoint}
            method="post"
            aria-describedby={!isConfigured ? 'contact-form-status' : undefined}
          >
            <div className="grid gap-8 md:grid-cols-2">
              <label className="grid gap-3 text-sm font-medium uppercase tracking-widest sm:text-base">
                Имя
                <input
                  className="min-h-14 rounded-2xl border border-[#0C0C0C]/20 bg-transparent px-5 py-4 text-base font-light normal-case tracking-normal outline-none transition-colors focus:border-[#0C0C0C] sm:text-lg"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                />
              </label>
              <label className="grid gap-3 text-sm font-medium uppercase tracking-widest sm:text-base">
                Почта
                <input
                  className="min-h-14 rounded-2xl border border-[#0C0C0C]/20 bg-transparent px-5 py-4 text-base font-light normal-case tracking-normal outline-none transition-colors focus:border-[#0C0C0C] sm:text-lg"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </label>
            </div>

            <label className="grid gap-3 text-sm font-medium uppercase tracking-widest sm:text-base">
              Сообщение
              <textarea
                className="min-h-48 resize-y rounded-[28px] border border-[#0C0C0C]/20 bg-transparent px-5 py-4 text-base font-light normal-case tracking-normal outline-none transition-colors focus:border-[#0C0C0C] sm:text-lg"
                name="message"
                required
              />
            </label>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p id="contact-form-status" className="max-w-xl text-sm font-light opacity-60">
                {isConfigured
                  ? 'Расскажите о задаче — я свяжусь с вами и предложу решение.'
                  : 'Укажите VITE_CONTACT_FORM_ENDPOINT, чтобы включить отправку сообщений.'}
              </p>
              <button
                className="contact-button inline-flex min-w-44 items-center justify-center whitespace-nowrap rounded-full px-10 py-3.5 text-sm font-medium uppercase tracking-widest text-white transition-transform duration-200 enabled:motion-safe:hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0C0C0C] md:px-12 md:py-4 md:text-base disabled:cursor-not-allowed disabled:saturate-50"
                type="submit"
                disabled={!isConfigured}
                title={!isConfigured ? 'Адрес отправки формы не настроен' : undefined}
              >
                Отправить
              </button>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
