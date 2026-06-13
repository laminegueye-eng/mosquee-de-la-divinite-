import logo from '../../assets/Logo.png'
import { useLanguage } from '../../context/LanguageContext'
import { cx } from '../../utils/helpers'

export default function Navbar() {
  const { lang, setLang } = useLanguage()

  return (
    <nav>
      <a href="#hero" className="nav-logo">
        <img src={logo} alt="Mosquée de la Divinité" className="nav-logo-img" />
        <span className="nav-logo-txt">
          <span className="nav-logo-main">Mosquée de la Divinité</span>
          <span className="nav-logo-sub">Masdjidou Rabbani · Ouakam</span>
        </span>
      </a>

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
    </nav>
  )
}
