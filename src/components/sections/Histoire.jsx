import { images, HISTOIRE_INTRO, SANGABI_BIO } from '../../data/content'

export default function Histoire() {
  return (
    <section id="histoire" className="section bg-white">
      <div className="sw">
        <div className="ey ey-gold">Histoire</div>
        <h2 className="h2 h2-dk">Née d’un <em>rêve divin</em></h2>
        <span className="subhead-rule" />

        <div className="prose">
          {HISTOIRE_INTRO.map((p, i) => (
            <p className="bp bp-dk" key={i}>{p}</p>
          ))}
        </div>

        {/* Sangabi */}
        <div id="sangabi" className="founder-row">
          <div className="founder-photo-wrap">
            <img src={images.khalife} alt="Mouhamed Gorgui Seyni Gueye, dit Sangabi" className="ph" loading="lazy" />
          </div>
          <div>
            <div className="f-dates">19 juillet 1926 · 12 mars 2007</div>
            <h3 className="f-name">Mouhamed Gorgui Seyni Gueye</h3>
            <p className="f-aka">dit Sangabi · Khalifatou Lahi Fil Ardi</p>
            {SANGABI_BIO.map((p, i) => (
              <p className="f-bio" key={i}>{p}</p>
            ))}
            <blockquote className="f-quote">
              «&nbsp;Dieu, qui m’a demandé de construire, nous donnera les moyens nécessaires pour
              réaliser cette Mosquée inchallah.&nbsp;»
            </blockquote>
          </div>
        </div>

        {/* Nuit fondatrice */}
        <div className="night-card night-card-wide">
          <div className="nc-label">Nuit du 28 au 29 juin 1973</div>
          <h3 className="nc-title">La nuit fondatrice</h3>
          <div className="nc-arabic">اللَّهُ أَكْبَر</div>
          <p className="nc-text">
            Une voix. Une maquette lumineuse parachutée du ciel. L’ordre de la suivre jusqu’à la
            baie de Ouakam. Sur la porte de droite, ALLAHOU AKBAR en lettres d’or.
          </p>
          <p className="nc-text">
            Sangabi dessine ce qu’il a vu dans un cahier. Certaines choses se tiennent longtemps
            dans le silence avant d’être réelles.
          </p>
        </div>
      </div>
    </section>
  )
}
