import { FadeIn } from '../components/motion/FadeIn';
import { Magnet } from '../components/motion/Magnet';
import { ContactButton } from '../components/ui/ContactButton';
import { InkHeading } from '../components/ui/InkHeading';
import { assetPath } from '../lib/assets';

const navigation = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Контакты', href: '#contact' },
] as const;

export function HeroSection() {
  return (
    <header className="hero-viewport relative flex h-screen flex-col overflow-x-clip bg-[#0C0C0C]">
      <FadeIn as="nav" delay={0} y={-20} className="relative z-30 px-6 pt-6 md:px-10 md:pt-8">
        <ul className="flex items-center justify-between">
          {navigation.map((item) => (
            <li key={item.label}>
              <a
                className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D7E2EA] md:text-lg lg:text-[1.4rem]"
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
          className="hero-heading w-full whitespace-nowrap text-[9vw] font-black uppercase leading-none tracking-tight sm:text-[10.8vw] md:text-[11vw] lg:text-[11.2vw]"
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
          <p className="max-w-[160px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]">
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
