import React from 'react';

// icons
import { LocationIcon, BuildingTypeIcon, BudgetIcon } from '@/public/icons';

// components
import { Button } from '@/components/ui/button';

export const HeroSearchPropertyCTA: React.FC = () => {
  return (
    <div className="grid w-full grid-cols-4 rounded-full border px-4 py-3">
      <div className="flex items-center gap-2">
        <div className="flex h-10 items-center justify-center rounded-full border px-3">
          <LocationIcon />
        </div>
        <div className="leading-tight">
          <h2 className="text-sm font-medium">Location</h2>
          <p className="text-xs text-primary/70">Search Location</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex h-10 items-center justify-center rounded-full border px-3">
          <BuildingTypeIcon />
        </div>
        <div className="leading-tight">
          <h2 className="text-sm font-medium">Select Type</h2>
          <p className="text-xs text-primary/70">Select</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex h-10 items-center justify-center rounded-full border px-3">
          <BudgetIcon />
        </div>
        <div className="leading-tight">
          <h2 className="text-sm font-medium">Budget</h2>
          <p className="text-xs text-primary/70">Determine your budget</p>
        </div>
      </div>
      <Button variant="brand" className="h-full rounded-full">
        Search Property
      </Button>
    </div>
  );
};
