import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Juice Bar POS',
  description: 'Staff portal for Juice Bar point of sale',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
