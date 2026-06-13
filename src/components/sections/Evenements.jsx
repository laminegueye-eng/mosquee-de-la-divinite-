import { EVENTS, EVENTS_MINI, images } from '../../data/content'

export default function Evenements() {
  return (
    <section id="evenements" className="section bg-cream">
      <div className="sw">
        <div className="ey ey-gold">Événements</div>
        <h2 className="h2 h2-dk">Un calendrier <em>vivant</em>.</h2>
        <span className="subhead-rule" />

        <div className="section-banner">
          <img src={images.korite} alt="Rassemblement des fidèles lors de la Korité" className="ph" loading="lazy" />
        </div>

        <div className="events-main">
          {EVENTS.map(([label, name, desc, img]) => (
            <div className="ev-card" key={name}>
              <div className="ev-photo">
                <img src={img} alt={name} className="ph" loading="lazy" />
              </div>
              <div className="ev-body">
                <div className="ev-label">{label}</div>
                <h3 className="ev-name">{name}</h3>
                <p className="ev-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="events-mini">
          {EVENTS_MINI.map(([label, name, desc]) => (
            <div className="emini" key={name}>
              <div className="emini-label">{label}</div>
              <div className="emini-name">{name}</div>
              <p className="emini-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
