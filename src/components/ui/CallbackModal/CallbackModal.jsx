import React, { useEffect } from 'react'
import styles from './CallbackModal.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../../store/slices/ui/uiActions.js'
import { useForm } from 'react-hook-form'
import { submitLead } from '../../../store/slices/leads/leadsThunks.js'

export default function CallbackModal() {
  const dispatch = useDispatch()
  const modal = useSelector((s) => s.ui.modal)
  const { isSubmitting, error } = useSelector((s) => s.leads)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: { phone: '', name: '' } })

  useEffect(() => {
    const onKeyDown = (e) => { if (e.key === 'Escape') dispatch(closeModal()) }
    if (modal) window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [modal, dispatch])

  if (modal !== 'callback') return null

  const onSubmit = async (values) => {
    await dispatch(submitLead({ type: 'callback', payload: values }))
    reset()
    dispatch(closeModal())
  }

  return (
    <div className={styles.backdrop} onMouseDown={() => dispatch(closeModal())}>
      <div className={`card ${styles.modal}`} onMouseDown={(e) => e.stopPropagation()}>
        <div className={styles.head}>
          <div className={styles.title}>Быстрый запрос звонка</div>
          <button className="btn" type="button" onClick={() => dispatch(closeModal())}>✕</button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.row}>
            <div className={styles.label}>Имя</div>
            <input className={styles.input} {...register('name')} placeholder="Как к вам обращаться" />
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Телефон</div>
            <input
              className={styles.input}
              {...register('phone', { required: 'Укажите телефон', minLength: { value: 7, message: 'Слишком коротко' } })}
              placeholder="+7..."
            />
            {errors.phone ? <div className={styles.err}>{errors.phone.message}</div> : null}
          </div>

          {error ? <div className={styles.err}>{error}</div> : null}

          <div className={styles.actions}>
            <button className="btn btnPrimary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Отправка…' : 'Заказать звонок'}
            </button>
            <button className="btn" type="button" onClick={() => dispatch(closeModal())}>Отмена</button>
          </div>
        </form>
      </div>
    </div>
  )
}
