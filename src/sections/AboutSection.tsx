import { AnimatedText } from '../components/motion/AnimatedText';
import { FadeIn } from '../components/motion/FadeIn';
import { ContactButton } from '../components/ui/ContactButton';
import { assetPath } from '../lib/assets';

const aboutText =
  "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!";

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
            <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
              About me
            </h2>
          </FadeIn>
          <AnimatedText
            text={aboutText}
            className="max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
          />
        </div>
        <div className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton href="#contact" />
        </div>
      </div>
    </section>
  );
}
