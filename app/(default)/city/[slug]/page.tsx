'use client';

import React from 'react';

// get slug frm url
import { notFound, useParams } from 'next/navigation';

// hooks
import { useGetCityBySlug } from '@/utils/api/api.city';

// components
import { PropertyCard, PropertyCardLoader } from '@/components/common';
import { PropertyGeoCodesMap } from '@/components/feature/PropertyGeoCodesMap';
import { MapContainer } from 'react-leaflet';
import { useMounted, useUserLocation } from '@/hooks';

const CityPage: React.FC = () => {

  const mount = useMounted();
  
  const params = useParams();
  const slug = params.slug as string;
  
  if (!slug) {
    notFound();
  }
  
  const { location } = useUserLocation();
  const { data, isLoading } = useGetCityBySlug(slug);

  if (!mount) return null;
  
  return (
    <div data-container className="min-h-screen w-full bg-primary-foreground py-[100px]">
      <section className="flex w-full items-center justify-between">
        <h1 className="text-xl font-semibold leading-none">
          <span className="text-primary/30">- Searching results for </span>
          {slug.charAt(0).toUpperCase() + slug.slice(1)}
        </h1>
      </section>
      {isLoading ? (
        <div className="mt-5 grid w-full grid-cols-2 gap-2">
          <PropertyCardLoader />
          <PropertyCardLoader />
          <PropertyCardLoader />
        </div>
      ) : (
        <>
          {data?.data && data.data.length > 0 ? (
            <>
              <MapContainer
                key={1}
                center={{
                  lat: location?.latitude ?? 0,
                  lng: location?.longitude ?? 0,
                }}
                zoom={10}
                zoomAnimation
                className="h-[400px] mt-5 rounded-xl overflow-hidden w-full"
              >
                <PropertyGeoCodesMap />
              </MapContainer>
              <div className="mt-5 grid w-full grid-cols-2 gap-2">
                {data.data.map((propertyData, index) => (
                  <PropertyCard data={propertyData} key={index} />
                ))}
              </div>
            </>
          ) : (
            <p>No results found</p>
          )}
        </>
      )}
    </div>
  );
};

export default CityPage;
