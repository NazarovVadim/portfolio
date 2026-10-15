import { AnimatedText } from '../components/motion/AnimatedText';
import { FadeIn } from '../components/motion/FadeIn';
import { ContactButton } from '../components/ui/ContactButton';
import { InkHeading } from '../components/ui/InkHeading';
import { assetPath } from '../lib/assets';

const aboutText =
  'Я Вадим, фуллстак-разработчик. Создаю веб-приложения от интерфейса до серверной логики, разрабатываю Telegram-ботов, интеграции с 1С и автоматизацию бизнес-процессов. Люблю превращать сложные задачи в понятные, быстрые и надёжные цифровые продукты.';

const decorations = [
  {
    src: 'assets/images/about/moon.png',
    className: 'left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]',
    delay: 0.1,
    x: -80,
  },
  {
    src: 'assets/images/about/object-left.png',
    className:
      'bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]',
    delay: 0.25,
    x: -80,
  },
  {
    src: 'assets/images/about/lego.png',
    className:
      'right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]',
    delay: 0.15,
    x: 80,
  },
  {
    src: 'assets/images/about/object-right.png',
    className:
      'bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]',
    delay: 0.3,
    x: 80,
  },
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen scroll-mt-8 items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10"
    >
      {decorations.map((decoration) => (
        <FadeIn
          key={decoration.src}
          className={`pointer-events-none absolute z-0 ${decoration.className}`}
          delay={decoration.delay}
          duration={0.9}
          x={decoration.x}
          y={0}
        >
          <img
            src={assetPath(decoration.src)}
            alt=""
            className="h-auto w-full"
            loading="lazy"
            decoding="async"
          />
        </FadeIn>
      ))}

      <div className="relative z-10 flex w-full flex-col items-center">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <InkHeading
              as="h2"
              text="Обо мне"
              className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight"
            />
          </FadeIn>
          <AnimatedText
            text={aboutText}
            className="max-w-[900px] text-center text-[clamp(1rem,1.8vw,1.4rem)] font-medium leading-relaxed text-[#D7E2EA]"
          />
        </div>
        <div className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton href="#contact" />
        </div>
      </div>
    </section>
  );
}
