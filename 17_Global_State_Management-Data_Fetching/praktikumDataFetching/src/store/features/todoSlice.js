import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { APITodos } from "../../apis/todos.api.js";

export const fetchToDo = createAsyncThunk("fetch/todos", async () => {
  try {
    const response = await APITodos.getAllTodos();
    return response.data.todosList;
  } catch (err) {
    console.log(err);
  }
});

export const deleteToDo = createAsyncThunk("delete/todos", async (id) => {
  try {
    const response = await APITodos.deleteToDo(id);
    return response.data.todosList;
  } catch (err) {
    console.log(err);
  }
});

const initialState = {
  data: [],
  status: "idle",
  error: null,
  deleted: false,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const newList = { id: uuidv4(), ...action.payload };

      state.data = [...state.data, newList];
    },
    handleCheckBox: (state, action) => {
      const checkedBox = state.data.map((item) => (item.id === action.payload ? { ...item, completed: !item.completed } : item));
      state.data = checkedBox;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchToDo.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchToDo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchToDo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteToDo.fulfilled, (state) => {
        state.deleted = !state.deleted;
      });
  },
});

export const { addToDo, handleCheckBox } = todoSlice.actions;
export default todoSlice.reducer;
