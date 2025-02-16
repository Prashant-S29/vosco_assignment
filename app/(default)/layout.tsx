// styles
import '@/styles/globals.css';

// font
import { font } from '@/public/font';

// components
import { Navbar } from '@/components/layout';
import { Footer } from '@/components/layout';
import Providers from '@/utils/provider';
import { generateSeo } from '@/utils/generateSeo';
import { Metadata } from 'next';

// metadata
export const metadata: Metadata = generateSeo({
  title: {
    template: '%s | Vocso Assignment',
    default: 'Vocso Assignment',
  },
  description: 'This is the solution for the assignment by Vocso`',
  url: 'https://vocso-assignment-three.vercel.app',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.montserrat.className} antialiased`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
