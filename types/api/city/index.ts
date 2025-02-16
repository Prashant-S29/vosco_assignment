import { CityAPITypeConstructor } from '@/types/api/city/req_res.types';

// city api endpoints constructor
export const GetPropertyByCitySlug: CityAPITypeConstructor = {
  endpoint: '/api/city',
  requestType: { slug: '' },
  responseType: {
    data: [], // Corrected type
    message: '',
    error: null,
  },
};

// City API endpoints
export const CITY_API_ENDPOINTS = {
  GET: {
    GetPropertyByCitySlug,
  },
};
