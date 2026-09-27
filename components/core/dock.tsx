'use client';

import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  type ReactNode,
} from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  type MotionValue,
} from 'framer-motion';

/* ── Context ── */
const MouseCtx = createContext<MotionValue<number>>(null!);

/* ── Dock ── */
export function Dock({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const mouseX = useMotionValue(Infinity);

  return (
    <MouseCtx.Provider value={mouseX}>
      <motion.nav
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={`flex items-end gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2.5 rounded-2xl max-w-[calc(100vw-24px)] overflow-x-auto scrollbar-hide ${className}`}
        style={{
          background: 'rgba(36, 19, 15, 0.85)',
          border: '1px solid rgba(243, 239, 231, 0.12)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {children}
      </motion.nav>
    </MouseCtx.Provider>
  );
}

/* ── DockItem ── */
export function DockItem({
  children,
  label,
  onClick,
  href,
}: {
  children: ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useContext(MouseCtx);
  const [hovered, setHovered] = useState(false);
  const isTouchRef = useRef(false);

  useEffect(() => {
    isTouchRef.current =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;
  }, []);

  const distance = useTransform(mouseX, (val: number) => {
    const el = ref.current;
    if (!el) return 150;
    const rect = el.getBoundingClientRect();
    return val - rect.left - rect.width / 2;
  });

  const sizeRaw = useTransform(distance, [-100, 0, 100], [36, 52, 36]);
  const size = useSpring(sizeRaw, { mass: 0.1, stiffness: 150, damping: 12 });

  const handleClick = (e: React.MouseEvent) => {
    if (href) {
      e.preventDefault();
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => {
        if (!isTouchRef.current) setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center outline-none touch-manipulation"
    >
      <AnimatePresence>
        {hovered && !isTouchRef.current && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-9 whitespace-nowrap rounded-md px-2.5 py-1"
            style={{
              background: 'rgba(36, 19, 15, 0.92)',
              color: '#F3EFE7',
              border: '1px solid rgba(243, 239, 231, 0.1)',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
            }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        className="flex items-center justify-center rounded-xl transition-colors duration-200"
      >
        {children}
      </motion.div>
    </button>
  );
}

/* ── DockIcon (pass-through) ── */
export function DockIcon({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

/* ── DockLabel (pass-through) ── */
export function DockLabel({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
