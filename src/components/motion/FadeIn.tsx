import { motion, useReducedMotion } from 'framer-motion';
import { useMemo, type ElementType, type PropsWithChildren } from 'react';

interface FadeInProps extends PropsWithChildren {
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
}

export function FadeIn({
  as = 'div',
  children,
  className,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const MotionElement = useMemo(() => motion.create(as), [as]);

  return (
    <MotionElement
      className={className}
      initial={reduceMotion ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        delay: reduceMotion ? 0 : delay,
        duration: reduceMotion ? 0 : duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </MotionElement>
  );
}
