import { PRAYERS, SPECIAL, MOSQUE_PRAYERS } from '../../data/content'

export default function Prier() {
  return (
    <section id="prier" className="section bg-black motif motif-star">
      <div className="sw">
        <div className="ey ey-gold">Prier</div>
        <h2 className="h2 h2-lt">La prière, au cœur du lieu.</h2>
        <span className="subhead-rule" />
        <p className="bp bp-lt prose">
          La Mosquée de la Divinité accueille les cinq prières quotidiennes et l’ensemble du
          calendrier islamique. Tous les fidèles sont les bienvenus.
        </p>

        <div className="prayers-5">
          {PRAYERS.map(([ar, name, time, img]) => (
            <div className="pr-card" key={name}>
              <div className="pr-photo">
                {img
                  ? <img src={img} alt={name} className="ph" loading="lazy" />
                  : <div className="pc pc-night"><span className="pc-lbl">{name}</span></div>}
              </div>
              <div className="pr-info">
                <div className="pr-arabic">{ar}</div>
                <div className="pr-name">{name}</div>
                <div className="pr-time">{time}</div>
              </div>
            </div>
          ))}
        </div>

        <div id="jumaah" className="jumaah-band">
          <div className="jumaah-arabic">الجُمُعَة</div>
          <div>
            <div className="jumaah-name">Jumaah · Prière du vendredi</div>
            <div className="jumaah-time">Chaque vendredi à 14h00</div>
            <p className="jumaah-note">La tenue blanche est de mise pour la prière du vendredi.</p>
          </div>
        </div>

        {/* Prières spéciales */}
        <div id="prieres-speciales" className="prayers-block-label">Prières spéciales</div>
        <div className="prayers-sp">
          {SPECIAL.map(([ar, name, time]) => (
            <div className="sp-card" key={name}>
              <div className="sp-arabic">{ar}</div>
              <div className="sp-name">{name}</div>
              <p className="sp-time">{time}</p>
            </div>
          ))}
        </div>

        {/* Prières propres à la mosquée */}
        <div className="prayers-block-label">Prières propres à la Mosquée de la Divinité</div>
        <div className="mosque-prayers">
          {MOSQUE_PRAYERS.map(([ar, name, when, body]) => (
            <div className="mp-card" key={name}>
              <div className="sp-arabic">{ar}</div>
              <div className="sp-name">{name}</div>
              <p className="mp-when">{when}</p>
              <p className="mp-body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
