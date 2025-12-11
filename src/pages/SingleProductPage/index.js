import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./SingleProductPage.module.css";
import { fetchSingleProduct } from "../../store/slices/productsSlice";

export default function SingleProductPage() {
  const { id } = useParams(); 
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.single);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  if (status === "loading") return <div className={styles.page}>Загрузка...</div>;
  if (!product) return <div className={styles.page}>Товар не найден</div>;

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <img src={product.image} alt={product.title} className={styles.image} />

        <div className={styles.info}>
          <h2>{product.title}</h2>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>{product.price} ₽</p>

          <button className={styles.button}>Добавить в корзину</button>
        </div>
      </div>
    </div>
  );
}
