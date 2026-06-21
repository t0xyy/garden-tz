import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './fieldStyles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { submitLead } from '../../../store/slices/leads/leadsThunks.js'

export default function ShootingRequestForm() {
  const dispatch = useDispatch()
  const { isSubmitting, error, lastSuccessAt } = useSelector((s) => s.leads)

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: { date: '', productType: 'товары', skuCount: 10, contact: '' }
  })

  const onSubmit = async (values) => {
    await dispatch(submitLead({ type: 'shooting', payload: values }))
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.row}>
        <div className={styles.label}>Дата съёмки</div>
        <input className={styles.input} type="date" {...register('date', { required: 'Укажите дату' })} />
        {errors.date ? <div className={styles.err}>{errors.date.message}</div> : null}
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Тип товара</div>
        <select className={styles.select} {...register('productType', { required: true })}>
          <option value="товары">Товары</option>
          <option value="одежда">Одежда</option>
          <option value="предметка">Предметка</option>
          <option value="360">360°</option>
          <option value="видео">Видео-клипы</option>
        </select>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Количество SKU</div>
        <input
          className={styles.input}
          type="number"
          min="1"
          {...register('skuCount', { required: 'Укажите количество SKU', min: { value: 1, message: 'Минимум 1' } })}
        />
        {errors.skuCount ? <div className={styles.err}>{errors.skuCount.message}</div> : null}
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Контакт (почта или телефон)</div>
        <input
          className={styles.input}
          placeholder="email@domain.com / +7…"
          {...register('contact', { required: 'Оставьте контакт', minLength: { value: 5, message: 'Слишком коротко' } })}
        />
        {errors.contact ? <div className={styles.err}>{errors.contact.message}</div> : null}
      </div>

      <div className={styles.actions}>
        <button className="btn btnPrimary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Отправка…' : 'Отправить заявку'}
        </button>
        {error ? <div className={styles.err}>{error}</div> : null}
      </div>

      {lastSuccessAt ? <div className={styles.success}>Заявка отправлена (или сохранена локально).</div> : null}
    </form>
  )
}
