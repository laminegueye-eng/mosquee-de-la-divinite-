import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

// Bouton flottant « retour en haut » qui apparaît après défilement.
export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      className={`to-top${show ? ' show' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Revenir en haut de page"
    >
      <FiArrowUp />
    </button>
  )
}
