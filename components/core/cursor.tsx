'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

interface CursorProps {
  children: React.ReactNode;
  text?: string;
  className?: string;
}

export function Cursor({
  children,
  text = 'VIEW +',
  className = '',
}: CursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const x = useSpring(0, { stiffness: 300, damping: 28 });
  const y = useSpring(0, { stiffness: 300, damping: 28 });

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  if (isTouch) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative ${className}`}
      style={{ cursor: hovered ? 'none' : undefined }}
    >
      {children}
      <motion.div
        className="pointer-events-none absolute z-50 flex items-center justify-center rounded-full"
        style={{
          left: x,
          top: y,
          x: '-50%',
          y: '-50%',
          background: 'rgba(184, 137, 85, 0.25)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(184, 137, 85, 0.3)',
        }}
        animate={{
          width: hovered ? 80 : 0,
          height: hovered ? 80 : 0,
          opacity: hovered ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <span
          className="text-[10px] font-semibold tracking-[0.15em] uppercase"
          style={{ color: '#F5F1E9' }}
        >
          {text}
        </span>
      </motion.div>
    </div>
  );
}
