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
    <div className="w-full overflow-x-auto scrollbar-hide py-1 flex justify-start sm:justify-center px-4 sm:px-0">
      <div
        className={`inline-flex gap-1 rounded-full p-1.5 min-w-max ${className}`}
        style={{ background: 'rgba(255,255,255,0.04)' }}
      >
        {items.map((item) => (
          <button
            key={item}
            onClick={() => onChange(item)}
            className="relative min-h-[44px] px-4 sm:px-5 py-2 text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-300 flex items-center justify-center"
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
    </div>
  );
}
