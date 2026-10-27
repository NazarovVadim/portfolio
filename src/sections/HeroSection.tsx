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
  return (
    <header className="hero-viewport relative flex h-screen flex-col overflow-x-clip bg-[#0C0C0C]">
      <FadeIn as="nav" delay={0} y={-20} className="relative z-30 px-6 pt-6 md:px-10 md:pt-8">
        <ul className="flex items-center justify-between" gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-md sm:border-0 sm:bg-transparent sm:p-0 sm:gap-4 md:gap-8>
          {navigation.map((item) => (
            <li key={item.label}>
              <a
                className="rounded-full px-2.5 py-1 text-[0.72rem] font-medium uppercase tracking-tight text-[#D7E2EA] transition-all hover:bg-white/10 sm:px-0 sm:py-0 sm:text-xs sm:tracking-wider sm:hover:bg-transparent sm:hover:opacity-70 md:text-sm"className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-300 hover:opacity-70"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>

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
