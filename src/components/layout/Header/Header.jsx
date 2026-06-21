import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import { useDispatch } from 'react-redux'
import { openModal } from '../../../store/slices/ui/uiActions.js'

export default function Header() {
  const dispatch = useDispatch()

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo}>E‑Com Photo</NavLink>

        <nav className={styles.nav}>
          <a href="#services">Услуги</a>
          <a href="#portfolio">Портфолио</a>
          <a href="#pricing">Тарифы</a>
          <a href="#forms">Заявка</a>
          <NavLink to="/cabinet">Кабинет</NavLink>
        </nav>

        <button className="btn btnPrimary" onClick={() => dispatch(openModal('callback'))}>
          Обратный звонок
        </button>
      </div>
    </header>
  )
}
