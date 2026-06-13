import { BOUTIQUE } from '../../data/content'

export default function Boutique() {
  return (
    <section id="boutique" className="section bg-cream motif motif-dome">
      <div className="sw">
        <div className="ey ey-gold">Boutique officielle · Mosquée de la Divinité</div>
        <h2 className="h2 h2-dk">Porter le message. <em>Soutenir l’œuvre.</em></h2>
        <span className="subhead-rule" />
        <p className="bp bp-dk prose">
          Chaque achat contribue directement à la rénovation de la mosquée et à la construction du
          Complexe Mouhamed Seyni Gueye. L’achat est un don avec un objet en retour. Le don est un
          achat sans objet.
        </p>
        <p className="boutique-ship">
          Livraison disponible au Sénégal uniquement · Retrait possible à la boutique de la
          mosquée, Corniche-Ouest, Ouakam, Dakar.
        </p>

        <div className="boutique-grid">
          {BOUTIQUE.map(([title, body, meta]) => (
            <article className="shop-card" key={title}>
              <div className="shop-thumb"><span className="pc pc-night" /></div>
              <div className="shop-info">
                <h3 className="shop-title">{title}</h3>
                <p className="shop-body">{body}</p>
                <div className="shop-meta">{meta}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
