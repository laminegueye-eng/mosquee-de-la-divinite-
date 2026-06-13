import { FiVideo, FiImage } from 'react-icons/fi'
import { useHero } from '../../context/HeroContext'
import { cx } from '../../utils/helpers'

// Barre tout en haut (au-dessus de la navbar) pour choisir la version du hero.
export default function HeroToggleBar() {
  const { version, setVersion } = useHero()

  return (
    <div className="toggle-bar">
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
