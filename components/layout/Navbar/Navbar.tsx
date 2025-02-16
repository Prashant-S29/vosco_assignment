'use client';

import React from 'react';
import Link from 'next/link';

// data
import { NavbarData } from './data';

// icons
import { AccountIcon, SearchIcon } from '@/public/icons';

// components
import { Button } from '@/components/ui/button';
import useScrollProgress from '@/hooks/useScrollProgress';

export const Navbar: React.FC = () => {
  const { y } = useScrollProgress(50);

  return (
    <header
      data-container
      className="fixed top-0 z-[9999] flex w-full items-center justify-between border bg-primary-foreground py-4"
      style={{ borderColor: y > 10 ? 'hsl(var(--border))' : 'hsl(var(--background))' }}
    >
      <Link href="/" className="font-medium">
        Vocso Assignment
      </Link>
      <section className="flex items-center justify-center gap-2">
        <nav className="flex items-center justify-center gap-2">
          {NavbarData.map((item) => (
            <Button key={item.label} asChild variant="ghost">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>
        <Button variant="ghost" size="icon" className="[&_svg]:size-5">
          <SearchIcon />
        </Button>
        <Button variant="ghost" size="icon" className="[&_svg]:size-5">
          <AccountIcon />
        </Button>
      </section>
    </header>
  );
};
