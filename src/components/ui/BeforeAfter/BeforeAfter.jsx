import React, { useMemo, useState } from 'react'
import styles from './BeforeAfter.module.css'

export default function BeforeAfter({ beforeSrc, afterSrc, alt = 'До/После' }) {
  const [value, setValue] = useState(50)
  const style = useMemo(() => ({ '--split': `${value}%` }), [value])

  return (
    <div className={styles.wrap} style={style}>
      <div className={styles.base}><img src={beforeSrc} alt={alt} loading="lazy" /></div>
      <div className={styles.top}><img src={afterSrc} alt={alt} loading="lazy" /></div>

      <input
        className={styles.range}
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        aria-label="Сравнение До/После"
      />

      <div className={styles.labels}><span>До</span><span>После</span></div>
    </div>
  )
}
