import { createSlice } from "@reduxjs/toolkit";
import createTodo from "../../apis/createTodo";
import getTodos from "../../apis/getTodos";
import deleteTodo from "../../apis/deleteTodo";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(createTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.todoList.push(action.payload);
    });
    builder.addCase(createTodo.rejected, (state, action) => {
      console.log(action.payload);

      state.loading = false;
      console.log(action.payload);
    });

    //get todos
    builder.addCase(getTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todoList = action.payload;
    });
    builder.addCase(getTodos.rejected, (state, action) => {
      state.loading = false;
      console.log(action.payload);
    });

    //delete todos
    builder.addCase(deleteTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      id && (state.todoList = state.todoList.filter((item) => item.id !== id));
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.loading = false;
      console.log(action.payload);
    });
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, clearAllTodo } = todoSlice.actions;
