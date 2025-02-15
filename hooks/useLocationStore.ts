import { create } from 'zustand';

interface Location {
  latitude: number;
  longitude: number;
}

interface LocationState {
  location: Location | null;
  setLocation: (location: Location) => void;
  clearLocation: () => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  location: null,
  setLocation: (location: Location) => set({ location }),
  clearLocation: () => set({ location: null }),
}));
