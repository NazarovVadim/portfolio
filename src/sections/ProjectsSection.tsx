import { FadeIn } from '../components/motion/FadeIn';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projects } from '../data/projects';

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 scroll-mt-8 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-20 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pb-24 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-32 md:pt-32"
    >
      <FadeIn>
        <h2 className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
          Проекты
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-[1500px]">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={projects.length}
          />
        ))}
        <div className="hidden h-[55vh] md:block" aria-hidden="true" />
      </div>
    </section>
  );
}
