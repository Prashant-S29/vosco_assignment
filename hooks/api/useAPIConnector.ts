import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface APIConnectorProps<T extends ResponseType> {
  queryKey: string[];
  apiEndpoint: string;
  responseType: T;
}

export const useAPIConnector = <T extends ResponseType>({
  apiEndpoint,
  queryKey,
  responseType,
}: APIConnectorProps<T>) => {
  return useQuery<T>({
    queryKey: queryKey,
    queryFn: async () => {
      const res = await axios.get(apiEndpoint);
      return res.data as T;
    },
  });
};
