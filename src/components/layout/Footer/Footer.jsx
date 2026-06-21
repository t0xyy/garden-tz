import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          <div>
            <div className={styles.title}>E‑Com Photo</div>
            <div className={styles.muted}>Коммерческая фотосъёмка для маркетплейсов и интернет-магазинов.</div>
          </div>

          <div className={styles.col}>
            <div className={styles.head}>Контакты</div>
            <a href="mailto:sales@ecom-photo.test">sales@ecom-photo.test</a>
            <a href="tel:+79990000000">+7 (999) 000‑00‑00</a>
          </div>

          <div className={styles.col}>
            <div className={styles.head}>Документы</div>
            <a href="/tech_brief.pdf" download>Скачать ТЗ (PDF)</a>
            <a href="#forms">Оставить заявку</a>
          </div>
        </div>

        <div className={styles.bottom}>© {new Date().getFullYear()} E‑Com Photo</div>
      </div>
    </footer>
  )
}
