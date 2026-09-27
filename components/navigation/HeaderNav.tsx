'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const MENU_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'The Experience', href: '#experience' },
  { label: 'The Menu', href: '#coffee' },
  { label: 'Signature Pour', href: '#signature' },
  { label: 'The Process', href: '#process' },
  { label: 'Popular Picks', href: '#collection' },
  { label: 'Our Story', href: '#story' },
  { label: 'Stay In Touch', href: '#contact' },
];

export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setLight((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
      return next;
    });
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-3 sm:py-4 bg-[#050505]/85 backdrop-blur-xl border-b border-[#F3EFE7]/[0.06]'
            : 'py-5 sm:py-7 bg-transparent'
        }`}
        style={{ paddingTop: 'max(0.75rem, env(safe-area-inset-top, 0px))' }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex items-center gap-2 text-base sm:text-lg font-bold tracking-[0.2em] uppercase text-[#F5F1E9] transition-colors"
          >
            <span>MILTON&apos;S</span>
            <span className="text-[10px] tracking-[0.3em] text-[#B88955] font-light hidden sm:inline">
              COFFEE
            </span>
          </a>

          {/* Desktop Right quick CTA / theme */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6 text-xs font-medium tracking-[0.15em] uppercase text-[#AAA59C]">
              <a
                href="#coffee"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#coffee');
                }}
                className="hover:text-[#F5F1E9] transition-colors"
              >
                Menu
              </a>
              <a
                href="#process"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#process');
                }}
                className="hover:text-[#F5F1E9] transition-colors"
              >
                Process
              </a>
              <a
                href="#story"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#story');
                }}
                className="hover:text-[#F5F1E9] transition-colors"
              >
                Story
              </a>
            </nav>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full flex items-center justify-center border border-[#F3EFE7]/10 text-[#F3EFE7] hover:border-[#B88955]/40 transition-colors"
            >
              {light ? <Moon size={15} /> : <Sun size={15} />}
            </button>
          </div>

          {/* Mobile Menu Button (44x44px touch target) */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-11 h-11 rounded-full flex items-center justify-center text-[#F5F1E9] active:scale-95 transition-transform"
            >
              {light ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="relative w-11 h-11 rounded-full flex items-center justify-center border border-[#F3EFE7]/10 bg-[#11130F]/80 backdrop-blur-lg text-[#F5F1E9] active:scale-95 transition-all"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-16 left-4 right-4 z-50 rounded-2xl p-6 md:hidden overflow-hidden shadow-2xl"
              style={{
                background: 'rgba(24, 15, 12, 0.95)',
                border: '1px solid rgba(243, 239, 231, 0.12)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }}
            >
              <div className="flex flex-col gap-1">
                {MENU_ITEMS.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03, duration: 0.2 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-medium tracking-[0.12em] uppercase text-[#F5F1E9] hover:bg-white/[0.04] active:bg-[#B88955]/15 transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-[#B88955]/60 font-mono">0{idx + 1}</span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-[#F3EFE7]/[0.08] flex items-center justify-between text-xs text-[#AAA59C]">
                <span>MILTON&apos;S ICED COFFEE</span>
                <span>EST. 2026</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
