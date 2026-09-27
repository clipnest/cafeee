'use client';

import { motion } from 'framer-motion';

const NAV_COLS = [
  {
    title: 'Explore',
    links: ['Home', 'Coffee', 'Collections', 'Our Story'],
  },
  {
    title: 'Connect',
    links: ['Instagram', 'Facebook', 'Pinterest', 'Email'],
  },
  {
    title: 'Visit',
    links: ['Store', 'Contact', 'Location'],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: '#24130F' }}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16 py-14 sm:py-20 lg:py-28">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.04em]"
              style={{ color: '#F5F1E9' }}
            >
              MILTON&apos;S
            </motion.h3>
            <p
              className="max-w-xs text-xs sm:text-sm leading-relaxed"
              style={{ color: '#AAA59C' }}
            >
              Premium coffee crafted for those who believe a great cup is worth
              the wait. Bold flavour, cold finish, no shortcuts.
            </p>
          </div>

          {/* Columns */}
          {NAV_COLS.map((col, ci) => (
            <div key={col.title} className="col-span-1 lg:col-span-2 flex flex-col gap-3 sm:gap-5">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className="text-[10px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: '#B88955' }}
              >
                {col.title}
              </motion.span>
              <ul className="flex flex-col gap-1 sm:gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="inline-flex items-center min-h-[36px] text-xs sm:text-sm transition-colors duration-300 hover:text-[#D9A66F]"
                      style={{ color: '#AAA59C' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider + Copyright */}
        <div
          className="mt-12 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{
            borderTop: '1px solid rgba(243, 239, 231, 0.08)',
            paddingBottom: 'max(1rem, env(safe-area-inset-bottom, 0px))',
          }}
        >
          <p
            className="text-[11px] sm:text-xs tracking-wide text-center sm:text-left"
            style={{ color: 'rgba(170, 165, 156, 0.5)' }}
          >
            © 2026 Milton&apos;s Coffee. All rights reserved.
          </p>
          <p
            className="text-[10px] sm:text-xs tracking-widest uppercase text-[#B88955]/60"
          >
            BRED FOR PERFECTION
          </p>
        </div>
      </div>
    </footer>
  );
}
