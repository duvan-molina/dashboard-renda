import { AxiosError } from "axios";

export type ApiResponse<T = any | undefined> = {
  success: boolean;
  status?: number;
  statusCode?: number | null;
  errorMessage?: string | null;
  response?: T;
  error?: AxiosError;
};
