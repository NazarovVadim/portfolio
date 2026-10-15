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
  createdAt: number;
}

const TRAIL_LIFETIME = 720;
const MAX_TRAIL_POINTS = 12;
const MIN_FRAME_INTERVAL = 28;

export function InkHeading({ as: Tag, text, className = '' }: InkHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const revealRef = useRef<HTMLSpanElement>(null);
  const pointsRef = useRef<TrailPoint[]>([]);
  const frameRef = useRef<number | null>(null);
  const lastPaintRef = useRef(0);

  useEffect(
    () => () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    },
    [],
  );

  const paintTrail = (timestamp: number) => {
    const reveal = revealRef.current;
    if (!reveal) {
      frameRef.current = null;
      return;
    }

    if (timestamp - lastPaintRef.current < MIN_FRAME_INTERVAL) {
      frameRef.current = requestAnimationFrame(paintTrail);
      return;
    }
    lastPaintRef.current = timestamp;

    const activePoints = pointsRef.current.filter(
      (point) => timestamp - point.createdAt < TRAIL_LIFETIME,
    );
    pointsRef.current = activePoints;

    if (activePoints.length === 0) {
      reveal.style.opacity = '0';
      frameRef.current = null;
      return;
    }

    const masks = activePoints.flatMap((point, index) => {
      const life = 1 - (timestamp - point.createdAt) / TRAIL_LIFETIME;
      const radius = 16 + life * 48;
      const wobbleX = Math.sin(index * 2.17) * radius * 0.28;
      const wobbleY = Math.cos(index * 1.63) * radius * 0.2;
      const alpha = Math.max(0, Math.min(1, life * 1.35));
      return [
        `radial-gradient(ellipse ${radius * 1.5}px ${radius * 0.6}px at ${point.x}px ${point.y}px, rgba(0,0,0,${alpha}) 18%, rgba(0,0,0,${alpha * 0.86}) 46%, transparent 76%)`,
        `radial-gradient(circle ${radius * 0.42}px at ${point.x + wobbleX}px ${point.y + wobbleY}px, rgba(0,0,0,${alpha * 0.9}) 14%, transparent 72%)`,
      ];
    });

    const mask = masks.join(',');
    reveal.style.opacity = '1';
    reveal.style.maskImage = mask;
    reveal.style.webkitMaskImage = mask;
    frameRef.current = requestAnimationFrame(paintTrail);
  };

  const schedulePaint = () => {
    if (frameRef.current === null) frameRef.current = requestAnimationFrame(paintTrail);
  };

  const handlePointerEnter = () => {
    pointsRef.current = [];
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLHeadingElement>) => {
    const heading = headingRef.current;
    if (!heading) return;

    const bounds = heading.getBoundingClientRect();
    const nextPoint = {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
      createdAt: performance.now(),
    };
    const lastPoint = pointsRef.current.at(-1);
    if (lastPoint && Math.hypot(nextPoint.x - lastPoint.x, nextPoint.y - lastPoint.y) < 6) {
      lastPoint.createdAt = nextPoint.createdAt;
      schedulePaint();
      return;
    }

    pointsRef.current = [...pointsRef.current.slice(-(MAX_TRAIL_POINTS - 1)), nextPoint];
    schedulePaint();
  };

  const handlePointerLeave = () => {
    schedulePaint();
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
