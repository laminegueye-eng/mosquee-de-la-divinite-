import React from 'react';

export default function Patrimoine() {
  return (
    <section id="patrimoine" className="section bg-white">
      <div className="sw">
        <div className="patrim-grid">
          
          {/* Colonne Gauche : Texte de présentation */}
          <div className="prose">
            <span className="eyebrow emerald">Richesses Littéraires</span>
            <h2 className="h2 h2-dk">
              Un patrimoine manuscrit <em>inestimable</em>
            </h2>
            <span className="subhead-rule"></span>
            <p className="bp bp-dk">
              Notre centre abrite une collection unique de parchemins, de traités de théologie et de recueils poétiques accumulés au fil des décennies. Ces œuvres, soigneusement conservées, constituent le cœur battant de la transmission du savoir au sein de notre fondation.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
              Chaque pièce fait l'objet d'un archivage rigoureux et de traitements de stabilisation afin de traverser les siècles et de rester accessible aux chercheurs du monde entier.
            </p>
          </div>

          {/* Colonne Droite : Le bloc de statistiques sombre */}
          <div className="patrim-stats">
            
            <div className="pr-row">
              <div className="pr-num">1 200</div>
              <div className="pr-lbl">Ouvrages et parchemins rares répertoriés dans notre catalogue</div>
            </div>

            <div className="pr-row">
              <div className="pr-num">XIIe</div>
              <div className="pr-lbl">Siècle de datation de notre plus ancien manuscrit sacré</div>
            </div>

            <div className="pr-row">
              <div className="pr-num">100%</div>
              <div className="pr-lbl">Des œuvres en cours de restauration et de numérisation</div>
            </div>

            <div className="pr-row">
              <div className="pr-num">15 +</div>
              <div className="pr-lbl">Langues et dialectes représentés à travers les traités</div>
            </div>

            {/* Lien interne */}
            <div className="patrim-link">
              <a href="#boutique">Explorer le catalogue des éditions &rarr;</a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}