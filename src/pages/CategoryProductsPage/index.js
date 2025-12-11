import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./CategoryProductsPage.module.css";
import { fetchProductsByCategory } from "../../store/slices/productsSlice";

export default function CategoryProductsPage() {
  const { id } = useParams(); // получаем ID категории из URL
  const dispatch = useDispatch();

  const list = useSelector((state) => state.products.list);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(fetchProductsByCategory(id));
  }, [dispatch, id]);

  if (status === "loading") return <div className={styles.page}>Загрузка...</div>;
  if (status === "error") return <div className={styles.page}>Ошибка загрузки товаров</div>;

  return (
    <div className={styles.page}>
      <h2>Товары категории #{id}</h2>

      <div className={styles.list}>
        {list.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <h3>{item.title}</h3>
            <p>{item.price} ₽</p>
          </div>
        ))}
      </div>
    </div>
  );
}
