import React from 'react';

// icons
import { SearchIcon } from '@/public/icons';

// components
import { Input } from '@/components/ui/input';

export const SearchPropertyByCityCTA: React.FC = () => {
  return (
    <div className="relative flex items-center gap-2">
      <Input placeholder="Search properties by city" className="h-[50px] w-[450px]" variant="brand" Icon={SearchIcon} />
    </div>
  );
};
