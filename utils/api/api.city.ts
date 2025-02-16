'use client';

import { GlobalResponseType } from '@/types/api';
import { GetPropertyByCitySlug } from '@/types/api/city';
import { CityAPIResponseType } from '@/types/api/city/req_res.types';
import { useQuery } from '@tanstack/react-query';

export const useGetCityBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['city', slug],
    queryFn: async () => {
      const res = await fetch(GetPropertyByCitySlug.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city: slug }),
      });

      if (!res.ok) {
        return null;
      }

      const data = await res.json();
      return data as GlobalResponseType<CityAPIResponseType[]>;
    },
  });
};
