import { FiSlash, FiUsers, FiPenTool, FiShield, FiAward } from 'react-icons/fi'
import { images, CONSTRUCTION_INTRO, FEATS, TIMELINE } from '../../data/content'

const FEAT_ICONS = {
  subvention: FiSlash,
  participatif: FiUsers,
  architecture: FiPenTool,
  securite: FiShield,
  mosquee: FiAward,
}

export default function Construction() {
  return (
    <section id="construction" className="section bg-dk motif motif-star">
      <div className="sw">
        <div className="ey ey-gold">Construction</div>
        <h2 className="h2 h2-lt">Bâtie à mains nues.</h2>
        <p className="subhead">Bâtie à mains nues par toute une communauté</p>
        <span className="subhead-rule" />

        <div className="cons-grid">
          <div>
            {CONSTRUCTION_INTRO.map((p, i) => (
              <p className="bp bp-lt" key={i}>{p}</p>
            ))}
          </div>
          <div className="cons-photo">
            <img src={images.sirat} alt="Le pont Al Sirat reliant les minarets pendant la construction" className="ph" loading="lazy" />
          </div>
        </div>

        {/* Pont Al Sirat */}
        <div className="sirat-block">
          <div className="ey ey-gold">45 mètres · À mains nues</div>
          <h3 className="h2 h2-lt" style={{ fontSize: 'clamp(28px,3vw,42px)' }}>Le pont Al Sirat</h3>
          <p className="bp bp-lt">
            Pour travailler au sommet des deux minarets, des jeunes ont construit un unique pont
            en bois à 45 mètres de hauteur au-dessus du vide.
          </p>
          <p className="bp bp-lt">
            Ils l’ont nommé le pont Al Sirat, le pont qui dans la croyance islamique enjambe
            l’enfer et mène au paradis le Jour du Jugement. Un faux pas signifiait une mort
            certaine. Ils ont choisi d’y être.
          </p>
        </div>

        {/* 5 blocs caractéristiques */}
        <div className="feats feats-5">
          {FEATS.map(([icon, title, body]) => {
            const Icon = FEAT_ICONS[icon]
            return (
              <div className="feat" key={title}>
                <div className="feat-ico"><Icon /></div>
                <div className="feat-title">{title}</div>
                <p className="feat-body">{body}</p>
              </div>
            )
          })}
        </div>

        {/* Timeline */}
        <div id="timeline" className="tl-eyebrow ey ey-gold">Chronologie</div>
        <div className="tl">
          {TIMELINE.map(([date, title, body]) => (
            <div className="tl-item" key={date}>
              <span className="tl-dot" />
              <div className="tl-date">{date}</div>
              <h3 className="tl-title">{title}</h3>
              <p className="tl-body">{body}</p>
            </div>
          ))}
        </div>

        {/* Transition vers la rénovation */}
        <div className="transition-band">
          <p>Ce qui a été bâti à mains nues peut se dégrader.<br />
            Ce qui a été bâti avec foi se restaure de la même façon.</p>
          <a href="#renovation" className="btn-r">Soutenir la rénovation →</a>
        </div>
      </div>
    </section>
  )
}
