'use client';

import { useEffect, useState } from 'react';
import {
  HomeIcon,
  Coffee,
  Package,
  ScrollText,
  Activity,
  Mail,
  Sun,
  Moon,
} from 'lucide-react';
import { Dock, DockItem } from '@/components/core/dock';

const NAV = [
  { title: 'Home', href: '#home', icon: HomeIcon },
  { title: 'Coffee', href: '#coffee', icon: Coffee },
  { title: 'Collection', href: '#collection', icon: Package },
  { title: 'Story', href: '#story', icon: ScrollText },
  { title: 'Process', href: '#process', icon: Activity },
  { title: 'Contact', href: '#contact', icon: Mail },
];

export default function CoffeeDock() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    if (light) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [light]);

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 z-40 max-w-[calc(100vw-16px)]"
      style={{ bottom: 'max(1rem, env(safe-area-inset-bottom, 1rem))' }}
    >
      <Dock>
        {NAV.map((item) => {
          const Icon = item.icon;
          return (
            <DockItem key={item.title} label={item.title} href={item.href}>
              <Icon
                size={18}
                strokeWidth={1.5}
                style={{ color: '#F3EFE7' }}
                className="transition-colors duration-200 hover:text-[#B88955]"
              />
            </DockItem>
          );
        })}

        {/* Theme toggle */}
        <DockItem
          label="Theme"
          onClick={() => setLight((v) => !v)}
        >
          {light ? (
            <Moon
              size={18}
              strokeWidth={1.5}
              style={{ color: '#F3EFE7' }}
            />
          ) : (
            <Sun
              size={18}
              strokeWidth={1.5}
              style={{ color: '#F3EFE7' }}
            />
          )}
        </DockItem>
      </Dock>
    </div>
  );
}
