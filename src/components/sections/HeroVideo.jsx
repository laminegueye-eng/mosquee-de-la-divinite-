import { VIDEO } from '../../data/content'

// HERO V1 — vidéo aérienne en fond
export default function HeroVideo() {
  return (
    <section id="hero">
      <video
        className="hero-bg-media"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={VIDEO} type="video/mp4" />
      </video>
      <span className="hero-bg-overlay" />

      <div className="hero-v-inner">
        <div className="hero-v-content">
          <span className="hero-eye">Ouakam · Corniche-Ouest · Dakar · Sénégal</span>
          <h1 className="hero-title">Mosquée<br />de la <em>Divinité</em></h1>
          <span className="hero-rule" />
          <p className="hero-quote">
            «&nbsp;Dans la nuit du <strong>28 au 29 juin 1973</strong>, une voix ordonna à Sangabi
            de suivre une maquette lumineuse parachutée du ciel, jusqu’à la baie de Ouakam où elle
            se posa, avec la mention <strong>ALLAHOU AKBAR</strong> écrite en lettres d’or sur la
            porte de droite.&nbsp;»
          </p>
          <p className="hero-sub">
            Face à l’Atlantique. Construite à mains nues sur un ordre reçu en songe.
          </p>
          <div className="hero-ctas">
            <a href="#histoire" className="btn-r">Découvrir l’histoire</a>
            <a href="#visiter" className="btn-w">Visiter la mosquée</a>
            <a href="#renovation" className="btn-w">Faire un don</a>
          </div>
        </div>
      </div>
    </section>
  )
}
