import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllApartamentsService } from "../../../../../../services/services";

import { ApiResponse } from "../../../../../../services/utils";
import { ApartamentType } from "../types";

export const getAllApartaments = createAsyncThunk(
  "dashboard/apartaments",
  async (_): Promise<ApiResponse<ApartamentType[]>> => {
    const { success, response } = await getAllApartamentsService();
    if (success && !!response) {
      return { success: true, response: response };
    }

    return { success: false };
  }
);
