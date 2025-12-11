import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../../../store/slices/cartSlice";
import api from "../../../api";

import ContactSection from "../../../components/ContactSection";
import MapBlock from "../../../components/MapBlock";

import styles from "./ProductPage.module.css";

export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");
  const [count, setCount] = useState(1);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        setStatus("loading");
        const { data } = await api.get(`/products/${id}`);
        if (!ignore) {
          setProduct(data);
          setStatus("success");
        }
      } catch (e) {
        console.error(e);
        if (!ignore) setStatus("error");
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, [id]);

  if (status === "loading") {
    return <div className={styles.page}>Loading...</div>;
  }

  if (status === "error" || !product) {
    return <div className={styles.page}>Product not found</div>;
  }

  const price = product.discont_price ?? product.price;

  const handleAdd = () => {
    for (let i = 0; i < count; i += 1) {
      dispatch(
        addToCart({
          id: product.id,
          title: product.title,
          image: product.image,
          price,
        })
      );
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.top}>
        <div className={styles.imageWrap}>
          <img src={product.image} alt={product.title} />
        </div>

        <div className={styles.info}>
          <h1>{product.title}</h1>

          <div className={styles.priceBlock}>
            <span className={styles.price}>${price}</span>

            {product.discont_price && (
              <>
                <span className={styles.oldPrice}>${product.price}</span>
                <span className={styles.discount}>
                  -
                  {Math.round(
                    (1 - product.discont_price / product.price) * 100
                  )}
                  %
                </span>
              </>
            )}
          </div>

          <div className={styles.controls}>
            <div className={styles.counter}>
              <button
                type="button"
                onClick={() => setCount((c) => Math.max(1, c - 1))}
              >
                −
              </button>
              <span>{count}</span>
              <button
                type="button"
                onClick={() => setCount((c) => c + 1)}
              >
                +
              </button>
            </div>

            <button
              type="button"
              className={styles.addBtn}
              onClick={handleAdd}
            >
              Add to cart
            </button>
          </div>

          <div className={styles.description}>
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>

      <ContactSection />
      <MapBlock />
    </div>
  );
}
