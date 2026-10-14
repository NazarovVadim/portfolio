import { useEffect, useRef, type CSSProperties, type PropsWithChildren } from 'react';

interface MagnetProps extends PropsWithChildren {
  className?: string;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
}

export function Magnet({
  children,
  className,
  padding = 100,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
}: MagnetProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const isActiveRef = useRef(false);

  useEffect(() => {
    const target = targetRef.current;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!target || !canHover.matches) return;

    const reset = () => {
      isActiveRef.current = false;
      target.style.transition = inactiveTransition;
      target.style.transform = 'translate3d(0, 0, 0)';
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);

      frameRef.current = requestAnimationFrame(() => {
        const bounds = target.getBoundingClientRect();
        const isWithinRange =
          event.clientX >= bounds.left - padding &&
          event.clientX <= bounds.right + padding &&
          event.clientY >= bounds.top - padding &&
          event.clientY <= bounds.bottom + padding;

        if (!isWithinRange) {
          if (isActiveRef.current) reset();
          return;
        }

        isActiveRef.current = true;
        const x = (event.clientX - (bounds.left + bounds.width / 2)) / strength;
        const y = (event.clientY - (bounds.top + bounds.height / 2)) / strength;
        target.style.transition = activeTransition;
        target.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      reset();
    };
  }, [activeTransition, inactiveTransition, padding, strength]);

  const style: CSSProperties = { willChange: 'transform' };

  return (
    <div ref={targetRef} className={className} style={style}>
      {children}
    </div>
  );
}
