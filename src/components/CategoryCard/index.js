import styles from "./CategoryCard.module.css";
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link to={`/categories/${category.id}`} className={styles.card}>
      <img src={category.image} alt={category.title} className={styles.image} />
      <div className={styles.title}>{category.title}</div>
    </Link>
  );
}
