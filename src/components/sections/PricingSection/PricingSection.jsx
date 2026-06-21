import React from 'react'
import SectionHeader from '../../ui/SectionHeader/SectionHeader.jsx'
import styles from './PricingSection.module.css'
import { useDispatch } from 'react-redux'
import { openModal } from '../../../store/slices/ui/uiActions.js'

const plans = [
  { key: 'light', title: 'Light', price: 'от 9 900 ₽', perks: ['До 20 SKU', 'Базовая ретушь', 'Срок 3–5 дней'] },
  { key: 'standard', title: 'Standard', price: 'от 24 900 ₽', perks: ['До 60 SKU', 'Ретушь + цвет', 'Срок 2–4 дня', 'ТЗ по ракурсам'] },
  { key: 'pro', title: 'Pro', price: 'от 59 900 ₽', perks: ['100+ SKU', 'Сложная ретушь', '360°/видео', 'Приоритетная очередь'] },
]

export default function PricingSection() {
  const dispatch = useDispatch()
  return (
    <section id="pricing" className="section">
      <div className="container">
        <SectionHeader title="Тарифные пакеты" subtitle="Три пакета: light / standard / pro." />
        <div className={styles.grid}>
          {plans.map((p) => (
            <div className={`card ${styles.card}`} key={p.key}>
              <div className={styles.head}>
                <div className={styles.title}>{p.title}</div>
                <div className={styles.price}>{p.price}</div>
              </div>
              <ul className={styles.list}>{p.perks.map((x) => <li key={x}>{x}</li>)}</ul>
              <button className="btn btnPrimary" onClick={() => dispatch(openModal('callback'))}>Обсудить пакет</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
