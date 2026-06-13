import logo from '../../assets/Logo.png'
import { FOOTER_NAV, SOCIALS } from '../../data/content'

export default function Footer() {
  return (
    <footer>
      <div className="footer-red" />
      <div className="footer-main">
        <img src={logo} alt="Mosquée de la Divinité" style={{ height: 60 }} />
        <div>
          <span className="footer-brand-name">Mosquée de la Divinité</span>
          <span className="footer-brand-sub">
            Masdjidou Rabbani · Ouakam · Corniche-Ouest · Dakar · Sénégal
          </span>
        </div>
        <div className="footer-socials">
          {SOCIALS.map((s) => (
            <a key={s} href="#contact" className="footer-soc-icon">{s}</a>
          ))}
        </div>
        <ul className="footer-nav">
          {FOOTER_NAV.map(([label, href]) => (
            <li key={href + label}><a href={href}>{label}</a></li>
          ))}
        </ul>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">
          mosqueedeladivinite.org · Site officiel · Mouvement Naby Allah
        </span>
        <span className="footer-copy">© 2026 Mouvement Naby Allah</span>
      </div>
    </footer>
  )
}
