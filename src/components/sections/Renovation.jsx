import { RENOVATION_INTRO, RENOVATION_PROJECTS, CONTRIBUTE } from '../../data/content'

export default function Renovation() {
  return (
    <section id="renovation" className="section bg-dk motif motif-star">
      <div className="sw">
        <div className="ey ey-gold">Appel à la communauté · Appel au monde</div>
        <h2 className="h2 h2-lt">
          Elle a été bâtie par des mains.<br /><em>Elle sera restaurée par des mains.</em>
        </h2>
        <span className="subhead-rule" />
        <div className="prose">
          {RENOVATION_INTRO.map((p, i) => (
            <p className="bp bp-lt" key={i}>{p}</p>
          ))}
        </div>

        <div className="reno-projects">
          {RENOVATION_PROJECTS.map(([title, body]) => (
            <div className="reno-card" key={title}>
              <h3 className="reno-title">{title}</h3>
              <p className="reno-body">{body}</p>
            </div>
          ))}
        </div>

        <h3 className="reno-sub">Trois façons de contribuer</h3>
        <div className="contribute-grid">
          {CONTRIBUTE.map(([title, body, cta]) => (
            <div className="contrib-card" key={title}>
              <div className="contrib-title">{title}</div>
              <p className="contrib-body">{body}</p>
              <a href="#contact" className="btn-r contrib-cta">{cta}</a>
            </div>
          ))}
        </div>

        <p className="reno-note">
          Le plan architectural et le budget seront publiés ici dès leur finalisation. Chaque
          franc collecté sera tracé et rendu public.
        </p>

        <blockquote className="reno-quote">
          «&nbsp;Dieu qui m’a demandé de construire nous donnera les moyens nécessaires.&nbsp;»
          <cite>— Sangabi, 1992</cite>
        </blockquote>
      </div>
    </section>
  )
}
