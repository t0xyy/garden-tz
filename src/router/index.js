import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AllProductsPage from "../pages/HomePage/AllProductsPage";
import CategoriesPage from "../pages/HomePage/CategoriesPage";
import CategoryPage from "../pages/HomePage/CategoryPage";
import CategoryProductsPage from "../pages/CategoryProductsPage"; 
import SalesPage from "../pages/HomePage/SalesPage";
import ProductPage from "../pages/HomePage/ProductPage";
import CartPage from "../pages/CartPage";
import SuccessPage from "../pages/HomePage/SuccessPage";
import EmptyCartPage from "../pages/HomePage/EmptyCartPage";
import NotFoundPage from "../pages/HomePage/NotFoundPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<AllProductsPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/category/:id" element={<CategoryPage />} />
      <Route path="/category/:id/products" element={<CategoryProductsPage />} />
      <Route path="/sales" element={<SalesPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/cart/success" element={<SuccessPage />} />
      <Route path="/cart/empty" element={<EmptyCartPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
