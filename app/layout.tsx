import type { Metadata } from 'next';

// styles
import './globals.css';

// font
import { font } from '@/public/font';

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
    <html lang='en'>
      <body className={`${font.montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
