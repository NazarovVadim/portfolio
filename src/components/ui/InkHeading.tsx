import { useEffect, useRef, type PointerEvent as ReactPointerEvent } from 'react';

type HeadingElement = 'h1' | 'h2' | 'h3';

interface InkHeadingProps {
  as: HeadingElement;
  text: string;
  className?: string;
}

interface TrailPoint {
  x: number;
  y: number;
}

export function InkHeading({ as: Tag, text, className = '' }: InkHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const revealRef = useRef<HTMLSpanElement>(null);
  const pointsRef = useRef<TrailPoint[]>([]);
  const frameRef = useRef<number | null>(null);
  const resetTimerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      if (resetTimerRef.current !== null) window.clearTimeout(resetTimerRef.current);
    },
    [],
  );

  const paintTrail = () => {
    frameRef.current = null;
    const reveal = revealRef.current;
    const points = pointsRef.current;
    if (!reveal || points.length === 0) return;

    const masks = points.flatMap((point, index) => {
      const progress = (index + 1) / points.length;
      const radius = 13 + progress * 54;
      const wobbleX = Math.sin(index * 2.17) * radius * 0.24;
      const wobbleY = Math.cos(index * 1.63) * radius * 0.18;
      return [
        `radial-gradient(ellipse ${radius * 1.45}px ${radius * 0.62}px at ${point.x}px ${point.y}px, #000 20%, rgba(0,0,0,.92) 48%, transparent 76%)`,
        `radial-gradient(circle ${radius * 0.46}px at ${point.x + wobbleX}px ${point.y + wobbleY}px, #000 18%, transparent 74%)`,
        `radial-gradient(circle ${radius * 0.28}px at ${point.x - wobbleX * 0.7}px ${point.y - wobbleY * 0.8}px, #000 12%, transparent 72%)`,
      ];
    });

    const mask = masks.join(',');
    reveal.style.maskImage = mask;
    reveal.style.webkitMaskImage = mask;
  };

  const handlePointerEnter = () => {
    if (resetTimerRef.current !== null) window.clearTimeout(resetTimerRef.current);
    pointsRef.current = [];
    if (revealRef.current) revealRef.current.style.opacity = '1';
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLHeadingElement>) => {
    const heading = headingRef.current;
    if (!heading) return;

    const bounds = heading.getBoundingClientRect();
    const nextPoint = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
    const lastPoint = pointsRef.current.at(-1);
    if (lastPoint && Math.hypot(nextPoint.x - lastPoint.x, nextPoint.y - lastPoint.y) < 5) return;

    pointsRef.current = [...pointsRef.current.slice(-17), nextPoint];
    if (frameRef.current === null) frameRef.current = requestAnimationFrame(paintTrail);
  };

  const handlePointerLeave = () => {
    if (revealRef.current) revealRef.current.style.opacity = '0';
    resetTimerRef.current = window.setTimeout(() => {
      pointsRef.current = [];
      if (revealRef.current) {
        revealRef.current.style.maskImage = 'none';
        revealRef.current.style.webkitMaskImage = 'none';
      }
    }, 420);
  };

  return (
    <Tag
      ref={headingRef}
      className={`ink-heading ${className}`}
      aria-label={text.replaceAll('\n', ' ')}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <span className="ink-heading-base" aria-hidden="true">
        {text}
      </span>
      <span ref={revealRef} className="ink-heading-reveal" aria-hidden="true">
        {text}
      </span>
    </Tag>
  );
}
