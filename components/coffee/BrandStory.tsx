'use client';

import { motion } from 'framer-motion';
import { TextEffect } from '@/components/core/text-effect';

export default function BrandStory() {
  return (
    <section
      id="story"
      className="relative py-16 sm:py-24 lg:py-40 overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0">
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/sequence/ezgif-frame-001.jpg`}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover opacity-[0.08]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, #050505 0%, transparent 30%, transparent 70%, #050505 100%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-8 lg:px-16 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="block text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase mb-6 sm:mb-10"
          style={{ color: '#B88955' }}
        >
          Our Story
        </motion.span>

        <h2
          className="text-[clamp(1.5rem,5.5vw,4.25rem)] font-bold tracking-[-0.04em] leading-[1.02] mb-6 sm:mb-10"
          style={{ color: '#F5F1E9' }}
        >
          <TextEffect per="word" preset="fade">
            {"WE DON'T JUST MAKE COFFEE.\nWE MAKE THE MOMENT AROUND IT."}
          </TextEffect>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
          style={{ color: '#AAA59C' }}
        >
          Every cup begins with better beans, thoughtful roasting and a belief
          that coffee deserves more than a rushed five minutes.
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mx-auto mt-10 sm:mt-16 h-px w-20 sm:w-24 origin-left"
          style={{ background: 'rgba(184, 137, 85, 0.3)' }}
        />
      </div>
    </section>
  );
}
