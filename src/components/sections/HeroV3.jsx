import { VIDEO3, images } from '../../data/content'

// HERO V3 — vidéo (video3) en fond + image (DJI_0419) en arche (mihrab) à droite.
export default function HeroV3() {
  return (
    <section id="hero" className="hero3">
      <video className="hero3-bg" autoPlay muted loop playsInline preload="auto">
        <source src={VIDEO3} type="video/mp4" />
      </video>
      <span className="hero3-overlay" />

      {/* Découpe en arche pour l'image */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <clipPath id="mihrab" clipPathUnits="objectBoundingBox">
            <path d="M0,1 L0,0.42 C0.04,0.12 0.30,0 0.5,0 C0.70,0 0.96,0.12 1,0.42 L1,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="hero3-inner">
        <div className="hero3-left">
          <span className="hero3-rule" />
          <span className="hero3-eye">Ouakam · Corniche-Ouest · Dakar · Sénégal</span>
          <h1 className="hero3-title">Mosquée de la Divinité</h1>
          <p className="hero3-quote">
            «&nbsp;Dans la nuit du <strong>28 au 29 juin 1973</strong>, une voix ordonna à Sangabi
            de suivre une maquette lumineuse jusqu’à la baie de Ouakam.&nbsp;»
          </p>
          <p className="hero3-sub">
            Monument religieux et patrimonial du Sénégal. Face à l’Atlantique. Construite à mains
            nues sur un ordre reçu en songe.
          </p>
          <div className="hero3-ctas">
            <a href="#renovation" className="btn-r">Faire un don</a>
            <a href="#histoire" className="btn-w">Découvrir l’histoire</a>
            <a href="#visiter" className="btn-w">Visiter la mosquée</a>
          </div>
        </div>

        <div className="hero3-right">
          <img src={images.dji0419} alt="La Mosquée de la Divinité au coucher du soleil" className="hero3-arch" />
        </div>
      </div>
    </section>
  )
}
