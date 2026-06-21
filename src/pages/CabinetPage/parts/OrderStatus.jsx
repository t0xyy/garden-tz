import React from 'react'
import styles from './OrderStatus.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setStatus } from '../../../store/slices/cabinet/cabinetThunks.js'

const steps = ['Съёмка', 'Ретушь', 'Готово']

export default function OrderStatus() {
  const dispatch = useDispatch()
  const status = useSelector((s) => s.cabinet.status)

  return (
    <div>
      <div className={styles.title}>Статус заказа</div>
      <div className={styles.line}>
        {steps.map((s) => (
          <button key={s} type="button" className={`btn ${status === s ? 'btnPrimary' : ''}`} onClick={() => dispatch(setStatus(s))}>
            {s}
          </button>
        ))}
      </div>
      <div className={styles.info}>
        Текущий статус: <b>{status}</b>. В реальной интеграции email‑уведомления делает бэкенд при смене статуса.
      </div>
    </div>
  )
}
