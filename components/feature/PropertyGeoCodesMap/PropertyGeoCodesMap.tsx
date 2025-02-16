'use client';

import React, { useCallback, useEffect, useState } from 'react';

// hooks
import { useMounted } from '@/hooks';
import { useLocationStore } from '@/hooks/useLocationStore';

// leaflet
import { Marker, Popup, TileLayer, useMap } from 'react-leaflet';

// icons
import { Icon } from 'leaflet';
import { usePropertyGeoCodeStore } from '@/hooks/map/usePropertyGeoCodeStore';
import { AskForUserLocation } from '../AskForUserLocation';
import 'leaflet/dist/leaflet.css';

const propertyLocationOIcon = new Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=7880&format=png&color=000000',
  iconSize: [20, 20],
  iconAnchor: [22, 94],
  popupAnchor: [-8, -76],
});

const userLocationIcon = new Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=7880&format=png&color=d8232a',
  iconSize: [20, 20],
  iconAnchor: [22, 94],
  popupAnchor: [-8, -76],
});

export const PropertyGeoCodesMap: React.FC = () => {
  const mount = useMounted();

  const map = useMap();

  const { location: userLocation } = useLocationStore();
  const { location, newPropertyLocation } = usePropertyGeoCodeStore();

  const [locationGranted, setLocationGranted] = useState(false);
  const handleLocationChange = useCallback((granted: boolean) => {
    setLocationGranted(granted);
  }, []);

  useEffect(() => {
    if (newPropertyLocation) {
      map.setView([newPropertyLocation.latitude, newPropertyLocation.longitude], 13);
    }

    // intentionally, do not include `map` as it will cause infinite rerenders
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newPropertyLocation]);

  if (!mount) return null;

  return (
    <>
      <div className="relative mt-5 h-[400px] w-full overflow-hidden rounded-xl bg-gray-200">
        {userLocation ? (
          <div>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker
              key="userLocation"
              position={{
                lat: userLocation.latitude,
                lng: userLocation.longitude,
              }}
              title="Your Location"
              icon={userLocationIcon}
            >
              <Popup>Your Location</Popup>
            </Marker>
            {location &&
              location.map((geoCode, index) => (
                <AddMarkerAndCenter
                  key={index}
                  label={geoCode.label}
                  position={[geoCode.latitude, geoCode.longitude]}
                />
              ))}
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <p>Unable to get your location</p>
          </div>
        )}
      </div>
      {!locationGranted && <AskForUserLocation onLocationChange={handleLocationChange} />}
    </>
  );
};

function AddMarkerAndCenter({ position, label }: { position: [number, number]; label: string }) {
  const map = useMap();

  // Center the map on the marker's position with a specific zoom level
  map.setView(position, 15); // Adjust zoom level as needed

  return (
    <Marker key={position[0] + position[1]} position={position} title="Your Location" icon={propertyLocationOIcon}>
      <Popup>{label}</Popup>
    </Marker>
  );
}
