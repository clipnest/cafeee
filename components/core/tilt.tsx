'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface TiltProps {
  children: React.ReactNode;
  className?: string;
  rotationFactor?: number;
  style?: React.CSSProperties;
}

export function Tilt({
  children,
  className = '',
  rotationFactor = 6,
  style,
}: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rotateX.set(-((e.clientY - cy) / (rect.height / 2)) * rotationFactor);
    rotateY.set(((e.clientX - cx) / (rect.width / 2)) * rotationFactor);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
        ...style,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
