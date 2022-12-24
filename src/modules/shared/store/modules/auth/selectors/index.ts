import { RootState } from "../../../store";
import { NAME } from "../constants";

export const isLogginSelector = (state: RootState) => state[NAME].success;
export const authTokenSelector = (state: RootState) => state[NAME]?.token;
