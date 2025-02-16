'use client';

import React from 'react';

import 'leaflet/dist/leaflet.css';

// hooks
import { useMounted } from '@/hooks';
import { useLocationStore } from '@/hooks/useLocationStore';

// leaflet
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// icons
import { Icon } from 'leaflet';

export const Map: React.FC = () => {
  const mount = useMounted();
  const { location } = useLocationStore();

  if (!mount) return null;

  const legalIcon = new Icon({
    iconUrl: 'https://img.icons8.com/?size=100&id=7880&format=png&color=000000',
    iconSize: [20, 20],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  return (
    <>
      {location ? (
        <MapContainer
          key={1}
          center={{
            lat: location.latitude,
            lng: location.longitude,
          }}
          zoom={13}
          scrollWheelZoom={false}
          className="h-[300px] w-[500px]"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker
            position={{
              lat: location.latitude,
              lng: location.longitude,
            }}
            title="Your Location"
            icon={legalIcon}
          >
            <Popup>Your Location</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <p>Unable to get your location</p>
        </div>
      )}
    </>
  );
};
