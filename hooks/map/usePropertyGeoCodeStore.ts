import { create } from 'zustand';

interface GeoCode {
  latitude: number;
  longitude: number;
  label: string;
}

interface GeoCodeState {
  location: GeoCode[] | null;
  addGeoCode: (geoCode: GeoCode) => void;
  removeGeoCode: (geoCode: GeoCode) => void;

  newPropertyLocation: GeoCode | null;
  updateNewPropertyLocation: (location: GeoCode) => void;
}

export const usePropertyGeoCodeStore = create<GeoCodeState>((set) => ({
  location: null,

  addGeoCode: (geoCode) => {
    set((state) => ({
      location: state.location ? [...state.location, geoCode] : [geoCode],
    }));
  },

  removeGeoCode: (geoCode) => {
    set((state) => ({
      location: state.location
        ? state.location.filter((loc) => loc.latitude !== geoCode.latitude || loc.longitude !== geoCode.longitude)
        : null,
    }));
  },

  newPropertyLocation: null,
  updateNewPropertyLocation: (location: GeoCode) => set({ newPropertyLocation: location }),
}));
