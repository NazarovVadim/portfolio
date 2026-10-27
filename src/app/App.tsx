import { BlobCursor } from '../components/ui/BlobCursor';
import { ScrollToTop } from '../components/ui/ScrollToTop';
import { AboutSection } from '../sections/AboutSection';
import { ContactSection } from '../sections/ContactSection';
import { HeroSection } from '../sections/HeroSection';
import { MarqueeSection } from '../sections/MarqueeSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { ReviewsSection } from '../sections/ReviewsSection';
import { ServicesSection } from '../sections/ServicesSection';

export function App() {
  return (
    <>
      <BlobCursor />
      <ScrollToTop />
      <main className="overflow-x-clip bg-[#0C0C0C]">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ReviewsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
