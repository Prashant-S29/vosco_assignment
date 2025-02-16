import React from 'react';

// components
import { Skeleton } from '@/components/ui/skeleton';

export const PropertyCardLoader: React.FC = () => {
  return <Skeleton className="h-[250px] w-full" />;
};
