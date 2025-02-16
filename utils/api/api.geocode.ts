'use client';

// types
import { GlobalResponseType } from '@/types/api';
import { GetGeoCodeFromAddress } from '@/types/api/geoCode';
import { GeoResponse } from '@/types/api/geoCode/positionstack_api_res';
import { GeoCodeAPIResponseType } from '@/types/api/geoCode/req_res.types';

// hooks
import { useQuery } from '@tanstack/react-query';

export const useGetGeoCodeFromAddress = (address: string) => {
  return useQuery({
    queryKey: ['address', address],
    queryFn: async () => {
      const res = await fetch(`${GetGeoCodeFromAddress.endpoint}?query=${encodeURIComponent(address)}`, {
        method: 'GET',
      });

      if (!res.ok) {
        return null;
      }

      const data: GeoResponse = await res.json();

      return {
        data: {
          latitude: data.data[0].latitude,
          longitude: data.data[0].longitude,
        },
        message: 'success',
        error: null,
      } as GlobalResponseType<GeoCodeAPIResponseType>;
    },
  });
};
