import baseURL from ".";

export const getAllApartamentsService = async () => {
  try {
    const response = baseURL.get("/api/v1/dashboard/apartaments");

    return { data: response };
  } catch (error) {
    console.log(error);
  }
};
