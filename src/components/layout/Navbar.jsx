import { useLocation, Link } from 'react-router-dom'
import logo from '../../assets/photo/Logo.png'
import { useLanguage } from '../../context/LanguageContext'
import { cx } from '../../utils/helpers'

const GLOBAL_LINKS = [
  ['Histoire', '/#histoire'],
  ['Visiter', '/#visiter'],
  ['Prier', '/#prier'],
  ['Le Message', '/#message'],
  ['Communauté', '/#communaute'],
  ['Rénovation', '/renovation'],
  ['Boutique', '/boutique'],
]

// Navigation des pages secondaires (boutique, rénovation, patrimoine)
const SUBPAGE_LINKS = [
  ['Accueil', '/'],
  ['Rénovation', '/renovation'],
  ['Boutique', '/boutique'],
  ['Patrimoine', '/patrimoine'],
]

// Pages qui partagent cette navbar « secondaire »
const SUBPAGES = ['/boutique', '/renovation', '/patrimoine']

export default function Navbar() {
  const { lang, setLang } = useLanguage()
  const location = useLocation()

  const isSubPage = SUBPAGES.includes(location.pathname)
  const links = isSubPage ? SUBPAGE_LINKS : GLOBAL_LINKS

  return (
    <nav>
      {isSubPage ? (
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Mosquée de la Divinité" className="nav-logo-img" />
          <span className="nav-logo-txt">
            <span className="nav-logo-main">Mosquée de la Divinité</span>
            <span className="nav-logo-sub">Masdjidou Rabbani</span>
          </span>
        </Link>
      ) : (
        <a href="#hero" className="nav-logo">
          <img src={logo} alt="Mosquée de la Divinité" className="nav-logo-img" />
          <span className="nav-logo-txt">
            <span className="nav-logo-main">Mosquée de la Divinité</span>
            <span className="nav-logo-sub">Masdjidou Rabbani</span>
          </span>
        </a>
      )}

      <ul className="nav-links-ref">
        {links.map(([label, href]) => {
          const isAnchor = href.startsWith('/#') || href.startsWith('#')
          return (
            <li key={href}>
              {isAnchor ? (
                <a href={href}>{label}</a>
              ) : (
                <Link to={href}>{label}</Link>
              )}
            </li>
          )
        })}
      </ul>

      <div className="nav-right">
        <div className="lang-switcher">
          {['FR', 'EN'].map((code) => (
            <button
              key={code}
              type="button"
              className={cx('lang-btn', lang === code && 'active')}
              onClick={() => setLang(code)}
            >
              {code}
            </button>
          ))}
        </div>
        <a href={isSubPage ? '/#renovation' : '#renovation'} className="nav-don">
          Faire un don
        </a>
      </div>
    </nav>
  )
}
