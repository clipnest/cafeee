'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 lg:py-36 overflow-hidden"
      style={{ background: '#11130F' }}
    >
      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 sm:px-8 lg:px-16 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="block text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase mb-3 sm:mb-5"
          style={{ color: '#B88955' }}
        >
          Newsletter
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.04em] mb-3 sm:mb-5"
          style={{ color: '#F5F1E9' }}
        >
          STAY IN THE LOOP.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm sm:text-base leading-relaxed mb-8 sm:mb-12"
          style={{ color: '#AAA59C' }}
        >
          New blends, limited drops and coffee worth knowing about.
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-3 py-4"
          >
            <span className="text-2xl">☕</span>
            <p
              className="text-sm font-medium tracking-wide"
              style={{ color: '#D9A66F' }}
            >
              You&apos;re on the list. Coffee is coming.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto w-full"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 px-5 py-3.5 rounded-lg text-base sm:text-sm min-h-[48px] outline-none transition-all duration-300 focus:ring-1 w-full"
              style={{
                background: 'rgba(243, 239, 231, 0.04)',
                color: '#F5F1E9',
                border: '1px solid rgba(243, 239, 231, 0.1)',
              }}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:brightness-110 active:scale-95 min-h-[48px] w-full sm:w-auto flex-shrink-0"
              style={{
                background: '#B88955',
                color: '#050505',
              }}
            >
              Join the list
              <ArrowRight size={14} />
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
