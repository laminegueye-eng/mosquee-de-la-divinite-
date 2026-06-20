import { Link } from 'react-router-dom'

// Sous-page Patrimoine — mise en valeur du patrimoine de la mosquée (contenu à compléter).
export default function PatrimoinePage() {
  return (
    <section className="section bg-cream" style={{ minHeight: '70vh' }}>
      <div className="sw">
        <span className="eyebrow red">Héritage &amp; Patrimoine</span>
        <h1 className="sec-title title-margin">Le <em>Patrimoine</em> de la Mosquée</h1>
        <p className="bp bp-dk prose">
          Cette page présentera le patrimoine de la Mosquée de la Divinité : son
          architecture classée, ses archives, son histoire et les actions de
          préservation. Le contenu sera ajouté prochainement.
        </p>
        <div className="reno2-actions" style={{ textAlign: 'left', marginTop: 40 }}>
          <Link to="/" className="btn-teal">← Retour à l’accueil</Link>
        </div>
      </div>
    </section>
  )
}
