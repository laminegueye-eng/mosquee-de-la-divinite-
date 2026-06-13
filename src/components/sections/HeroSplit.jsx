import { images } from '../../data/content'

// HERO V2 — texte à gauche / image à droite, fond blanc dégradé
export default function HeroSplit() {
  return (
    <section id="hero" className="hero2">
      <div className="hero2-inner">
        <div className="hero2-left">
          <span className="hero2-eye">
            <i className="hero2-line" />
            Ouakam · Corniche-Ouest · Dakar · Sénégal
          </span>
          <h1 className="hero2-title">Mosquée de la Divinité</h1>
          <span className="hero2-rule" />
          <p className="hero2-quote">
            «&nbsp;Dans la nuit du <strong>28 au 29 juin 1973</strong>, une voix ordonna à
            Sangabi de suivre une maquette lumineuse parachutée du ciel, jusqu’à la baie de
            Ouakam où elle se posa, avec la mention <strong>ALLAHOU AKBAR</strong> écrite en
            lettres d’or sur la porte de droite.&nbsp;»
          </p>
          <div className="hero2-actions">
            <a href="#histoire" className="btn-r">Découvrir l’histoire</a>
            <a href="#visiter" className="btn-dk">Planifier une visite</a>
          </div>
        </div>
        <div className="hero2-right">
          <img src={images.fayfaat} alt="La Mosquée de la Divinité lors du Fay Faat" className="hero2-img" />
        </div>
      </div>
    </section>
  )
}
