import React, { useState } from 'react'
import styles from './UploadMaterials.module.css'

export default function UploadMaterials() {
  const [files, setFiles] = useState([])

  const onPick = (e) => {
    const next = Array.from(e.target.files || []).map((f) => ({
      id: `${Date.now()}_${Math.random()}`,
      name: f.name,
      size: f.size,
    }))
    setFiles((prev) => [...prev, ...next])
  }

  return (
    <div>
      <div className={styles.title}>Загрузка материалов (бренд‑гайды)</div>
      <div className={styles.row}>
        <input className={styles.input} type="file" multiple onChange={onPick} />
      </div>

      <div className={styles.list}>
        {files.length === 0 ? <div className={styles.muted}>Пока ничего не загружено.</div> : null}
        {files.map((f) => (
          <div className={styles.file} key={f.id}>
            <div><b>{f.name}</b></div>
            <div className={styles.muted}>{Math.round(f.size / 1024)} KB</div>
          </div>
        ))}
      </div>
    </div>
  )
}
