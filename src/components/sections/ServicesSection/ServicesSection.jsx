import React from 'react'
import SectionHeader from '../../ui/SectionHeader/SectionHeader.jsx'
import styles from './ServicesSection.module.css'

const services = [
  { title: 'Каталожная предметка', text: 'Чистый фон, единые ракурсы, подготовка под маркетплейсы.' },
  { title: 'Съёмка одежды', text: 'Модель/манекен/раскладка. Подготовка серии под один стиль.' },
  { title: '360°', text: 'Ротации и последовательности кадров, экспорт под виджеты.' },
  { title: 'Видео-клипы', text: 'Короткие ролики под карточку товара и соцсети.' },
  { title: 'Ретушь', text: 'Чистка, выравнивание цвета, подготовка под бренд‑гайд.' },
]

export default function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeader title="Услуги" subtitle="Лендинг включает услуги, примеры работ, тарифы и формы заявок." />
        <div className={`${styles.grid} grid`}>
          {services.map((s) => (
            <div className={`card ${styles.card}`} key={s.title}>
              <div className={styles.title}>{s.title}</div>
              <div className={styles.text}>{s.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
