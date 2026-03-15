import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jaime Demo - Juice Bar POS',
  description: 'A modern point-of-sale system for juice bars',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0a0a0b] text-[#fafafa] antialiased`}>
        {children}
      </body>
    </html>
  );
}
