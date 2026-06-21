import React from 'react'
import styles from './SectionHeader.module.css'

export default function SectionHeader({ title, subtitle, children }) {
  return (
    <div className={styles.wrap}>
      <h2 className="h2">{title}</h2>
      {subtitle ? <p className="p">{subtitle}</p> : null}
      {children}
    </div>
  )
}
