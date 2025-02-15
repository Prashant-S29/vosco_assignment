import type { Metadata } from 'next';

// styles
import '@/styles/globals.css';

// font
import { font } from '@/public/font';

// components
import { Navbar } from '@/components/layout';
import { Footer } from '@/components/layout';

// metadata
export const metadata: Metadata = {
  title: {
    default: 'Vocso Assignment',
    template: '%s | Vocso Assignment',
  },
  description: 'This is the solution for the assignment by Vocso',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.montserrat.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
