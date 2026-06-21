import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="h2">404</h1>
        <p className="p">Страница не найдена.</p>
        <Link className="btn btnPrimary" to="/">На главную</Link>
      </div>
    </main>
  )
}
