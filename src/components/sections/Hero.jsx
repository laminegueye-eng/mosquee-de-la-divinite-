import { FiVideo, FiImage } from 'react-icons/fi'
import { useHero } from '../../context/HeroContext'
import { cx } from '../../utils/helpers'
import HeroVideo from './HeroVideo'
import HeroSplit from './HeroSplit'

// Affiche la version choisie + le sélecteur (en haut du hero, sous la navbar).
export default function Hero() {
  const { version, setVersion } = useHero()

  return (
    <div className="hero-wrap">
      {version === 'v2' ? <HeroSplit /> : <HeroVideo />}

      <div className="hero-toggle" role="tablist" aria-label="Choix de la version du hero">
        <button
          type="button"
          className={cx('hero-toggle-btn', version === 'v1' && 'active')}
          onClick={() => setVersion('v1')}
        >
          <FiVideo /> Vidéo
        </button>
        <button
          type="button"
          className={cx('hero-toggle-btn', version === 'v2' && 'active')}
          onClick={() => setVersion('v2')}
        >
          <FiImage /> Classique
        </button>
      </div>
    </div>
  )
}
