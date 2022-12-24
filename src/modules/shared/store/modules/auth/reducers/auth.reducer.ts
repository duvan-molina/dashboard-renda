import { createReducer } from "@reduxjs/toolkit";
import { thunks } from "../actions";

interface IAuthState {
  success: boolean;
  token?: string | null;
}

const initialState: IAuthState = {
  success: false,
  token: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(thunks.sigin.fulfilled, (_, action) => {
    if (action.payload.response.data.success) {
      return action.payload.response.data;
    }
  });
});

export default authReducer;

export type LoansState = ReturnType<typeof authReducer>;
