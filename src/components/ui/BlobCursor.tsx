import { useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';

type CursorMode = 'default' | 'interactive' | 'heading' | 'text';

export function BlobCursor() {
  const reduceMotion = useReducedMotion();
  const cursorRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: -200, y: -200 });
  const modeRef = useRef<CursorMode>('default');

  useEffect(() => {
    const cursor = cursorRef.current;
    const shape = shapeRef.current;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (reduceMotion || !canHover.matches || !cursor || !shape) return;

    document.body.classList.add('has-blob-cursor');

    const detectMode = (target: EventTarget | null): CursorMode => {
      if (!(target instanceof Element)) return 'default';
      if (target.closest('input, textarea, select, [contenteditable="true"]')) return 'text';
      if (target.closest('h1, h2, h3, [data-cursor="heading"]')) return 'heading';
      if (target.closest('a, button, [role="button"]')) return 'interactive';
      return 'default';
    };

    const renderPosition = () => {
      frameRef.current = null;
      cursor.style.transform = `translate3d(${pointerRef.current.x}px, ${pointerRef.current.y}px, 0)`;
    };

    const updateMode = (target: EventTarget | null) => {
      const nextMode = detectMode(target);
      if (nextMode === modeRef.current) return;
      modeRef.current = nextMode;
      shape.dataset.mode = nextMode;
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
      cursor.dataset.visible = 'true';
      updateMode(event.target);
      if (frameRef.current === null) frameRef.current = requestAnimationFrame(renderPosition);
    };
    const handlePointerOver = (event: PointerEvent) => updateMode(event.target);
    const handlePointerDown = () => {
      shape.dataset.pressed = 'true';
    };
    const handlePointerUp = () => {
      shape.dataset.pressed = 'false';
    };
    const handlePointerLeave = () => {
      cursor.dataset.visible = 'false';
    };
    const handlePointerEnter = () => {
      cursor.dataset.visible = 'true';
    };

    shape.dataset.mode = 'default';
    shape.dataset.pressed = 'false';
    cursor.dataset.visible = 'false';
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
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <div ref={cursorRef} className="blob-cursor" aria-hidden="true">
      <div ref={shapeRef} className="blob-cursor-shape" />
    </div>
  );
}
