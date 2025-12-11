import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllProducts } from "../../store/slices/productsSlice";
import ProductList from "../ProductList";

import styles from "./SaleSection.module.css";

export default function SaleSection() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(fetchAllProducts());
    }
  }, [dispatch, products]);

  const discounted = (products || []).filter((p) => p.discont_price);
  const visible = discounted.slice(0, 4);

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2>Sale</h2>
      </div>

      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error loading products</div>}

      {status === "success" && <ProductList products={visible} />}
    </section>
  );
}
