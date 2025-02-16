import { GlobalResponseType } from '..';

type CityAPIRequestType = {
  slug: string;
};

export type CityAPIResponseType = {
  propertyName: string;
  propertyImage: string;
  propertyLocation: string;
  propertyPriceRange: string;
  linkToMoreInfo: string;
};

export type CityAPITypeConstructor = {
  endpoint: string;
  responseType: GlobalResponseType<CityAPIResponseType[]>;
  requestType: CityAPIRequestType;
};
