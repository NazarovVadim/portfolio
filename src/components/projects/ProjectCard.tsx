import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useRef, type CSSProperties } from 'react';
import type { Project } from '../../data/projects';
import { getProjectTargetScale } from '../../lib/projectScale';
import { InkHeading } from '../ui/InkHeading';
import { LiveProjectButton } from '../ui/LiveProjectButton';

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

type StickyStyle = CSSProperties & { '--card-offset': string };

export function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });
  const targetScale = getProjectTargetScale(index, totalCards);
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const stickyStyle: StickyStyle = {
    '--card-offset': `${index * 24}px`,
    zIndex: index + 1,
  };

  const isInternalLink = project.liveUrl?.startsWith('#');

  return (
    <div ref={cardRef} className="project-card-sticky mb-8 md:mb-[18vh]" style={stickyStyle}>
      <motion.article
        className="origin-top rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 text-[#D7E2EA] sm:rounded-[50px] sm:p-6 md:p-8"
        style={{ scale: reduceMotion ? 1 : scale }}
      >
        <div className="mb-5 grid grid-cols-[auto_1fr] items-end gap-x-4 gap-y-4 sm:mb-6 sm:grid-cols-[auto_1fr_auto]">
          <span className="row-span-2 text-[clamp(3rem,10vw,140px)] font-black leading-[0.78] text-[#D7E2EA] md:row-span-1">
            {project.number}
          </span>
          <p className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/70 sm:text-sm">
            {project.category}
          </p>
          <InkHeading
            as="h3"
            text={project.name}
            className="col-start-2 text-[clamp(1.2rem,3vw,2.8rem)] font-medium uppercase leading-none text-[#D7E2EA]"
          />
          <div className="col-span-2 justify-self-end sm:col-span-1 sm:col-start-3 sm:row-span-2 sm:row-start-1 sm:self-center">
            {isInternalLink ? (
              <a
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] px-7 py-3 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-9 sm:py-3.5 sm:text-sm"
                href={project.liveUrl}
              >
                {project.ctaLabel ?? 'Обсудить проект'}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                />
              </a>
            ) : (
              <LiveProjectButton href={project.liveUrl} />
            )}
          </div>
        </div>

        <div className="mb-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-4 sm:p-6">
          <p className="max-w-4xl text-sm font-light leading-relaxed text-[#D7E2EA]/90 sm:text-base">
            {project.description}
          </p>
          <ul className="mt-4 grid gap-2.5 md:grid-cols-3">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 rounded-2xl border border-white/10 bg-white/[0.02] p-3 text-xs font-light leading-snug text-[#D7E2EA]/80 sm:text-sm"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-sky-400" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[0.68rem] font-medium uppercase tracking-wider text-white/80 sm:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-[40fr_60fr]">
          <div className="grid gap-3">
            <img
              src={project.images[0]}
              alt={`${project.name} — первый экран проекта`}
              className="h-[clamp(130px,16vw,230px)] w-full rounded-[40px] object-cover sm:rounded-[50px]"
              width="1280"
              height="720"
              loading="lazy"
              decoding="async"
            />
            <img
              src={project.images[1]}
              alt={`${project.name} — раздел проекта`}
              className="h-[clamp(160px,22vw,340px)] w-full rounded-[40px] object-cover sm:rounded-[50px]"
              width="1280"
              height="960"
              loading="lazy"
              decoding="async"
            />
          </div>
          <img
            src={project.images[2]}
            alt={`${project.name} — обзор сайта`}
            className="h-[clamp(300px,calc(38vw+0.75rem),582px)] w-full rounded-[40px] object-cover sm:rounded-[50px]"
            width="1280"
            height="1536"
            loading="lazy"
            decoding="async"
          />
        </div>
      </motion.article>
    </div>
  );
}
