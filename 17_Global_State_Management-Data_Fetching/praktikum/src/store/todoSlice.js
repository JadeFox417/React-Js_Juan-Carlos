import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialValue = [
  {
    id: uuidv4(),
    title: "Do Exercise",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "Do Assignment",
    completed: false,
  },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: initialValue,
  },
  reducers: {
    deleteToDo: (state, action) => {
      state.todos = state.todos.filter((item) => {
        return item.id !== action.payload;
      });
    },
    addToDo: (state, action) => {
      const newList = { id: uuidv4(), ...action.payload };

      state.todos = [...state.todos, newList];
    },
    handleCheckBox: (state, action) => {
      const checkedBox = state.todos.map((item) => (item.id === action.payload ? { ...item, completed: !item.completed } : item));
      state.todos = checkedBox;
    },
  },
});

export const { deleteToDo, addToDo, handleCheckBox } = todoSlice.actions;
export default todoSlice.reducer;
