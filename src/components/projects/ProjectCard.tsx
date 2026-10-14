import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef, type CSSProperties } from 'react';
import type { Project } from '../../data/projects';
import { getProjectTargetScale } from '../../lib/projectScale';
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
    '--card-offset': `${index * 28}px`,
    zIndex: index + 1,
  };

  return (
    <div ref={cardRef} className="project-card-sticky mb-8 md:mb-[18vh]" style={stickyStyle}>
      <motion.article
        className="origin-top rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        style={{ scale: reduceMotion ? 1 : scale }}
      >
        <div className="mb-5 grid grid-cols-[auto_1fr] items-end gap-x-4 gap-y-4 sm:mb-7 sm:grid-cols-[auto_1fr_auto] md:mb-8 md:grid-cols-[auto_minmax(80px,0.35fr)_1fr_auto] md:gap-6">
          <span className="row-span-2 text-[clamp(3rem,10vw,140px)] font-black leading-[0.78] text-[#D7E2EA] md:row-span-1">
            {project.number}
          </span>
          <p className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/70 sm:text-sm">
            {project.category}
          </p>
          <h3 className="col-start-2 text-[clamp(1.2rem,3vw,2.8rem)] font-medium uppercase leading-none text-[#D7E2EA] md:col-start-auto">
            {project.name}
          </h3>
          <div className="col-span-2 justify-self-end sm:col-span-1 sm:col-start-3 sm:row-span-2 sm:row-start-1 sm:self-center md:col-start-auto md:row-span-1">
            <LiveProjectButton href={project.liveUrl} />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-[40fr_60fr]">
          <div className="grid gap-3">
            <img
              src={project.images[0]}
              alt={`${project.name} project detail one`}
              className="h-[clamp(130px,16vw,230px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              width="1280"
              height="720"
              loading="lazy"
              decoding="async"
            />
            <img
              src={project.images[1]}
              alt={`${project.name} project detail two`}
              className="h-[clamp(160px,22vw,340px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              width="1280"
              height="960"
              loading="lazy"
              decoding="async"
            />
          </div>
          <img
            src={project.images[2]}
            alt={`${project.name} project overview`}
            className="h-[clamp(300px,calc(38vw+0.75rem),582px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
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
