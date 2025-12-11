import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchProductsByCategory } from "../../../store/slices/productsSlice";
import ProductList from "../../../components/ProductList";
import ContactSection from "../../../components/ContactSection";
import MapBlock from "../../../components/MapBlock";

import styles from "./CategoryPage.module.css";

export default function CategoryPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.list);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(fetchProductsByCategory(id));
  }, [dispatch, id]);

  if (status === "loading") {
    return <div className={styles.page}>Loading...</div>;
  }

  if (status === "error") {
    return <div className={styles.page}>Error loading products</div>;
  }

  return (
    <div className={styles.page}>
      <h1>Category #{id}</h1>

      <ProductList products={products} />

      <ContactSection />
      <MapBlock />
    </div>
  );
}
