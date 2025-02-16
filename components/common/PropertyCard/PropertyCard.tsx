'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// types
import type { CityAPIResponseType } from '@/types/api/city/req_res.types';

// constant
import { DEFAULT_PROPERTY_IMAGE } from '@/constants/global';

// hooks
import { GeoResponse } from '@/types/api/geoCode/positionstack_api_res';
import { usePropertyGeoCodeStore } from '@/hooks/map/usePropertyGeoCodeStore';

// components
import { Button } from '@/components/ui/button';

interface PropertyCardProps {
  data: CityAPIResponseType;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ data }) => {
  //

  const { addGeoCode, updateNewPropertyLocation, location } = usePropertyGeoCodeStore();

  // states
  const [loading, setLoading] = useState(false);
  const [isAddedOnMap, setIsAddedOnMap] = useState(false);

  // we are fetching data only when user clicks on 'add to map' button
  // because, we only have 100 credits per month

  // In case, you want to fetch data on page load, uncomment the below code and comment `getAndSetGeoCode` function
  // const { data: geoCode, isLoading } = useGetGeoCodeFromAddress(data.propertyLocation);
  const getAndSetGeoCode = async () => {
    setLoading(true);

    try {
      const res = await fetch(`/api/geocode?query=${encodeURIComponent(data.propertyLocation)}`);
      if (!res.ok) {
        throw new Error('Failed to fetch geocode data');
      }
      const geoCodeRes: GeoResponse = await res.json();
      // console.log(geoCodeRes);

      addGeoCode({
        latitude: geoCodeRes.data[0].latitude,
        longitude: geoCodeRes.data[0].longitude,
        label: data.propertyName,
      });

      updateNewPropertyLocation({
        latitude: geoCodeRes.data[0].latitude,
        longitude: geoCodeRes.data[0].longitude,
        label: data.propertyName,
      });

      setIsAddedOnMap(true);
      setLoading(false);
      return {
        latitude: geoCodeRes.data[0].latitude,
        longitude: geoCodeRes.data[0].longitude,
      };
    } catch (err) {
      console.error('Error fetching geocode data:', err);
      setLoading(false);
    }
  };

  const updateCenterPoint = ({ label }: { label: string }) => {
    if (!location) return;

    const geoCode = location.find((location) => location.label === label);
    if (!geoCode) return;

    updateNewPropertyLocation({
      latitude: geoCode.latitude,
      longitude: geoCode.longitude,
      label: geoCode.label,
    });
  };

  return (
    <div className="h-[300px] w-full rounded-xl border bg-white p-3 shadow-md">
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        <Image
          src={data.propertyImage !== '' ? data.propertyImage : DEFAULT_PROPERTY_IMAGE}
          alt={data.propertyName}
          fill
          className="h-full w-full object-cover"
        />
        <div
          className={`absolute bottom-0 flex h-[70%] w-full flex-col justify-end ${data.propertyImage !== '' ? 'bg-gradient-to-t from-black to-transparent text-white' : 'bg-transparent text-black'} p-4`}
        >
          <h2 className="text-xl font-semibold leading-tight">{data.propertyName}</h2>
          <p className="mt-1 text-xs leading-tight">{data.propertyLocation}</p>
          <p className="mt-1 text-base font-medium leading-tight">{data.propertyPriceRange}</p>
        </div>

        {isAddedOnMap ? (
          <Button
            variant="brand"
            size="sm"
            className="absolute bottom-3 right-3 z-20"
            onClick={() => {
              updateCenterPoint({
                label: data.propertyName,
              });
            }}
            loading={loading}
          >
            View on map
          </Button>
        ) : (
          <Button
            variant="brand"
            size="sm"
            className="absolute bottom-3 right-3 z-20"
            onClick={getAndSetGeoCode}
            loading={loading}
          >
            Add to map
          </Button>
        )}
      </div>
    </div>
  );
};
