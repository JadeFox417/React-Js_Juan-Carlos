import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersSlice from "./features/usersSlice";

const reducer = combineReducers({
  users: usersSlice,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
