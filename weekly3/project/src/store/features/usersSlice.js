import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIUser from "../../apis/user.api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchUser = createAsyncThunk("fetch/fetchUser", async () => {
  try {
    const response = await APIUser.getUser();
    return response;
  } catch (err) {
    console.log(err);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
