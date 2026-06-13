import { useEffect, useState } from 'react'

// Diaporama : alterne entre plusieurs images avec un fondu enchaîné.
export default function Slideshow({ images, alt = '', interval = 4500 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      interval,
    )
    return () => clearInterval(id)
  }, [images.length, interval])

  return (
    <div className="slideshow">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={alt}
          className={`slideshow-img${i === index ? ' active' : ''}`}
          loading="lazy"
        />
      ))}
    </div>
  )
}
