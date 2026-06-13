import { Link } from 'react-router-dom'

// Page 404
export default function NotFound() {
  return (
    <section className="section bg-dk" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="sw" style={{ textAlign: 'center' }}>
        <div className="ey ey-o" style={{ justifyContent: 'center' }}>Erreur 404</div>
        <h2 className="h2 h2-lt">Page <em>introuvable</em></h2>
        <p className="bp bp-lt" style={{ marginBottom: 32 }}>
          La page que vous cherchez n’existe pas ou a été déplacée.
        </p>
        <Link to="/" className="btn-r">Retour à l’accueil</Link>
      </div>
    </section>
  )
}
