import React from "react";
import styles from "./DiscountSection.module.css";

export default function DiscountSection() {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <h2>5% off on the first order</h2>
      </div>

      <form className={styles.form}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone number" />
        <input type="email" placeholder="Email" />
        <button type="submit">Get a discount</button>
      </form>
    </section>
  );
}
