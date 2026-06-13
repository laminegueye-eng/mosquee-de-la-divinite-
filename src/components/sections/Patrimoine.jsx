import { PATRIMOINE_INTRO, PATRIM } from '../../data/content'

export default function Patrimoine() {
  return (
    <section id="patrimoine" className="section bg-black motif motif-star">
      <div className="sw">
        <div className="ey ey-gold">Patrimoine</div>
        <h2 className="h2 h2-lt">
          Pour ceux qui ne l’ont pas connu. <em>Et pour ceux qui ne sont pas encore nés.</em>
        </h2>
        <span className="subhead-rule" />

        <div className="patrim-grid">
          <div className="prose">
            {PATRIMOINE_INTRO.map((p, i) => (
              <p className="bp bp-lt" key={i}>{p}</p>
            ))}
            <p className="bp bp-lt">
              Sa voix existe. Ses discours existent. Une sélection de vidéos sera disponible ici,
              pour ceux qui ne l’ont jamais entendu.
            </p>
            <a href="#patrimoine" className="btn-w">Voir les vidéos →</a>
          </div>
          <div className="patrim-stats">
            {PATRIM.map(([num, lbl]) => (
              <div className="pr-row" key={lbl}>
                <span className="pr-num">{num}</span>
                <span className="pr-lbl">{lbl}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="patrim-end">
          <span className="patrim-inf">1926 → ∞</span>
          <p>Une vie. Un message. Une communauté qui continue.</p>
        </div>
      </div>
    </section>
  )
}
