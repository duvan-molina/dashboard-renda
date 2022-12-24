import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  Reducer,
  ThunkAction,
} from "@reduxjs/toolkit";
import * as auth from "../../shared/store/modules/auth/constants";
import { PersistConfig, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./modules/auth/reducers/auth.reducer";

const KEY_PERSIST_CONFIG = "root";

export const persistConfig: PersistConfig<any> = {
  key: KEY_PERSIST_CONFIG,
  storage,
  blacklist: [],
  writeFailHandler: (error) => console.error("storage error:", error),
};

export const reducer = combineReducers({
  [auth.NAME]: authReducer,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  return reducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  enhancers: [],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
