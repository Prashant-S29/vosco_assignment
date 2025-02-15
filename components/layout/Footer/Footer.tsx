import Link from 'next/link';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer data-container className="flex w-full items-center justify-between bg-primary py-3">
      <p className="text-xs text-primary-foreground">
        Solution by{' '}
        <Link href="https://prashantsingh.me" target="_blank" className="underline underline-offset-4">
          Prashant Singh
        </Link>
      </p>
      <p className="text-xs text-primary-foreground">
        <Link
          href="https://github.com/Prashant-S29/vosco_assignment"
          target="_blank"
          className="underline underline-offset-4"
        >
          View on GitHub
        </Link>
      </p>
    </footer>
  );
};
