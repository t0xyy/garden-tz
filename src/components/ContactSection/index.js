import React from "react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Contact</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Phone</h3>
          <p>+7 (499) 350-66-04</p>
        </div>

        <div className={styles.card}>
          <h3>Socials</h3>
          <p> </p>
        </div>

        <div className={styles.card}>
          <h3>Address</h3>
          <p>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</p>
        </div>

        <div className={styles.card}>
          <h3>Working Hours</h3>
          <p>24 hours a day</p>
        </div>
      </div>
    </section>
  );
}
