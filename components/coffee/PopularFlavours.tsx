'use client';

import { motion } from 'framer-motion';
import { Tilt } from '@/components/core/tilt';
import { Cursor } from '@/components/core/cursor';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

const FLAVOURS = [
  {
    name: 'Classic Cold Coffee',
    price: '₹160',
    tag: 'Cold Brew',
    image: `${BASE}/flavours/flavour-1.jpg`,
  },
  {
    name: 'Mocha',
    price: '₹200',
    tag: 'Signature',
    image: `${BASE}/flavours/flavour-2.jpg`,
  },
  {
    name: 'Caramel Latte',
    price: '₹220',
    tag: 'Premium',
    image: `${BASE}/flavours/flavour-4.jpg`,
  },
  {
    name: 'Dark Chocolate',
    price: '₹210',
    tag: 'Dark Roast',
    image: `${BASE}/flavours/flavour-3.jpg`,
  },
];

export default function PopularFlavours() {
  return (
    <section
      id="collection"
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{ background: '#11130F' }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 sm:mb-20"
        >
          <span
            className="block text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase mb-5"
            style={{ color: '#B88955' }}
          >
            Popular Picks
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.04em] leading-[0.95]"
            style={{ color: '#F5F1E9' }}
          >
            FIND YOUR
            <br />
            PERFECT CUP.
          </h2>
        </motion.div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
          {FLAVOURS.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="min-w-[260px] sm:min-w-[280px] lg:min-w-0 snap-start"
            >
              <Tilt rotationFactor={6}>
                <Cursor text="VIEW +">
                  <div
                    className="group rounded-2xl overflow-hidden"
                    style={{
                      background: '#0A0C08',
                      border: '1px solid rgba(243, 239, 231, 0.06)',
                    }}
                  >
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={f.image}
                        alt={f.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Tag */}
                      <span
                        className="absolute top-3 left-3 px-3 py-1 rounded-full text-[9px] font-semibold tracking-[0.15em] uppercase"
                        style={{
                          background: 'rgba(184, 137, 85, 0.15)',
                          color: '#D9A66F',
                          border: '1px solid rgba(184, 137, 85, 0.2)',
                          backdropFilter: 'blur(8px)',
                        }}
                      >
                        {f.tag}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="p-4 sm:p-5">
                      <h3
                        className="text-sm font-semibold tracking-[-0.01em] mb-1"
                        style={{ color: '#F5F1E9' }}
                      >
                        {f.name}
                      </h3>
                      <div className="flex items-center justify-between mt-3">
                        <span
                          className="text-base font-bold"
                          style={{ color: '#D9A66F' }}
                        >
                          {f.price}
                        </span>
                        <button
                          className="px-4 py-1.5 rounded-full text-[9px] font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#B88955] hover:text-[#050505]"
                          style={{
                            background: 'rgba(184, 137, 85, 0.12)',
                            color: '#B88955',
                            border: '1px solid rgba(184, 137, 85, 0.2)',
                          }}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </Cursor>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
