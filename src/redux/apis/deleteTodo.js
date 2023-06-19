import { createAsyncThunk } from "@reduxjs/toolkit";
const deleteTodo = createAsyncThunk(
  "deleteTodo",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://6489d1e05fa58521cab04f4f.mockapi.io/todo/todos/${id}`,
      { method: "DELETE" }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export default deleteTodo;
