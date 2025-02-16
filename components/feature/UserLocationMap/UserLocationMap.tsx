'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// components
import { Button } from '@/components/ui/button';

// react leaflet
import { useMounted } from '@/hooks';
import 'leaflet/dist/leaflet.css';

const Map = dynamic(() => import('./Map').then((mod) => mod.Map), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

export const UserLocationMap: React.FC = () => {
  const mount = useMounted();

  if (!mount) return null;

  return (
    <div data-container className="flex w-full items-center justify-between bg-secondary py-6">
      <section className="w-fit">
        <h1 className="text-[30px] font-medium leading-tight">Find The Most</h1>
        <h1 className="text-[30px] font-medium leading-tight">Comfortable Residence</h1>
        <h1 className="text-[30px] font-medium leading-tight">Near To You</h1>

        <section className="mt-5 flex gap-2">
          <Button variant="brand">Nearest Residence</Button>
          <Button variant="brandOutline">View All Properties</Button>
        </section>
      </section>

      <section className="relative z-20 h-[300px] w-[500px] overflow-hidden rounded-xl bg-gray-200">
        <Map />
      </section>
    </div>
  );
};
