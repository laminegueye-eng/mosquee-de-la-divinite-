import { COMMUNITY_INTRO, ACTIONS } from '../../data/content'

export default function Communaute() {
  return (
    <section id="communaute" className="section bg-white">
      <div className="sw">
        <div className="ey ey-gold">Le Mouvement Naby Allah · En actes</div>
        <h2 className="h2 h2-dk">La même communauté. <em>Le même élan.</em></h2>
        <span className="subhead-rule" />
        <div className="prose">
          {COMMUNITY_INTRO.map((p, i) => (
            <p className="bp bp-dk" key={i}>{p}</p>
          ))}
        </div>

        <div className="actions-grid">
          {ACTIONS.map(([title, text, img]) => (
            <div className="action-card" key={title}>
              <div className="action-photo">
                <img src={img} alt={title} className="ph" loading="lazy" />
              </div>
              <div className="action-body">
                <div className="action-title">{title}</div>
                <p className="action-text">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="transition-band transition-band-dk">
          <p>
            Ils ont construit la mosquée sans machines. Ils l’entretiennent sans relâche.
            Et aujourd’hui, ils appellent le monde à les rejoindre pour la restaurer.
          </p>
          <a href="#renovation" className="btn-r">Soutenir la rénovation →</a>
        </div>
      </div>
    </section>
  )
}
