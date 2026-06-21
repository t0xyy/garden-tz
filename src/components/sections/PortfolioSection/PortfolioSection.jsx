import React, { useMemo, useState } from 'react'
import styles from './PortfolioSection.module.css'
import SectionHeader from '../../ui/SectionHeader/SectionHeader.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setPortfolioFilter } from '../../../store/slices/portfolio/portfolioActions.js'
import { selectFilteredPortfolio, selectPortfolioFilter, selectPortfolioState } from '../../../store/slices/portfolio/portfolioSelectors.js'
import LazyImage from '../../ui/LazyImage/LazyImage.jsx'
import BeforeAfter from '../../ui/BeforeAfter/BeforeAfter.jsx'

const FILTERS = [
  { key: 'all', label: 'Все' },
  { key: 'products', label: 'Товары' },
  { key: 'clothes', label: 'Одежда' },
  { key: 'still', label: 'Предметка' },
  { key: '360', label: '360°' },
  { key: 'video', label: 'Видео-клипы' },
]

export default function PortfolioSection() {
  const dispatch = useDispatch()
  const { isLoading, error } = useSelector(selectPortfolioState)
  const filter = useSelector(selectPortfolioFilter)
  const items = useSelector(selectFilteredPortfolio)
  const [activeId, setActiveId] = useState(null)

  const active = useMemo(() => items.find((x) => x.id === activeId) || items[0] || null, [items, activeId])

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <SectionHeader
          title="Портфолио"
          subtitle="Сортировка по типам съёмки + блок “До/После” + lazy-loading, чтобы не перегружать страницу."
        />

        <div className={styles.toolbar}>
          <div className={styles.filters}>
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`btn ${filter === f.key ? 'btnPrimary' : ''}`}
                onClick={() => dispatch(setPortfolioFilter(f.key))}
                type="button"
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className={styles.meta}>
            {isLoading ? 'Загрузка…' : `${items.length} работ`}
            {error ? <span className={styles.err}> · {error}</span> : null}
          </div>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.left} card`}>
            {active ? <BeforeAfter beforeSrc={active.before} afterSrc={active.after} alt={active.title} /> : <div className={styles.empty}>Нет работ</div>}
          </div>

          <div className={styles.right}>
            {items.map((x) => (
              <button
                key={x.id}
                className={`${styles.thumb} card ${active?.id === x.id ? styles.active : ''}`}
                onClick={() => setActiveId(x.id)}
                type="button"
              >
                <LazyImage src={x.thumb} alt={x.title} className={styles.img} />
                <div className={styles.caption}>{x.title}</div>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.download}>
          <a className="btn" href="/tech_brief.pdf" download>Скачать техническое ТЗ в PDF</a>
        </div>
      </div>
    </section>
  )
}
