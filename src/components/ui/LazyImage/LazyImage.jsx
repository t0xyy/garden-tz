import React, { useEffect, useRef, useState } from 'react'

export default function LazyImage({ src, alt, className, ...rest }) {
  const ref = useRef(null)
  const [loadedSrc, setLoadedSrc] = useState(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (!('IntersectionObserver' in window)) {
      setLoadedSrc(src)
      return
    }

    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setLoadedSrc(src)
          io.disconnect()
          break
        }
      }
    }, { rootMargin: '250px' })

    io.observe(el)
    return () => io.disconnect()
  }, [src])

  return <img ref={ref} src={loadedSrc || undefined} alt={alt} className={className} {...rest} />
}
