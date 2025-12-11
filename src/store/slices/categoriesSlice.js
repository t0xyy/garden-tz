import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiGet } from "../../api";

export const fetchCategories = createAsyncThunk(
  "categories/fetch",
  async () => {
    return await apiGet("/categories/all");
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default categoriesSlice.reducer;
