// VISITER — Guide pratique (carte teal) + « Un Sanctuaire face à l'Océan » (3 cartes)
const CARDS = [
  ['Architecture', 'Découvrez la coupole de 80 tonnes suspendue par la seule force de la foi.'],
  ['Spiritualité', 'Le ressac de l’Atlantique accompagne vos prières dans un calme absolu.'],
  ['Patrimoine', 'Classée au patrimoine national du Sénégal comme chef-d’œuvre architectural.'],
]

export default function Visiter() {
  return (
    <section id="visiter" className="section bg-cream">
      <div className="sw">
        <div className="vis2-grid">
          {/* Guide pratique */}
          <aside className="guide">
            <h3>Guide Pratique</h3>
            <div className="guide-row">
              <div className="k">Adresse</div>
              <div className="v">Corniche-Ouest, Baie de Ouakam,<br />Dakar, Sénégal</div>
            </div>
            <div className="guide-row">
              <div className="k">Accès</div>
              <div className="v">Ouvert tous les jours aux visiteurs respectueux. Entrée libre.</div>
            </div>
            <div className="guide-row">
              <div className="k">Tenue Requise</div>
              <div className="v">Modestie exigée. Voile fourni à l’entrée pour les dames.</div>
            </div>
            <a
              className="guide-link"
              href="https://www.google.com/maps?q=Mosqu%C3%A9e+de+la+Divinit%C3%A9+Ouakam"
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir Google Maps
            </a>
          </aside>

          {/* Contenu */}
          <div>
            <div className="vis2-head">
              <h2 className="sec-title">Un Sanctuaire face à</h2>
              <h2 className="sec-title"><em>l’Océan</em></h2>
            </div>
            <div className="vis2-cards">
              {CARDS.map(([lbl, body]) => (
                <div className="vis2-card" key={lbl}>
                  <p className="lbl">{lbl}</p>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
