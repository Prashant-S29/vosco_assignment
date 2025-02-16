'use client';

import { GlobalResponseType } from '@/types/api';
import { GetPropertyByCitySlug } from '@/types/api/city';
import { CityAPIResponseType } from '@/types/api/city/req_res.types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetCityBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['city', slug],
    queryFn: async () => {
      const res = await axios.post<{
        data: CityAPIResponseType[];
      }>(
        GetPropertyByCitySlug.endpoint,
        {
          city: slug,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      console.log('endpoint from api.city.ts', GetPropertyByCitySlug.endpoint);
      console.log('body from api.city.ts', JSON.stringify({ city: slug }));
      console.log('res from api.city.ts', res);

      // if (res.data.data.length === 0) {
      //   return {
      //     data: null,
      //     message: 'No results found',
      //     error: null,
      //   } as GlobalResponseType<null>;
      // }

      return {
        data: res.data.data,
        message: 'success',
        error: null,
      } as GlobalResponseType<CityAPIResponseType[]>;
    },
  });
};
