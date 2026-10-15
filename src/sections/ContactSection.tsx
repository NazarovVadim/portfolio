import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../components/motion/FadeIn';
import { InkHeading } from '../components/ui/InkHeading';

const contactEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

const inputClasses =
  'block w-full rounded-[21px] border-0 bg-white px-5 py-4 text-base font-light normal-case tracking-normal text-[#0C0C0C] outline-none placeholder:text-[#0C0C0C]/25 sm:px-6 sm:py-5 sm:text-lg';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactSection() {
  const isConfigured = Boolean(contactEndpoint);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!contactEndpoint || submitStatus === 'submitting') {
      return;
    }

    const form = event.currentTarget;
    setSubmitStatus('submitting');

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    }
  };

  const statusMessage =
    submitStatus === 'success'
      ? 'Сообщение отправлено. Скоро свяжусь с вами.'
      : submitStatus === 'error'
        ? 'Не удалось отправить сообщение. Попробуйте ещё раз.'
        : '';

  return (
    <section
      id="contact"
      className="relative z-20 overflow-hidden scroll-mt-8 rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <div className="pointer-events-none absolute -left-40 bottom-0 size-[520px] rounded-full bg-fuchsia-200/40 blur-[130px]" />
      <div className="pointer-events-none absolute -right-48 top-20 size-[580px] rounded-full bg-orange-100/60 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-12 sm:mb-16 md:mb-20">
            <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.35em] opacity-45 sm:text-sm">
              Есть задача? Давайте обсудим
            </p>
            <InkHeading
              as="h2"
              text="Контакты"
              className="text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-[-0.06em]"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <form
            className="grid gap-7 rounded-[32px] border border-black/[0.07] bg-[#F5F3F6]/90 p-5 shadow-[0_35px_100px_rgba(56,15,64,0.12)] backdrop-blur-xl sm:gap-8 sm:rounded-[44px] sm:p-8 md:p-10"
            action={contactEndpoint}
            method="post"
            onSubmit={(event) => void handleSubmit(event)}
            aria-describedby={statusMessage ? 'contact-form-status' : undefined}
          >
            <input type="hidden" name="_subject" value="Новая заявка с портфолио" />
            <div className="grid gap-7 md:grid-cols-2 md:gap-5">
              <label className="grid gap-3 text-xs font-semibold uppercase tracking-[0.24em] sm:text-sm">
                Имя
                <span className="contact-field">
                  <input
                    className={inputClasses}
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Как к вам обращаться"
                    required
                  />
                </span>
              </label>
              <label className="grid gap-3 text-xs font-semibold uppercase tracking-[0.24em] sm:text-sm">
                Почта
                <span className="contact-field">
                  <input
                    className={inputClasses}
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="name@example.com"
                    required
                  />
                </span>
              </label>
            </div>

            <label className="grid gap-3 text-xs font-semibold uppercase tracking-[0.24em] sm:text-sm">
              Сообщение
              <span className="contact-field rounded-[28px]">
                <textarea
                  className={`${inputClasses} min-h-52 resize-none rounded-[27px] sm:min-h-60`}
                  name="message"
                  placeholder="Коротко опишите задачу, сроки и ожидаемый результат"
                  required
                />
              </span>
            </label>

            <div className="flex min-h-14 flex-col items-start gap-5 pt-1 sm:flex-row sm:items-center sm:justify-end">
              {statusMessage && (
                <p
                  id="contact-form-status"
                  className="mr-auto max-w-xl text-sm font-light leading-relaxed opacity-60"
                  role="status"
                  aria-live="polite"
                >
                  {statusMessage}
                </p>
              )}
              <button
                className="contact-button group inline-flex min-w-48 items-center justify-center gap-3 whitespace-nowrap rounded-full px-10 py-4 text-sm font-medium uppercase tracking-widest text-white transition-transform duration-200 enabled:motion-safe:hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7621B0] md:px-12 md:text-base disabled:saturate-50"
                type="submit"
                disabled={!isConfigured || submitStatus === 'submitting'}
                title={!isConfigured ? 'Форма временно недоступна' : undefined}
              >
                {submitStatus === 'submitting' ? 'Отправляю…' : 'Отправить'}
                <ArrowUpRight
                  className="size-4 transition-transform group-enabled:group-hover:translate-x-0.5 group-enabled:group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
