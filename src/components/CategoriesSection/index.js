import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCategories } from "../../store/slices/categoriesSlice";
import styles from "./CategoriesSection.module.css";

export default function CategoriesSection() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);
  const status = useSelector((state) => state.categories.status);

  useEffect(() => {
    if (!categories || categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories]);

  const visible = (categories || []).slice(0, 4);

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2>Categories</h2>
        <Link to="/categories" className={styles.btn}>
          All categories
        </Link>
      </div>

      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error loading categories</div>}

      {status === "success" && (
        <div className={styles.grid}>
          {visible.map((cat) => (
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
      )}
    </section>
  );
}
