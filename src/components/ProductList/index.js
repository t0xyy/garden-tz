import React from "react";
import ProductCard from "../ProductCard";
import styles from "./ProductList.module.css";

export default function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <div className={styles.empty}>No products</div>;
  }

  return (
    <div className={styles.grid}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
