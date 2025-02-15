import type { Metadata } from 'next';

// styles
import '@/styles/globals.css';

// font
import { font } from '@/public/font';

export const metadata: Metadata = {
  title: 'Page Not Found | Vocso Assignment',
  description: 'This is the solution for the assignment by Vocso',
};

export default function NotFoundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
