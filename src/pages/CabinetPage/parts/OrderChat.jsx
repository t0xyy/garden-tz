import React, { useState } from 'react'
import styles from './OrderChat.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addComment } from '../../../store/slices/cabinet/cabinetThunks.js'

export default function OrderChat() {
  const dispatch = useDispatch()
  const comments = useSelector((s) => s.cabinet.comments)
  const [text, setText] = useState('')

  const send = () => {
    const trimmed = text.trim()
    if (!trimmed) return
    dispatch(addComment(trimmed))
    setText('')
  }

  return (
    <div>
      <div className={styles.title}>Чат / комментарии</div>

      <div className={styles.list}>
        {comments.map((c) => (
          <div className={styles.msg} key={c.id}>
            <div className={styles.meta}><b>{c.author}</b> · <span>{new Date(c.at).toLocaleString()}</span></div>
            <div className={styles.text}>{c.text}</div>
          </div>
        ))}
      </div>

      <div className={styles.box}>
        <textarea className={styles.input} value={text} onChange={(e) => setText(e.target.value)} placeholder="Напишите комментарий…" rows={3} />
        <div className={styles.actions}>
          <button className="btn btnPrimary" onClick={send} type="button">Отправить</button>
        </div>
      </div>
    </div>
  )
}
