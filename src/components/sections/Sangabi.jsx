import { images, SANGABI_BIO } from '../../data/content'

// SANGABI — image à sa taille naturelle à gauche + écritures sur deux colonnes à droite
export default function Sangabi() {
  return (
    <section id="sangabi" className="section bg-white">
      <div className="sw">
        <div className="sangabi-row">
          <div className="sangabi-photo">
            <img src={images.khalife} alt="Mouhamed Gorgui Seyni Gueye, dit Sangabi" loading="lazy" />
          </div>
          <div className="sangabi-text">
            <div className="f-dates">19 juillet 1926 · 12 mars 2007</div>
            <h3 className="f-name">Mouhamed Gorgui Seyni Gueye</h3>
            <p className="f-aka">dit Sangabi · Khalifatou Lahi Fil Ardi</p>
            <div className="sangabi-cols">
              {SANGABI_BIO.map((p, i) => (
                <p className="f-bio" key={i}>{p}</p>
              ))}
            </div>
            <blockquote className="f-quote">
              «&nbsp;Dieu, qui m’a demandé de construire, nous donnera les moyens nécessaires pour
              réaliser cette Mosquée inchallah.&nbsp;»
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
