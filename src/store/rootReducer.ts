import { combineReducers } from "redux";

import * as auth from "./modules/auth/constants";
import * as dashboard from "./modules/dashboard/constants";
import authReducer from "./modules/auth/reducers/auth.reducer";
import dashboardReducer from "./modules/dashboard/reducers/dashboard.reducer";
import type { PayloadAction } from "@reduxjs/toolkit";

const combinedRootReducer = combineReducers({
  [auth.NAME]: authReducer,
  [dashboard.NAME]: dashboardReducer,
});

function rootReducer(state: any, action: PayloadAction) {
  return combinedRootReducer(state, action);
}

export default rootReducer;
