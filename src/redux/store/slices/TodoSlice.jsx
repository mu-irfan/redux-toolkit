import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todoList.splice(action.payload, 1);
    },
    clearAllTodo: (state) => {
      state.todoList = [];
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, clearAllTodo } = todoSlice.actions;
