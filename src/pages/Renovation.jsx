import { Link } from 'react-router-dom'

// Sous-page Rénovation — détail du projet (contenu à compléter).
export default function RenovationPage() {
  return (
    <section className="section bg-cream" style={{ minHeight: '70vh' }}>
      <div className="sw">
        <span className="eyebrow red">Projet de Conservation</span>
        <h1 className="sec-title title-margin">Rénovation de la <em>Mosquée</em></h1>
        <p className="bp bp-dk prose">
          Cette page présentera le détail du projet de rénovation : les phases de
          restauration, le budget, le suivi des travaux et les moyens de contribuer.
          Le contenu sera ajouté prochainement.
        </p>
        <div className="reno2-actions" style={{ textAlign: 'left', marginTop: 40 }}>
          <Link to="/" className="btn-teal">← Retour à l’accueil</Link>
        </div>
      </div>
    </section>
  )
}
