'use client';

// AskForUserLocation.tsx
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useMounted, useUserLocation } from '@/hooks';

interface AskForUserLocationProps {
  onLocationChange: (locationGranted: boolean) => void;
}

export const AskForUserLocation: React.FC<AskForUserLocationProps> = ({ onLocationChange }) => {
  const mounted = useMounted();

  const { askForLocation, location } = useUserLocation();
  const [permissionState, setPermissionState] = useState<'prompt' | 'granted' | 'denied' | 'unavailable'>('prompt');

  useEffect(() => {
    const checkPermissions = async () => {
      if (navigator.permissions) {
        try {
          const permissionStatus = await navigator.permissions.query({
            name: 'geolocation',
          });
          setPermissionState(permissionStatus.state);
          if (permissionStatus.state === 'granted') {
            onLocationChange(true);
          }
        } catch (error) {
          console.error('Error checking permissions:', error);
          setPermissionState('unavailable');
        }
      } else {
        setPermissionState('unavailable');
      }
    };

    checkPermissions();
  }, [onLocationChange]);

  if (!mounted) {
    return null;
  }

  const handleAllowLocation = () => {
    askForLocation();
  };

  if (permissionState === 'granted' || location) {
    return null;
  }

  if (permissionState === 'denied') {
    return (
      <div className="fixed bottom-5 right-5 z-50 w-[300px] rounded-xl bg-primary px-5 py-4 shadow-lg">
        <h1 className="text-xs font-semibold text-primary-foreground">Location Access Denied</h1>
        <p className="mt-1 text-xs leading-tight text-primary-foreground/70">
          You have previously denied location access for this site. Please enable location access in your browser
          settings to use this feature.
        </p>
        {/* Optionally, provide a link to browser-specific instructions */}
      </div>
    );
  }

  if (permissionState === 'unavailable') {
    return (
      <div className="fixed bottom-5 right-5 z-50 w-[300px] rounded-xl bg-primary px-5 py-4 shadow-lg">
        <h1 className="text-xs font-semibold text-primary-foreground">Location Access Unavailable</h1>
        <p className="mt-1 text-xs leading-tight text-primary-foreground/70">
          Your browser does not support location access, or the Permissions API is not available.
        </p>
      </div>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[300px] rounded-xl bg-primary px-5 py-4 shadow-lg">
      <h1 className="text-xs font-semibold text-primary-foreground">Allow Location Access</h1>
      <p className="mt-1 text-xs leading-tight text-primary-foreground/70">
        Please allow location access to find nearest property
      </p>
      <Button
        size="sm"
        variant="secondary"
        className="mt-2 w-full"
        onClick={() => {
          handleAllowLocation();
        }}
      >
        Allow Location Access
      </Button>
    </div>
  );
};
