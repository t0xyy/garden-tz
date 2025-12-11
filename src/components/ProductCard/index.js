import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { addToCart } from "../../store/slices/cartSlice";
import placeholderImg from "../../assets/item.png";

import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const imageSrc = product.image || placeholderImg;
  const hasDiscount = !!product.discont_price;

  const price = hasDiscount ? product.discont_price : product.price;
  const oldPrice = hasDiscount ? product.price : null;

  return (
    <div className={styles.card}>
      <Link to={`/product/${product.id}`} className={styles.imageWrap}>
        <img src={imageSrc} alt={product.title} className={styles.image} />
      </Link>

      <div className={styles.body}>
        <Link to={`/product/${product.id}`} className={styles.title}>
          {product.title}
        </Link>

        <div className={styles.prices}>
          <span className={styles.price}>${price}</span>
          {oldPrice && <span className={styles.oldPrice}>${oldPrice}</span>}
        </div>

        <button
          className={styles.btn}
          onClick={() => dispatch(addToCart(product))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
