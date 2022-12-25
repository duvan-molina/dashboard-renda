import { AxiosError } from "axios";

export type ApiResponse<T = any | undefined> = {
  success: boolean;
  status?: number;
  statusCode?: number | null;
  errorMessage?: string | null;
  response?: T;
  error?: AxiosError;
};

export type CreateApartamentType = {
  title: string;
  description: string;
  address: string;
  price: number;
  images?: string[];
  isActive?: boolean;
  numberOfRooms: number;
  numberOfBathRooms: number;
  socialStratum: number;
  pets?: boolean;
  isReting?: boolean;
  furnished?: boolean;
  includedServices: boolean;
  commercialUse: boolean;
  withGarage?: boolean;
  motorcycleStorageSpace?: boolean;
};
