'use client';

import {
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
  type MotionValue,
} from 'framer-motion';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
const FRAME_COUNT = 190;

function framePath(i: number): string {
  return `${BASE_PATH}/sequence/ezgif-frame-${String(i + 1).padStart(3, '0')}.jpg`;
}

/* ──────────────────────────── types ──────────────────────────────── */

interface Beat {
  id: string;
  title: string;
  subtitle: string;
  start: number;
  end: number;
  align: 'left' | 'center' | 'right';
  cta?: boolean;
}

/* ──────────────────────────── story beats ────────────────────────── */

const BEATS: Beat[] = [
  {
    id: 'a',
    title: 'COFFEE, FROZEN\nIN TIME.',
    subtitle: 'A perfect balance of rich coffee, creamy milk and ice.',
    start: 0,
    end: 0.20,
    align: 'center',
  },
  {
    id: 'b',
    title: 'MADE\nTO MOVE.',
    subtitle: 'Watch every drop, cube and splash come alive.',
    start: 0.25,
    end: 0.45,
    align: 'left',
  },
  {
    id: 'c',
    title: 'PURE COFFEE\nENERGY.',
    subtitle: 'Rich coffee meets cold milk in a moment frozen at full speed.',
    start: 0.50,
    end: 0.70,
    align: 'right',
  },
  {
    id: 'd',
    title: 'ONE\nPERFECT SIP.',
    subtitle: 'Bold. Cold. Creamy. Unforgettable.',
    start: 0.75,
    end: 0.92,
    align: 'center',
  },
  {
    id: 'e',
    title: 'YOUR COFFEE\nMOMENT.',
    subtitle: 'Made for slow moments. Served cold.',
    start: 0.93,
    end: 1.0,
    align: 'center',
    cta: true,
  },
];

/* ──────────────────────────── TextOverlay ────────────────────────── */

function TextOverlay({
  beat,
  progress,
}: {
  beat: Beat;
  progress: MotionValue<number>;
}) {
  const range = beat.end - beat.start;
  const fade = Math.max(range * 0.15, 0.008);

  const opacity = useTransform(
    progress,
    [beat.start, beat.start + fade, beat.end - fade, beat.end],
    [0, 1, 1, 0],
  );

  const y = useTransform(
    progress,
    [beat.start, beat.start + fade, beat.end - fade, beat.end],
    [30, 0, 0, -30],
  );

  /* positioning classes */
  const pos =
    beat.align === 'left'
      ? 'left-5 sm:left-12 lg:left-20 items-start text-left'
      : beat.align === 'right'
        ? 'right-5 sm:right-12 lg:right-20 items-end text-right'
        : 'left-1/2 -translate-x-1/2 items-center text-center';

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute bottom-[calc(7%+env(safe-area-inset-bottom,0px))] sm:bottom-[10%] md:bottom-[12%] flex flex-col gap-2.5 sm:gap-4
        w-full max-w-[calc(100vw-36px)] sm:max-w-md md:max-w-lg pointer-events-none z-10 ${pos}`}
    >
      {/* title */}
      <h2
        className="whitespace-pre-line text-[clamp(1.75rem,6.5vw,4.5rem)] font-bold leading-[0.94] tracking-[-0.04em]"
        style={{ color: 'rgba(255,255,255,0.92)' }}
      >
        {beat.title}
      </h2>

      {/* subtitle */}
      <p
        className="text-[clamp(0.8rem,1.8vw,1.15rem)] font-light leading-relaxed tracking-[-0.01em] max-w-xs sm:max-w-md"
        style={{ color: 'rgba(255,255,255,0.6)' }}
      >
        {beat.subtitle}
      </p>

      {/* CTA */}
      {beat.cta && (
        <a
          href="#coffee"
          className="mt-3 sm:mt-6 inline-flex items-center justify-center min-h-[44px] px-8 py-3 sm:px-14 sm:py-4
            border border-white/[0.18] text-white/90 text-xs
            font-medium tracking-[0.2em] uppercase
            hover:bg-white/[0.08] hover:border-white/30
            active:scale-95
            transition-all duration-300 pointer-events-auto"
        >
          Order Now
        </a>
      )}
    </motion.div>
  );
}

/* ──────────────────────────── ScrollIndicator ───────────────────── */

function ScrollIndicator({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.06, 0.10], [1, 1, 0]);
  const y = useTransform(progress, [0, 0.10], [0, 20]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute bottom-[calc(2rem+env(safe-area-inset-bottom,0px))] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none"
    >
      <span
        className="text-[0.6rem] sm:text-[0.65rem] font-medium tracking-[0.3em] uppercase"
        style={{ color: 'rgba(255,255,255,0.45)' }}
      >
        Scroll to experience
      </span>

      {/* animated line */}
      <motion.span
        className="block w-[1px] h-8 origin-top"
        style={{ background: 'rgba(255,255,255,0.25)' }}
        animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}

/* ──────────────────────────── LoadingScreen ──────────────────────── */

function LoadingScreen({ progress }: { progress: number }) {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8"
      style={{ background: '#050505' }}
    >
      {/* text */}
      <span
        className="text-[0.6rem] sm:text-[0.7rem] font-medium tracking-[0.35em] uppercase"
        style={{ color: 'rgba(255,255,255,0.4)' }}
      >
        Preparing your coffee
      </span>

      {/* percentage */}
      <span
        className="text-4xl sm:text-5xl font-extralight tabular-nums tracking-[-0.04em]"
        style={{ color: 'rgba(255,255,255,0.85)' }}
      >
        {progress}%
      </span>

      {/* progress bar */}
      <div className="w-48 sm:w-64 h-[1px] bg-white/[0.08] overflow-hidden rounded-full">
        <motion.div
          className="h-full rounded-full"
          style={{
            width: `${progress}%`,
            background:
              'linear-gradient(90deg, rgba(197,138,69,0.6), rgba(197,138,69,0.9))',
          }}
          transition={{ duration: 0.15 }}
        />
      </div>
    </motion.div>
  );
}

/* ──────────────────────────── CoffeeScroll ───────────────────────── */

export default function CoffeeScroll() {
  /* refs */
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);

  /* state */
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadPct, setLoadPct] = useState(0);
  const [ready, setReady] = useState(false);

  /* scroll → spring */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  /* ── preload all frames ── */
  useEffect(() => {
    let cancelled = false;
    const imgs: HTMLImageElement[] = new Array(FRAME_COUNT);
    let loaded = 0;

    const onDone = () => {
      loaded++;
      if (!cancelled) setLoadPct(Math.round((loaded / FRAME_COUNT) * 100));
      if (loaded === FRAME_COUNT && !cancelled) {
        setImages(imgs);
        // brief hold so the user sees 100 %
        setTimeout(() => {
          if (!cancelled) setReady(true);
        }, 400);
      }
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = 'async';
      img.src = framePath(i);
      img.onload = onDone;
      img.onerror = onDone;
      imgs[i] = img;
    }

    return () => {
      cancelled = true;
    };
  }, []);

  /* ── canvas draw helper ── */
  const draw = useCallback(
    (idx: number) => {
      const cvs = canvasRef.current;
      const img = images[idx];
      if (!cvs || !img || !img.naturalWidth) return;

      const ctx = cvs.getContext('2d', { alpha: false });
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width: cw, height: ch } = cvs.getBoundingClientRect();

      // only resize the buffer when dimensions actually change
      const bw = Math.round(cw * dpr);
      const bh = Math.round(ch * dpr);
      if (cvs.width !== bw || cvs.height !== bh) {
        cvs.width = bw;
        cvs.height = bh;
      }

      /* clear */
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, cw, ch);

      /* cover-fit — fills entire viewport, no gaps */
      const iAR = img.naturalWidth / img.naturalHeight;
      const cAR = cw / ch;
      let dw: number, dh: number;
      if (cAR > iAR) {
        dw = cw;
        dh = cw / iAR;
      } else {
        dh = ch;
        dw = ch * iAR;
      }
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;

      ctx.drawImage(img, dx, dy, dw, dh);
    },
    [images],
  );

  /* ── scroll → frame ── */
  useMotionValueEvent(smooth, 'change', (v) => {
    const idx = Math.min(
      Math.max(Math.floor(v * (FRAME_COUNT - 1)), 0),
      FRAME_COUNT - 1,
    );
    if (idx !== frameRef.current && images.length === FRAME_COUNT) {
      frameRef.current = idx;
      draw(idx);
    }
  });

  /* ── resize ── */
  useEffect(() => {
    if (!ready) return;

    const onResize = () => draw(frameRef.current);
    window.addEventListener('resize', onResize);
    // first paint
    draw(0);

    return () => window.removeEventListener('resize', onResize);
  }, [ready, draw]);

  /* ── render ── */
  return (
    <>
      {/* loading overlay */}
      <AnimatePresence>{!ready && <LoadingScreen progress={loadPct} />}</AnimatePresence>

      {/* scroll container */}
      <div ref={containerRef} className="relative h-[420vh] md:h-[500vh]">
        {/* sticky viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
          />

          {/* bottom gradient so text is readable over bright frames */}
          <div
            className="absolute inset-x-0 bottom-0 h-[45%] pointer-events-none z-[5]"
            style={{
              background:
                'linear-gradient(to top, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.4) 50%, transparent 100%)',
            }}
          />

          {/* scroll indicator */}
          <ScrollIndicator progress={smooth} />

          {/* story beats */}
          {BEATS.map((b) => (
            <TextOverlay key={b.id} beat={b} progress={smooth} />
          ))}
        </div>
      </div>
    </>
  );
}
