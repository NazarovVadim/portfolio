import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Mail, MessageSquare, Code2 } from 'lucide-react';
import { FadeIn } from '../components/motion/FadeIn';
import { InkHeading } from '../components/ui/InkHeading';

const contactEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
const TG_URL = 'https://t.me/VadimNazarov_Dev';
const GITHUB_URL = 'https://github.com/NazarovVadim';
const EMAIL_ADDRESS = 'nazarovvadim802@gmail.com';

const inputClasses =
  'block w-full rounded-[21px] border-0 bg-white px-5 py-3.5 text-base font-light normal-case tracking-normal text-[#0C0C0C] outline-none placeholder:text-[#0C0C0C]/25 sm:px-6 sm:py-4 sm:text-lg';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'fallback' | 'error';

export function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitStatus === 'submitting') {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!contactEndpoint) {
      const formattedText = `Привет, Вадим! Заявка с портфолио:\nИмя: ${name}\nКонтакт: ${email}\nЗадача: ${message}`;
      try {
        await navigator.clipboard.writeText(formattedText);
      } catch {
        // Ignore clipboard errors
      }
      const subject = encodeURIComponent(`Заявка с портфолио от ${name}`);
      const body = encodeURIComponent(`Имя: ${name}\nКонтакт / Email: ${email}\n\nЗадача:\n${message}`);
      window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
      form.reset();
      setSubmitStatus('fallback');
      return;
    }

    setSubmitStatus('submitting');

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        body: formData,
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
      : submitStatus === 'fallback'
      ? 'Текст заявки скопирован в буфер и открыт в почте — также можете вставить его прямо в Telegram (@VadimNazarov_Dev).'
      : submitStatus === 'error'
      ? 'Не удалось отправить. Напишите напрямую в Telegram или на почту.'
      : '';

  return (
    <section
      id="contact"
      className="relative z-20 overflow-hidden scroll-mt-8 rounded-t-[40px] bg-white px-5 py-16 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <div className="pointer-events-none absolute -left-40 bottom-0 size-[520px] rounded-full bg-fuchsia-200/40 blur-[130px]" />
      <div className="pointer-events-none absolute -right-48 top-20 size-[580px] rounded-full bg-orange-100/60 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-10 sm:mb-14 md:mb-16">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.35em] opacity-45 sm:text-sm">
              Есть задача? Давайте обсудим
            </p>
            <InkHeading
              as="h2"
              text="Контакты"
              className="text-center text-[clamp(2.8rem,10vw,160px)] font-black uppercase leading-none tracking-[-0.06em]"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            <a
              href={TG_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-[22px] border border-black/10 bg-[#F5F3F6]/90 p-4 transition-all hover:-translate-y-1 hover:border-black/25 hover:bg-white hover:shadow-lg sm:rounded-[26px] sm:p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[#0C0C0C] text-white sm:size-11 sm:rounded-2xl">
                  <MessageSquare className="size-4 sm:size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-widest opacity-45">
                    Telegram (быстрый ответ)
                  </p>
                  <p className="text-xs font-semibold sm:text-base">@VadimNazarov_Dev</p>
                </div>
              </div>
              <ArrowUpRight className="size-4 opacity-40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 sm:size-5" />
            </a>

            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="group flex items-center justify-between rounded-[22px] border border-black/10 bg-[#F5F3F6]/90 p-4 transition-all hover:-translate-y-1 hover:border-black/25 hover:bg-white hover:shadow-lg sm:rounded-[26px] sm:p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[#0C0C0C] text-white sm:size-11 sm:rounded-2xl">
                  <Mail className="size-4 sm:size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-widest opacity-45">
                    Электронная почта
                  </p>
                  <p className="text-xs font-semibold sm:text-base">{EMAIL_ADDRESS}</p>
                </div>
              </div>
              <ArrowUpRight className="size-4 opacity-40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 sm:size-5" />
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-[22px] border border-black/10 bg-[#F5F3F6]/90 p-4 transition-all hover:-translate-y-1 hover:border-black/25 hover:bg-white hover:shadow-lg sm:rounded-[26px] sm:p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[#0C0C0C] text-white sm:size-11 sm:rounded-2xl">
                  <Code2 className="size-4 sm:size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-widest opacity-45">
                    GitHub профиль
                  </p>
                  <p className="text-xs font-semibold sm:text-base">github.com/NazarovVadim</p>
                </div>
              </div>
              <ArrowUpRight className="size-4 opacity-40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 sm:size-5" />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <form
            className="grid gap-6 rounded-[28px] border border-black/[0.07] bg-[#F5F3F6]/90 p-5 shadow-[0_25px_80px_rgba(56,15,64,0.1)] backdrop-blur-xl sm:gap-7 sm:rounded-[44px] sm:p-8 md:p-10"
            action={contactEndpoint}
            method="post"
            onSubmit={(event) => void handleSubmit(event)}
            aria-describedby={statusMessage ? 'contact-form-status' : undefined}
          >
            <input type="hidden" name="_subject" value="Новая заявка с портфолио" />
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">
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
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">
                Почта или Telegram
                <span className="contact-field">
                  <input
                    className={inputClasses}
                    type="text"
                    name="email"
                    autoComplete="email"
                    placeholder="name@example.com или @username"
                    required
                  />
                </span>
              </label>
            </div>

            <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">
              Сообщение
              <span className="contact-field rounded-[24px]">
                <textarea
                  className={`${inputClasses} min-h-40 resize-none rounded-[23px] sm:min-h-52`}
                  name="message"
                  placeholder="Коротко опишите задачу (сайт, Telegram-бот, интеграция с 1С / YCLIENTS), сроки и ожидаемый результат"
                  required
                />
              </span>
            </label>

            <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-between">
              {statusMessage ? (
                <p
                  id="contact-form-status"
                  className="text-center text-xs font-normal leading-relaxed text-[#0C0C0C]/75 sm:text-left sm:text-sm"
                  role="status"
                  aria-live="polite"
                >
                  {statusMessage}
                </p>
              ) : (
                <span className="hidden sm:inline-block text-xs text-[#0C0C0C]/40">
                  Ответ в течение нескольких часов
                </span>
              )}
              <button
                className="contact-button group inline-flex w-full items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all hover:translate-y-[-2px] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:text-sm"
                type="submit"
                disabled={submitStatus === 'submitting'}
              >
                <span>{submitStatus === 'submitting' ? 'Отправляем...' : 'Отправить заявку'}</span>
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
