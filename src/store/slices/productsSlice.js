import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiGet } from "../../api";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
  async () => {
    return await apiGet("/products/all");
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async (categoryId) => {
    return await apiGet(`/categories/${categoryId}`);
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "products/fetchOne",
  async (id) => {
    return await apiGet(`/products/${id}`);
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    single: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.list = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.status = "error";
      })

      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.list = action.payload.data;
      })

      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.single = action.payload;
      });
  },
});

export default productsSlice.reducer;
