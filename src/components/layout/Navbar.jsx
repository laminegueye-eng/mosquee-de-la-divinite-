import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
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
  const [menuOpen, setMenuOpen] = useState(false)
  const [lastPath, setLastPath] = useState(location.pathname)

  const isSubPage = SUBPAGES.includes(location.pathname)
  const links = isSubPage ? SUBPAGE_LINKS : GLOBAL_LINKS
  const donHref = isSubPage ? '/#renovation' : '#renovation'
  const closeMenu = () => setMenuOpen(false)

  // Ferme le menu mobile quand on change de page (navigation, retour navigateur…)
  if (location.pathname !== lastPath) {
    setLastPath(location.pathname)
    setMenuOpen(false)
  }

  const Logo = isSubPage ? (
    <Link to="/" className="nav-logo" onClick={closeMenu}>
      <img src={logo} alt="Mosquée de la Divinité" className="nav-logo-img" />
      <span className="nav-logo-txt">
        <span className="nav-logo-main">Mosquée de la Divinité</span>
        <span className="nav-logo-sub">Masdjidou Rabbani</span>
      </span>
    </Link>
  ) : (
    <a href="#hero" className="nav-logo" onClick={closeMenu}>
      <img src={logo} alt="Mosquée de la Divinité" className="nav-logo-img" />
      <span className="nav-logo-txt">
        <span className="nav-logo-main">Mosquée de la Divinité</span>
        <span className="nav-logo-sub">Masdjidou Rabbani</span>
      </span>
    </a>
  )

  return (
    <nav>
      {Logo}

      <ul className={cx('nav-links-ref', menuOpen && 'open')}>
        {links.map(([label, href]) => {
          const isAnchor = href.startsWith('/#') || href.startsWith('#')
          return (
            <li key={href}>
              {isAnchor ? (
                <a href={href} onClick={closeMenu}>{label}</a>
              ) : (
                <Link to={href} onClick={closeMenu}>{label}</Link>
              )}
            </li>
          )
        })}
        {/* Bouton « don » repris dans le menu déroulant mobile */}
        <li className="nav-don-mobile">
          <a href={donHref} className="nav-don" onClick={closeMenu}>
            Faire un don
          </a>
        </li>
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
        <a href={donHref} className="nav-don nav-don-desktop">
          Faire un don
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  )
}
