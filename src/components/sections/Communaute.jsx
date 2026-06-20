import { FiCoffee, FiBookOpen, FiHeart, FiTrash2 } from 'react-icons/fi'

// COMMUNAUTÉ — « Actions & Patrimoine » : 4 actions (réf)
const ACTIONS = [
  [FiCoffee, 'Ndogou', 'Repas de rupture offerts à des milliers de jeûneurs chaque soir de Ramadan.'],
  [FiBookOpen, 'CEEMNA', 'Soutien scolaire et bourses pour les enfants issus des familles les plus modestes.'],
  [FiHeart, 'Santé', 'Journées médicales et campagnes de don de sang régulières pour les hôpitaux.'],
  [FiTrash2, 'UFMNA', 'L’union des femmes veille à la propreté méticuleuse du sanctuaire et de la plage.'],
]

export default function Communaute() {
  return (
    <section id="communaute" className="section bg-soft">
      <div className="sw">
        <div className="comm2-head">
          <div>
            <h2 className="sec-title">Actions communautaires</h2>
          </div>
          <p>Au-delà du béton, une vie sociale intense anime la baie.</p>
        </div>

        <div className="comm2-grid">
          {ACTIONS.map(([Icon, title, body]) => (
            <div className="comm2-card" key={title}>
              <span className="ico"><Icon /></span>
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
