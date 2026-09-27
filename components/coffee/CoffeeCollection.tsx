'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedBackground } from '@/components/core/animated-background';
import { Tilt } from '@/components/core/tilt';
import { Cursor } from '@/components/core/cursor';

const TABS = ['All', 'Coffee', 'Cold Brew', 'Signature', 'Merch'];

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  tags: string[];
}

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Milton's Choco Coffee",
    category: 'Cold Coffee · Signature',
    price: '₹180',
    image: `${BASE}/products/milton-choco.jpg`,
    tags: ['All', 'Coffee', 'Signature'],
  },
  {
    id: 2,
    name: 'Classic Cold Brew',
    category: 'Cold Brew · Original',
    price: '₹160',
    image: `${BASE}/flavours/flavour-1.jpg`,
    tags: ['All', 'Cold Brew'],
  },
  {
    id: 3,
    name: 'Caramel Macchiato',
    category: 'Signature · Premium',
    price: '₹220',
    image: `${BASE}/flavours/flavour-4.jpg`,
    tags: ['All', 'Signature'],
  },
  {
    id: 4,
    name: 'Dark Mocha',
    category: 'Coffee · Dark Roast',
    price: '₹190',
    image: `${BASE}/products/dark-mocha.jpg`,
    tags: ['All', 'Coffee'],
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
    >
      <Tilt rotationFactor={6}>
        <Cursor text="VIEW +">
          <div
            className="group rounded-2xl overflow-hidden transition-all duration-500"
            style={{
              background: '#11130F',
              border: '1px solid rgba(243, 239, 231, 0.06)',
            }}
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    'linear-gradient(to top, rgba(5,5,5,0.5) 0%, transparent 60%)',
                }}
              />
            </div>

            {/* Info */}
            <div className="p-5 sm:p-6 flex flex-col gap-2">
              <span
                className="text-[10px] font-medium tracking-[0.15em] uppercase"
                style={{ color: '#B88955' }}
              >
                {product.category}
              </span>
              <h3
                className="text-base sm:text-lg font-semibold tracking-[-0.02em]"
                style={{ color: '#F5F1E9' }}
              >
                {product.name}
              </h3>
              <div className="flex items-center justify-between mt-1">
                <span
                  className="text-lg font-bold"
                  style={{ color: '#D9A66F' }}
                >
                  {product.price}
                </span>
                <span
                  className="text-xs font-medium tracking-[0.1em] uppercase transition-colors duration-300 hover:text-[#D9A66F]"
                  style={{ color: '#AAA59C' }}
                >
                  Explore →
                </span>
              </div>
            </div>
          </div>
        </Cursor>
      </Tilt>
    </motion.div>
  );
}

export default function CoffeeCollection() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered =
    activeTab === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.tags.includes(activeTab));

  return (
    <section
      id="coffee"
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{ background: '#050505' }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-14 sm:mb-20"
        >
          <span
            className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase mb-4"
            style={{ color: '#B88955' }}
          >
            Our Collection
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.04em]"
            style={{ color: '#F5F1E9' }}
          >
            THE COFFEE MENU
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-14"
        >
          <AnimatedBackground
            items={TABS}
            value={activeTab}
            onChange={setActiveTab}
          />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
