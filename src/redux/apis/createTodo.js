import { createAsyncThunk } from "@reduxjs/toolkit";
const createTodo = createAsyncThunk(
  "createTodo",
  async (todoItem, { rejectWithValue }) => {
    const response = await fetch(
      "https://6489d1e05fa58521cab04f4f.mockapi.io/todo/todos",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(todoItem),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export default createTodo;
