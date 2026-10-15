import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

type CursorMode = 'default' | 'interactive' | 'heading' | 'text';

const cursorSizes: Record<CursorMode, { width: number; height: number }> = {
  default: { width: 22, height: 22 },
  interactive: { width: 54, height: 54 },
  heading: { width: 138, height: 108 },
  text: { width: 0, height: 0 },
};

export function BlobCursor() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(-200);
  const pointerY = useMotionValue(-200);
  const x = useSpring(pointerX, { stiffness: 620, damping: 38, mass: 0.22 });
  const y = useSpring(pointerY, { stiffness: 620, damping: 38, mass: 0.22 });
  const [mode, setMode] = useState<CursorMode>('default');
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (reduceMotion || !canHover.matches) return;

    document.body.classList.add('has-blob-cursor');

    const detectMode = (target: EventTarget | null): CursorMode => {
      if (!(target instanceof Element)) return 'default';
      if (target.closest('input, textarea, select, [contenteditable="true"]')) return 'text';
      if (target.closest('h1, h2, h3, [data-cursor="heading"]')) return 'heading';
      if (target.closest('a, button, [role="button"]')) return 'interactive';
      return 'default';
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      setVisible(true);
      setMode(detectMode(event.target));
    };
    const handlePointerOver = (event: PointerEvent) => setMode(detectMode(event.target));
    const handlePointerDown = () => setPressed(true);
    const handlePointerUp = () => setPressed(false);
    const handlePointerLeave = () => setVisible(false);
    const handlePointerEnter = () => setVisible(true);

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerover', handlePointerOver, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    document.documentElement.addEventListener('pointerleave', handlePointerLeave);
    document.documentElement.addEventListener('pointerenter', handlePointerEnter);

    return () => {
      document.body.classList.remove('has-blob-cursor');
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerover', handlePointerOver);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      document.documentElement.removeEventListener('pointerleave', handlePointerLeave);
      document.documentElement.removeEventListener('pointerenter', handlePointerEnter);
    };
  }, [pointerX, pointerY, reduceMotion]);

  if (reduceMotion) return null;

  const size = cursorSizes[mode];
  const isHeading = mode === 'heading';

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{ x, y }}
      aria-hidden="true"
    >
      <motion.div
        className="blob-cursor-shape"
        style={{
          translate: '-50% -50%',
          mixBlendMode: isHeading ? 'difference' : 'normal',
        }}
        animate={{
          width: size.width,
          height: size.height,
          opacity: visible && mode !== 'text' ? 1 : 0,
          scale: pressed ? 0.78 : 1,
          background: isHeading
            ? 'rgba(255, 255, 255, 0.96)'
            : mode === 'interactive'
              ? 'linear-gradient(135deg, #F100DC, #7A24D3 60%, #FF7A28)'
              : 'linear-gradient(135deg, #F100DC, #7A24D3 58%, #FF7A28)',
        }}
        transition={{ type: 'spring', stiffness: 420, damping: 28, mass: 0.35 }}
      />
    </motion.div>
  );
}
