'use client';

import { motion } from 'framer-motion';
import { Flame, Truck, Leaf } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    title: 'HAND ROASTED',
    desc: 'Small batches roasted by hand to bring out complex flavour profiles unique to each origin.',
    icon: Flame,
  },
  {
    num: '02',
    title: 'DIRECT TRADE',
    desc: 'Sourced directly from farmers, ensuring fair pricing and the freshest beans possible.',
    icon: Truck,
  },
  {
    num: '03',
    title: 'ORGANIC TASTE',
    desc: 'No artificial additives. Just pure coffee, prepared with care and served with intention.',
    icon: Leaf,
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{ background: '#050505' }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-2xl mb-16 sm:mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="block text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase mb-5"
            style={{ color: '#B88955' }}
          >
            The Process
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.04em] leading-[0.95] mb-6"
            style={{ color: '#F5F1E9' }}
          >
            THE TASTE STARTS
            <br />
            BEFORE THE FIRST SIP.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: '#AAA59C' }}
          >
            From carefully selected beans to precise roasting and final
            preparation, every step is designed to bring out the character of the
            coffee.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: 'easeOut',
                }}
                className="group p-7 sm:p-8 rounded-2xl transition-all duration-500"
                style={{
                  background: '#11130F',
                  border: '1px solid rgba(243, 239, 231, 0.06)',
                }}
              >
                {/* Icon + Number */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-xl"
                    style={{ background: 'rgba(184, 137, 85, 0.1)' }}
                  >
                    <Icon size={18} style={{ color: '#B88955' }} />
                  </div>
                  <span
                    className="text-[10px] font-bold tracking-[0.2em]"
                    style={{ color: 'rgba(184, 137, 85, 0.4)' }}
                  >
                    {step.num}
                  </span>
                </div>

                <h3
                  className="text-sm sm:text-base font-bold tracking-[0.05em] uppercase mb-3"
                  style={{ color: '#F5F1E9' }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ color: '#AAA59C' }}
                >
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
