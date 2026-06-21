import React, { useEffect } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import styles from './CabinetPage.module.css'
import UploadMaterials from './parts/UploadMaterials.jsx'
import OrderChat from './parts/OrderChat.jsx'
import OrderStatus from './parts/OrderStatus.jsx'
import { useDispatch } from 'react-redux'
import { fetchCabinet } from '../../store/slices/cabinet/cabinetThunks.js'

export default function CabinetPage() {
  const dispatch = useDispatch()

  useEffect(() => { dispatch(fetchCabinet()) }, [dispatch])

  return (
    <main className="section">
      <div className="container">
        <div className={styles.head}>
          <h1 className="h2">Личный кабинет (MVP)</h1>
          <p className="p">Загрузка материалов, чат/комментарии и контроль статуса (съёмка → ретушь → готово).</p>
        </div>

        <div className={styles.layout}>
          <aside className={`card ${styles.side}`}>
            <NavLink to="/cabinet/status" className={({isActive}) => isActive ? styles.active : styles.link}>Статус</NavLink>
            <NavLink to="/cabinet/chat" className={({isActive}) => isActive ? styles.active : styles.link}>Чат</NavLink>
            <NavLink to="/cabinet/upload" className={({isActive}) => isActive ? styles.active : styles.link}>Материалы</NavLink>
          </aside>

          <section className={`card ${styles.main}`}>
            <Routes>
              <Route path="/" element={<OrderStatus />} />
              <Route path="status" element={<OrderStatus />} />
              <Route path="chat" element={<OrderChat />} />
              <Route path="upload" element={<UploadMaterials />} />
            </Routes>
          </section>
        </div>
      </div>
    </main>
  )
}
