import { GlobalResponseType } from '..';

type GeoCodeAPIRequestType = {
  address: string;
};

export type GeoCodeAPIResponseType = {
  latitude: number;
  longitude: number;
};

export type GeoCodeAPITypeConstructor = {
  endpoint: string;
  responseType: GlobalResponseType<GeoCodeAPIResponseType[]>;
  requestType: GeoCodeAPIRequestType;
};
