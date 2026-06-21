import React from 'react'
import styles from './LandingPage.module.css'
import ServicesSection from '../../components/sections/ServicesSection/ServicesSection.jsx'
import PortfolioSection from '../../components/sections/PortfolioSection/PortfolioSection.jsx'
import PricingSection from '../../components/sections/PricingSection/PricingSection.jsx'
import FormsSection from '../../components/sections/FormsSection/FormsSection.jsx'
import { useDispatch } from 'react-redux'
import { openModal } from '../../store/slices/ui/uiActions.js'

export default function LandingPage() {
  const dispatch = useDispatch()

  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.left}>
            <h1 className="h1">Коммерческая фотосъёмка для e‑commerce</h1>
            <p className="p">Съёмка товаров, одежды, предметки, 360° и видео. Быстрый расчёт стоимости, прозрачные пакеты и аккуратная ретушь.</p>
            <div className={styles.actions}>
              <a className="btn btnPrimary" href="#forms">Оставить заявку</a>
              <button className="btn" onClick={() => dispatch(openModal('callback'))} type="button">Быстрый звонок</button>
            </div>
            <div className={styles.badges}>
              <span className={styles.badge}>lazy-loading</span>
              <span className={styles.badge}>до/после</span>
              <span className={styles.badge}>формы</span>
              <span className={styles.badge}>SEO</span>
            </div>
          </div>

          <div className={`card ${styles.right}`}>
            <div className={styles.kpi}>
              <div><div className={styles.kpiNum}>24–72h</div><div className={styles.kpiText}>первые превью</div></div>
              <div><div className={styles.kpiNum}>+1 000</div><div className={styles.kpiText}>SKU отснято</div></div>
              <div><div className={styles.kpiNum}>1 стиль</div><div className={styles.kpiText}>единая карточка</div></div>
            </div>
            <div className={styles.preview}>
              <div className={styles.previewBox}>
                <div className={styles.previewHint}>Промо-блок. Ниже — портфолио и сравнение до/после.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <FormsSection />
    </main>
  )
}
