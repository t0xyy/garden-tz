import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCategories } from "../../../store/slices/categoriesSlice";
import styles from "./CategoriesPage.module.css";

export default function CategoriesPage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);
  const status = useSelector((state) => state.categories.status);

  useEffect(() => {
    if (!categories || categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories]);

  if (status === "loading") {
    return <div className={styles.page}>Loading...</div>;
  }

  if (status === "error") {
    return <div className={styles.page}>Error loading categories</div>;
  }

  return (
    <div className={styles.page}>
      <h1>Categories</h1>

      <div className={styles.grid}>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/category/${cat.id}`}
            className={styles.card}
          >
            <div className={styles.imageWrap}>
              <img src={cat.image} alt={cat.title} />
            </div>
            <p>{cat.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
