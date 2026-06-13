import { VISITE_INFO, VISITE_CARDS, images } from '../../data/content'

export default function Visiter() {
  return (
    <section id="visiter" className="section bg-cream motif motif-dome">
      <div className="sw">
        <div className="ey ey-gold">Visiter</div>
        <h2 className="h2 h2-dk">Un lieu <em>ouvert à tous</em>.</h2>
        <span className="subhead-rule" />
        <p className="bp bp-dk prose">
          Perchée entre les falaises et l’Atlantique, la Mosquée de la Divinité est l’un des
          monuments les plus photographiés du Sénégal. Elle accueille fidèles et voyageurs du
          monde entier.
        </p>

        <div className="section-banner">
          <img src={images.aerial} alt="Vue aérienne de la Mosquée de la Divinité, Ouakam" className="ph" loading="lazy" />
        </div>

        <div className="visite-band">
          <div>
            <h3 className="vb-title">Informations <em>pratiques</em></h3>
            <p className="vb-body">Tout ce qu’il faut savoir avant de venir.</p>
          </div>
          <div className="info-tbl">
            {VISITE_INFO.map(([k, v]) => (
              <div className="ir" key={k}>
                <span className="ik">{k}</span>
                <span className="iv">{v}</span>
              </div>
            ))}
            <div className="ir">
              <span className="ik">Itinéraire</span>
              <span className="iv">
                <a href="https://www.google.com/maps?q=Mosqu%C3%A9e+de+la+Divinit%C3%A9+Ouakam" target="_blank" rel="noreferrer" style={{ color: 'var(--green)', borderBottom: '1px solid rgba(4,89,38,0.4)' }}>Google Maps →</a>
              </span>
            </div>
          </div>
        </div>

        <div className="visite-cards">
          {VISITE_CARDS.map(([title, body]) => (
            <div className="vc" key={title}>
              <span className="vc-bar" />
              <div className="vc-title">{title}</div>
              <p className="vc-body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
