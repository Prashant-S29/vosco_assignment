import { GeoCodeAPITypeConstructor } from './req_res.types';

export const GetGeoCodeFromAddress: GeoCodeAPITypeConstructor = {
  endpoint: '/api/geocode',
  requestType: {
    address: '',
  },
  responseType: {
    data: [],
    message: '',
    error: null,
  },
};

export const GEOCODE_API_ENDPOINTS = {
  GET: {
    GetGeoCodeFromAddress,
  },
};
