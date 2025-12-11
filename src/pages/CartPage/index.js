import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  decreaseQuantity,
  addToCart,
  clearCart,
} from "../../store/slices/cartSlice";
import { Link } from "react-router-dom";

import ContactSection from "../../components/ContactSection";
import MapBlock from "../../components/MapBlock";

import styles from "./CartPage.module.css";

export default function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setShowSuccess(true);
    dispatch(clearCart());
    reset();
    setTimeout(() => setShowSuccess(false), 2000);
  };

  if (items.length === 0) {
    return (
      <div className={styles.emptyPage}>
        <h1>Shopping cart</h1>
        <p>Looks like you have no items in your basket currently.</p>

        <Link to="/" className={styles.continueBtn}>
          Continue Shopping
        </Link>

        <ContactSection />
        <MapBlock />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {showSuccess && (
        <div className={styles.overlay}>
          <div className={styles.successPopup}>
            <h3>Congratulations!</h3>
            <p>
              Your order has been successfully placed. A manager will contact
              you soon.
            </p>
          </div>
        </div>
      )}

      <h1>Shopping cart</h1>

      <div className={styles.cartLayout}>
        <div className={styles.list}>
          {items.map((item) => (
            <div key={item.id} className={styles.item}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.img}
              />

              <div className={styles.info}>
                <h3>{item.title}</h3>
                <p>{item.price} ₽</p>

                <div className={styles.controls}>
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(addToCart(item))}>+</button>
                </div>
              </div>

              <button
                className={styles.remove}
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <form className={styles.orderBlock} onSubmit={handleSubmit(onSubmit)}>
          <h2>Order details</h2>
          <p>{items.length} items</p>

          <div className={styles.totalBox}>
            <span>Total</span>
            <b>{total} ₽</b>
          </div>

          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className={styles.error}>Enter name</span>
          )}

          <input
            type="text"
            placeholder="Phone"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className={styles.error}>Enter phone</span>
          )}

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className={styles.error}>Enter email</span>
          )}

          <button type="submit" className={styles.orderBtn}>
            Order
          </button>
        </form>
      </div>

      <button
        className={styles.clear}
        onClick={() => dispatch(clearCart())}
      >
        Очистить корзину
      </button>

      <ContactSection />
      <MapBlock />
    </div>
  );
}
