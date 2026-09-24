'use client';

import { motion } from 'framer-motion';

interface GlowEffectProps {
  colors?: string[];
  mode?: 'colorShift' | 'rotate';
  blur?: 'soft' | 'medium' | 'hard';
  duration?: number;
  scale?: number;
  className?: string;
}

export function GlowEffect({
  colors = ['#B88955', '#D9A66F', '#F3EFE7', '#6B422E'],
  mode = 'colorShift',
  blur = 'soft',
  duration = 3,
  scale = 0.9,
  className = '',
}: GlowEffectProps) {
  const blurPx = { soft: 15, medium: 25, hard: 40 }[blur];
  const gradient = `conic-gradient(from 0deg, ${colors.join(', ')}, ${colors[0]})`;

  return (
    <motion.div
      className={`absolute inset-0 -z-10 rounded-[inherit] opacity-50 ${className}`}
      style={{
        background: gradient,
        filter: `blur(${blurPx}px)`,
        transform: `scale(${scale})`,
      }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    />
  );
}
