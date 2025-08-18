import './globals.css';
import type { Metadata } from 'next';
import {  Plus_Jakarta_Sans, Lora } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  
});

export const metadata: Metadata = {
  title: 'Doodle - Collaborative Whiteboarding Platform',
  description: 'The modern collaborative whiteboarding platform for teams. Brainstorm, plan, and create together in real-time from anywhere.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
