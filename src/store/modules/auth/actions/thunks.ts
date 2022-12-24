import { createAsyncThunk } from "@reduxjs/toolkit";

import { sigin as siginServices } from "../../../../services/services";
import { ApiResponse } from "../../../../services/utils";

export const sigin = createAsyncThunk(
  "auth/sigin",
  async (auth: {
    email: string;
    password: string;
  }): Promise<ApiResponse<{ success: boolean; token?: string }>> => {
    const { success, response } = await siginServices(auth);
    if (success) {
      return { success: true, response: response };
    }

    return { success: false };
  }
);
