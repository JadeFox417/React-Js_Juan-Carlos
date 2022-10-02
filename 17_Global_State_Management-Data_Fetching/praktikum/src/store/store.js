import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoSlice from "./todoSlice";

const reducers = combineReducers({
  todo: todoSlice,
});

const persistConfig = {
  key: "Root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({ reducer: persistedReducer });
const persistedStore = persistStore(store);

export { store, persistedStore };
