import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './fieldStyles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { submitLead } from '../../../store/slices/leads/leadsThunks.js'

export default function EstimateForm() {
  const dispatch = useDispatch()
  const { isSubmitting, error, lastSuccessAt } = useSelector((s) => s.leads)

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: { itemsCount: 20, shootingKind: 'предметка', deadline: '5-7', contact: '' }
  })

  const onSubmit = async (values) => {
    await dispatch(submitLead({ type: 'estimate', payload: values }))
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.row}>
        <div className={styles.label}>Кол-во товаров</div>
        <input className={styles.input} type="number" min="1"
          {...register('itemsCount', { required: 'Укажите количество', min: { value: 1, message: 'Минимум 1' } })} />
        {errors.itemsCount ? <div className={styles.err}>{errors.itemsCount.message}</div> : null}
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Вид съёмки</div>
        <select className={styles.select} {...register('shootingKind', { required: true })}>
          <option value="товары">Товары</option>
          <option value="одежда">Одежда</option>
          <option value="предметка">Предметка</option>
          <option value="360">360°</option>
          <option value="видео">Видео-клипы</option>
        </select>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Сроки</div>
        <select className={styles.select} {...register('deadline', { required: true })}>
          <option value="2-3">2–3 дня</option>
          <option value="5-7">5–7 дней</option>
          <option value="10-14">10–14 дней</option>
        </select>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Контакт (почта или телефон)</div>
        <input className={styles.input} placeholder="email@domain.com / +7…"
          {...register('contact', { required: 'Оставьте контакт', minLength: { value: 5, message: 'Слишком коротко' } })} />
        {errors.contact ? <div className={styles.err}>{errors.contact.message}</div> : null}
      </div>

      <div className={styles.actions}>
        <button className="btn btnPrimary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Отправка…' : 'Рассчитать и отправить'}
        </button>
        {error ? <div className={styles.err}>{error}</div> : null}
      </div>

      {lastSuccessAt ? <div className={styles.success}>Заявка отправлена (или сохранена локально).</div> : null}
    </form>
  )
}
