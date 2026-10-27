import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          aria-label="Наверх"
          className="fixed bottom-6 right-5 z-50 flex size-12 items-center justify-center rounded-full border border-white/20 bg-[#121215]/85 text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all hover:scale-110 hover:border-white/40 hover:bg-[#1a1a20] active:scale-95 sm:bottom-8 sm:right-8 sm:size-14"
        >
          <ArrowUp className="size-5 sm:size-6" strokeWidth={2.2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
