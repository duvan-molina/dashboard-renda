import baseURL from ".";

export const getAllApartamentsService = async () => {
  try {
    const response = baseURL.get("/api/v1/dashboard/apartaments");

    return { payload: response };
  } catch (error) {
    console.log(error);
  }
};

export const sigin = async (data: any) => {
  try {
    const response = await baseURL.post("api/v1/seller-user/sigin", data);
    return { success: true, payload: response };
  } catch (error) {
    console.log(error);
  }
};
