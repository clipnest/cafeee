'use client';

import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  items: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function AnimatedBackground({
  items,
  value,
  onChange,
  className = '',
}: AnimatedBackgroundProps) {
  return (
    <div
      className={`inline-flex gap-1 rounded-full p-1.5 ${className}`}
      style={{ background: 'rgba(255,255,255,0.04)' }}
    >
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className="relative px-5 py-2.5 text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-300"
          style={{ color: value === item ? '#F5F1E9' : '#AAA59C' }}
        >
          {value === item && (
            <motion.div
              layoutId="coffee-tab"
              className="absolute inset-0 rounded-full"
              style={{
                background: 'rgba(184, 137, 85, 0.15)',
                border: '1px solid rgba(184, 137, 85, 0.2)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">{item}</span>
        </button>
      ))}
    </div>
  );
}
