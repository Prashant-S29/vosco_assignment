// app/providers.tsx
'use client';

import { ReactNode, useState } from 'react';

// components
import { AskForUserLocation } from '@/components/feature';

// hooks
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ProvidersProps {
  children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());

  const [locationGranted, setLocationGranted] = useState(false);
  const handleLocationChange = (granted: boolean) => {
    setLocationGranted(granted);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <>
        {children}

        {/* this is the most top level component, ask for user location whenever needed*/}
        {!locationGranted && <AskForUserLocation onLocationChange={handleLocationChange} />}
      </>
    </QueryClientProvider>
  );
}

export default Providers;
