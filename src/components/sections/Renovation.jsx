import { Link } from 'react-router-dom'

// RÉNOVATION — « Préserver l'Héritage » : 2 phases avec barres de progression (réf)
const PHASES = [
  ['Phase I : Restauration', 'Traitement anticorrosion des armatures, étanchéité de la coupole et rénovation des façades extérieures.', 65],
  ['Phase II : Complexe Culturel', 'Aménagement d’un musée Sangabi, d’une bibliothèque de recherche et d’un centre d’artisanat.', 15],
]

export default function Renovation() {
  return (
    <section id="renovation" className="section bg-white">
      <div className="sw">
        <div className="sec-head-center">
          <span className="eyebrow red">Projet de Conservation</span>
          <h2 className="sec-title">Préserver <em>l’Héritage</em></h2>
        </div>

        <div className="reno2-grid">
          {PHASES.map(([title, body, pct]) => (
            <div className="reno2-card" key={title}>
              <h4>{title}</h4>
              <p>{body}</p>
              <div className="reno2-bar"><i style={{ width: `${pct}%` }} /></div>
              <p className="reno2-pct">{pct}% du budget collecté</p>
            </div>
          ))}
        </div>

        <div className="reno2-actions">
          <Link to="/renovation" className="btn-teal">En savoir plus sur le projet</Link>
        </div>
      </div>
    </section>
  )
}
