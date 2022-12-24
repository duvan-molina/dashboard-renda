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
    if (action.payload.response) {
      return action.payload.response;
    }
  });
});

export default authReducer;

export type AuthState = ReturnType<typeof authReducer>;
