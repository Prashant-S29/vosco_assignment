'use client';

import React, { useState } from 'react';

// icons
import { SearchIcon } from '@/public/icons';

// components
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

export const SearchPropertyByCityCTA: React.FC = () => {
  const router = useRouter();

  // states
  const [city, setCity] = useState('');

  const handleSearch = () => {
    console.log(city);

    if (city.trim() === '') {
      return;
    }

    // redirect to city page
    router.push(`/city/${city.trim().toLowerCase().replaceAll(' ', '-')}`);
  };

  return (
    <div className="relative flex items-center gap-2">
      <Input
        placeholder="Search properties by city (hit enter)"
        className="h-[50px] w-[450px]"
        variant="brand"
        Icon={SearchIcon}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
    </div>
  );
};
