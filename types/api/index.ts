export type GlobalResponseType<T> = {
  data: T | null;
  message: string;
  error: string | null;
};
