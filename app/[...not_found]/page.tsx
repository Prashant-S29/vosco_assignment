import React from 'react';
import Link from 'next/link';

// components
import { Button } from '@/components/ui/button';

const NotFound: React.FC = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-[40px] font-semibold text-destructive">404</h1>
      <h1 className="text-xl font-semibold">Page Not Found</h1>
      <p className="text-sm text-primary/50">Oops! This page doesn&apos;t exist. Please check the URL and try again.</p>

      <Button className="mt-4" variant="secondary" asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  );
};

export default NotFound;
