import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllProducts } from "../../../store/slices/productsSlice";
import ProductList from "../../../components/ProductList";
import ContactSection from "../../../components/ContactSection";
import MapBlock from "../../../components/MapBlock";

import styles from "./SalesPage.module.css";

export default function SalesPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(fetchAllProducts());
    }
  }, [dispatch, products]);

  const discounted = (products || []).filter((p) => p.discont_price);

  if (status === "loading") {
    return <div className={styles.page}>Loading...</div>;
  }

  if (status === "error") {
    return <div className={styles.page}>Error loading products</div>;
  }

  return (
    <div className={styles.page}>
      <h1>All sales</h1>

      <ProductList products={discounted} />

      <ContactSection />
      <MapBlock />
    </div>
  );
}
