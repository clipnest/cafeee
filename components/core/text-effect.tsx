'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextEffectProps {
  children: string;
  per?: 'char' | 'word';
  preset?: 'fade' | 'slide';
  className?: string;
  delay?: number;
}

const VARIANTS = {
  fade: {
    hidden: { opacity: 0, y: 8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  },
  slide: {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.04,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  },
};

export function TextEffect({
  children,
  per = 'char',
  preset = 'fade',
  className = '',
  delay = 0,
}: TextEffectProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const lines = children.split('\n');
  const v = VARIANTS[preset];
  const adjusted = {
    hidden: v.hidden,
    visible: (i: number) => {
      const base = v.visible(i);
      return {
        ...base,
        transition: { ...base.transition, delay: delay + base.transition.delay },
      };
    },
  };

  let idx = 0;

  return (
    <span ref={ref} className={className}>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {(per === 'word' ? line.split(/\s+/) : line.split('')).map(
            (unit, ui) => {
              const i = idx++;
              const isSpace = unit === ' ' || unit === '';
              return (
                <motion.span
                  key={`${li}-${ui}`}
                  custom={i}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={adjusted}
                  className="inline-block"
                  style={isSpace ? { width: '0.3em' } : undefined}
                >
                  {isSpace ? '\u00A0' : unit}
                  {per === 'word' ? '\u00A0' : ''}
                </motion.span>
              );
            },
          )}
        </span>
      ))}
    </span>
  );
}
