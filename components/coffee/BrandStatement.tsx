'use client';

import { motion } from 'framer-motion';
import { TextEffect } from '@/components/core/text-effect';

export default function BrandStatement() {
  return (
    <section
      id="experience"
      className="relative flex items-center overflow-hidden py-16 sm:py-24 lg:py-36"
      style={{ background: '#050505' }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">
          {/* Text */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
            <span
              className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase"
              style={{ color: '#B88955' }}
            >
              The Experience
            </span>

            <h2 className="text-[clamp(1.85rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em]">
              <TextEffect per="char" preset="fade">
                {'COFFEE,\nWITHOUT\nTHE ORDINARY.'}
              </TextEffect>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
              className="max-w-md text-sm sm:text-base leading-relaxed"
              style={{ color: '#AAA59C' }}
            >
              Carefully sourced beans. Bold roasting.
              <br />A slower approach to a better cup.
            </motion.p>

            <motion.a
              href="#coffee"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-1 sm:mt-2 inline-flex items-center gap-2 min-h-[44px] text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-300 hover:text-[#D9A66F]"
              style={{ color: '#B88955' }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#coffee')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore the collection
              <span className="text-base">→</span>
            </motion.a>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="relative aspect-[4/3] sm:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/sequence/ezgif-frame-150.jpg`}
              alt="Premium iced coffee"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(5,5,5,0.6) 0%, transparent 40%)',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
