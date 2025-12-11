import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice.js";
import productsReducer from "./slices/productsSlice.js";
import cartReducer from "./slices/cartSlice.js";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
