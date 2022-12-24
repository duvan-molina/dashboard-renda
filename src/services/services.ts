import baseURL from ".";
import { ApartamentType } from "../store/modules/dashboard/types";
import { ApiResponse } from "./utils";

export const getAllApartamentsService = async (): Promise<
  ApiResponse<ApartamentType[]>
> => {
  try {
    const { data } = await baseURL.get<ApartamentType[]>(
      "/api/v1/dashboard/apartaments"
    );
    return { success: true, response: data };
  } catch (error) {
    return {
      success: false,
    };
  }
};

export const sigin = async (auth: {
  email: string;
  password: string;
}): Promise<ApiResponse<{ success: boolean; token?: string }>> => {
  try {
    const { data } = await baseURL.post<{ success: boolean; token?: string }>(
      "api/v1/seller-user/sigin",
      auth
    );
    return { success: true, response: data };
  } catch (error) {
    return { success: false };
  }
};
