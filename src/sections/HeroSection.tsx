import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { FadeIn } from '../components/motion/FadeIn';
import { Magnet } from '../components/motion/Magnet';
import { ContactButton } from '../components/ui/ContactButton';
import { InkHeading } from '../components/ui/InkHeading';
import { assetPath } from '../lib/assets';

const navigation = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Навыки', href: '#services' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contact' },
] as const;

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="hero-viewport relative flex h-screen flex-col overflow-x-clip bg-[#0C0C0C]">
      {/* Навигация */}
      <FadeIn as="nav" delay={0} y={-20} className="relative z-30 px-5 pt-5 sm:px-8 sm:pt-6 md:px-10 md:pt-8">
        {/* Мобильная шапка: имя и бургер */}
        <div className="flex items-center justify-between md:hidden">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D7E2EA]/90">
            Вадим Назаров
          </span>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            className="flex size-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-white/10 active:scale-95"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Десктопное меню */}
        <ul className="hidden items-center justify-between md:flex">
          {navigation.map((item) => (
            <li key={item.label}>
              <a
                className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-300 hover:opacity-70"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>

      {/* Мобильное выпадающее меню-шторка */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 top-20 z-40 flex flex-col gap-1.5 rounded-3xl border border-white/15 bg-[#121216]/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl md:hidden"
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-wider text-[#D7E2EA] transition-colors hover:bg-white/10 active:bg-white/15"
              >
                <span>{item.label}</span>
                <span className="text-xs text-white/30">→</span>
              </a>
            ))}
            <div className="mt-2 border-t border-white/10 pt-3">
              <a
                href="https://t.me/VadimNazarov_Dev"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-2xl bg-white/10 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white/20"
              >
                Написать в Telegram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-0 mt-6 overflow-hidden sm:mt-4 md:-mt-5">
        <InkHeading
          as="h1"
          text="Привет, я Вадим"
          className="hero-heading w-full whitespace-nowrap text-center text-[9vw] font-black uppercase leading-none tracking-tighter text-[#EAF0F6]"
        />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:translate-y-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            className="pointer-events-auto w-[88vw] max-w-[900px] sm:w-[76vw] md:w-[68vw] lg:w-[60vw] xl:w-[52vw]"
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={assetPath('assets/images/hero/hero-portrait.png')}
              alt="Вадим, фуллстак-разработчик"
              className="block max-h-[92svh] w-full object-contain object-bottom"
              width="1040"
              height="1280"
              fetchPriority="high"
            />
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-5 px-6 pb-7 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[160px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wider text-[#9BB1C1]">
            фуллстак-разработчик: создаю сайты, сервисы и автоматизацию для бизнеса
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </header>
  );
}
