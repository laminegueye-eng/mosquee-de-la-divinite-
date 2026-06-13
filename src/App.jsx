import { useEffect } from 'react'
import './App.css'
import { LanguageProvider } from './context/LanguageContext'
import { HeroProvider } from './context/HeroContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BackToTop from './components/layout/BackToTop'
import AppRoutes from './routes/AppRoutes'

// Coquille de l'application : contexte global + mise en page (nav / contenu / footer).
function App() {
  // Au rechargement, repartir en haut de page (pas de restauration de scroll)
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  // Apparition en fondu des contenus au défilement (amélioration UX)
  useEffect(() => {
    const els = [...document.querySelectorAll('.sw')]
    els.forEach((el) => el.classList.add('reveal'))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <LanguageProvider>
      <HeroProvider>
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
        <BackToTop />
      </HeroProvider>
    </LanguageProvider>
  )
}

export default App
