import { useState, useEffect, useCallback } from 'react';
import { useLocationStore } from './useLocationStore';

export interface Location {
  latitude: number;
  longitude: number;
}

export const useUserLocation = (): {
  location: Location | null;
  error: string | null;
  askForLocation: () => void;
} => {
  const location = useLocationStore((state) => state.location);
  const setLocation = useLocationStore((state) => state.setLocation);

  const [error, setError] = useState<string | null>(null);

  const askForLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const { latitude, longitude } = position.coords;

          setLocation({ latitude, longitude });
        },
        (err: GeolocationPositionError) => {
          setError(err.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        },
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  }, [setLocation]);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    try {
      const storedLocation = localStorage.getItem('userLocation');
      if (storedLocation) {
        const parsedLocation = JSON.parse(storedLocation) as Location;

        setLocation(parsedLocation);
      } else {
        askForLocation();
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      askForLocation();
    }

    return () => {
      if (location) {
        try {
          localStorage.setItem('userLocation', JSON.stringify(location));
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {}
      }
    };

    //Avoiding unnecessary re-renders

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { location, error, askForLocation };
};

export default useUserLocation;
