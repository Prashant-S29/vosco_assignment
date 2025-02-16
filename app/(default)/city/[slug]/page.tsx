'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { notFound, useParams } from 'next/navigation';

// hooks
import { useGetCityBySlug } from '@/utils/api/api.city';
import { useMounted, useUserLocation } from '@/hooks';

// components
import { PropertyCard, PropertyCardLoader } from '@/components/common';

const DynamicMapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const DynamicPropertyGeoCodesMap = dynamic(
  () => import('@/components/feature/PropertyGeoCodesMap').then((mod) => mod.PropertyGeoCodesMap),
  { ssr: false },
);

const CityPage: React.FC = () => {
  const mount = useMounted();
  const params = useParams();
  const slug = params?.slug as string;

  if (!slug) notFound();

  const { location } = useUserLocation();
  const { data, isLoading } = useGetCityBySlug(slug);

  // Fix: Prevent rendering on server side
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(typeof window !== 'undefined');
  }, []);

  if (!mount || !isClient) return null;

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
          {/* Map Section */}
          {data?.data && data.data.length > 0 ? (
            <>
              <DynamicMapContainer
                key={1}
                center={{
                  lat: location?.latitude ?? 0,
                  lng: location?.longitude ?? 0,
                }}
                zoom={10}
                zoomAnimation
                className="mt-5 h-[400px] w-full overflow-hidden rounded-xl"
              >
                <DynamicPropertyGeoCodesMap />
              </DynamicMapContainer>

              {/* Property List Section */}
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
