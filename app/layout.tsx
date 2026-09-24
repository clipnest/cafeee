import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Coffee Experience — Frozen in Time',
  description:
    'A cinematic scroll-controlled iced coffee experience. One perfect glass, frozen in a moment of motion.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
