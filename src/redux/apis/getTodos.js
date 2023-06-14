import { createAsyncThunk } from "@reduxjs/toolkit";
const getTodos = createAsyncThunk(
  "getTodos",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://6489d1e05fa58521cab04f4f.mockapi.io/todo/todos"
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export default getTodos;
