import React from 'react'
import SectionHeader from '../../ui/SectionHeader/SectionHeader.jsx'
import styles from './FormsSection.module.css'
import ShootingRequestForm from './ShootingRequestForm.jsx'
import EstimateForm from './EstimateForm.jsx'

export default function FormsSection() {
  return (
    <section id="forms" className="section">
      <div className="container">
        <SectionHeader
          title="Формы"
          subtitle="Заявка на съёмку + предварительный расчёт стоимости + интеграция отправки (через бэкенд)."
        />
        <div className={styles.grid}>
          <div className={`card ${styles.card}`}>
            <div className={styles.h}>Заявка на съёмку</div>
            <ShootingRequestForm />
          </div>
          <div className={`card ${styles.card}`}>
            <div className={styles.h}>Предварительный расчёт стоимости</div>
            <EstimateForm />
          </div>
        </div>
      </div>
    </section>
  )
}
