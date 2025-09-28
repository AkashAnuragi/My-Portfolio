import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import EasterEgg from '@/components/easter-egg';

export const metadata: Metadata = {
  title: 'Akash Anuragi | Interactive Portfolio',
  description: 'A modern, interactive, 3D portfolio website for Akash Anuragi, created with Next.js and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <EasterEgg />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
