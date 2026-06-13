import { FiVideo, FiImage, FiColumns } from 'react-icons/fi'
import { useHero } from '../../context/HeroContext'
import { cx } from '../../utils/helpers'
import HeroVideo from './HeroVideo'
import HeroSplit from './HeroSplit'
import HeroV3 from './HeroV3'

const OPTIONS = [
  ['v1', FiVideo, 'Vidéo'],
  ['v2', FiImage, 'Classique'],
  ['v3', FiColumns, 'Arche'],
]

// Affiche la version choisie + le sélecteur (en haut du hero, sous la navbar).
export default function Hero() {
  const { version, setVersion } = useHero()

  const current =
    version === 'v2' ? <HeroSplit /> : version === 'v3' ? <HeroV3 /> : <HeroVideo />

  return (
    <div className="hero-wrap">
      {current}

      <div className="hero-toggle" role="tablist" aria-label="Choix de la version du hero">
        {OPTIONS.map(([v, Icon, label]) => (
          <button
            key={v}
            type="button"
            className={cx('hero-toggle-btn', version === v && 'active')}
            onClick={() => setVersion(v)}
          >
            <Icon /> {label}
          </button>
        ))}
      </div>
    </div>
  )
}
