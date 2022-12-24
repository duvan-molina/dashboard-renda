import { createAsyncThunk } from "@reduxjs/toolkit";

import { sigin as siginServices } from "../../../../../../services/services";

export const sigin = createAsyncThunk(
  "auth/sigin",
  async (auth: any): Promise<any> => {
    // @ts-ignore
    const { success, payload } = await siginServices(auth);
    if (success) {
      return { success: true, response: payload };
    }

    return { success: false };
  }
);
