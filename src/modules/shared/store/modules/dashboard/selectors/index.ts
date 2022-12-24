import { RootState } from "../../../store";
import { NAME } from "../constants";

export const apartamentsSelector = (state: RootState) => {
  if (Object.keys(state[NAME]).length > 0) {
    return state[NAME];
  } else {
    return [];
  }
};
