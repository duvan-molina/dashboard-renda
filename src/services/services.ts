import baseURL from ".";
import { ApartamentType } from "../store/modules/dashboard/types";
import { ApiResponse, CreateApartamentType } from "./utils";

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

export const createApartamentService = async (
  payload: CreateApartamentType
): Promise<ApiResponse<{ success: boolean }>> => {
  try {
    const { data } = await baseURL.post<{ success: boolean }>(
      "/api/v1/dashboard/create-apartament",
      payload
    );
    return { success: data.success };
  } catch (error) {
    return { success: false };
  }
};

export const getApartamentByIdService = async (
  apartamentId: string
): Promise<ApiResponse<ApartamentType>> => {
  try {
    const { data } = await baseURL.get<ApartamentType>(
      `/api/v1/dashboard/apartament/${apartamentId}`
    );
    return { success: true, response: data };
  } catch (error) {
    return { success: false };
  }
};

// TODO: send only data update
export const editApartamentService = async (
  apartamentId: string,
  payload: CreateApartamentType
): Promise<ApiResponse<{ success: boolean; messages?: string }>> => {
  try {
    await baseURL.post<{ success: boolean; messages?: string }>(
      `/api/v1/dashboard/apartament/${apartamentId}`,
      payload
    );
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};
