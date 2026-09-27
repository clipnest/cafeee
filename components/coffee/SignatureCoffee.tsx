'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GlowEffect } from '@/components/core/glow-effect';

export default function SignatureCoffee() {
  return (
    <section
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{ background: '#11130F' }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden order-2 lg:order-1"
          >
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/products/signature-coffee.jpg`}
              alt="Signature iced coffee pour"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, rgba(17,19,15,0.4) 0%, transparent 50%)',
              }}
            />
          </motion.div>

          {/* Text */}
          <div className="flex flex-col gap-6 sm:gap-8 order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase"
              style={{ color: '#B88955' }}
            >
              Signature Collection
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.04em] leading-[0.95]"
              style={{ color: '#F5F1E9' }}
            >
              THE
              <br />
              SIGNATURE
              <br />
              POUR.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="max-w-md text-sm sm:text-base leading-relaxed"
              style={{ color: '#AAA59C' }}
            >
              A rich, cold coffee built around deep roasted beans, smooth cream
              and a finish that stays with you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-5 mt-2"
            >
              <span
                className="text-xs font-medium tracking-[0.15em] uppercase"
                style={{ color: '#AAA59C' }}
              >
                FROM{' '}
                <span className="text-2xl font-bold tracking-tight" style={{ color: '#D9A66F' }}>
                  ₹180
                </span>
              </span>

              {/* Glow CTA */}
              <div className="relative inline-flex self-start rounded-lg overflow-visible">
                <GlowEffect
                  colors={['#B88955', '#D9A66F', '#F3EFE7', '#6B422E']}
                  mode="colorShift"
                  blur="soft"
                  duration={3}
                  scale={0.9}
                />
                <a
                  href="#"
                  className="relative z-10 inline-flex items-center gap-3 px-8 py-4 rounded-lg text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300"
                  style={{
                    background: '#11130F',
                    color: '#F5F1E9',
                    border: '1px solid rgba(184, 137, 85, 0.25)',
                  }}
                >
                  Explore Coffee
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
