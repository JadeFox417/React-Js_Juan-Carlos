import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todos from "./features/todoSlice";

const reducers = combineReducers({
  todos,
});

const persistConfig = {
  key: "Root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({ reducer: persistedReducer });
const persistedStore = persistStore(store);

export { store, persistedStore };
