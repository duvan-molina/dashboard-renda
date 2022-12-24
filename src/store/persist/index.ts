import { PersistConfig } from "redux-persist";
import storage from "redux-persist/es/storage";

export const persistConfigRoot: PersistConfig<any> = {
  key: "root",
  storage,
  blacklist: [],
  writeFailHandler: (error) => console.error("storage error:", error),
};
