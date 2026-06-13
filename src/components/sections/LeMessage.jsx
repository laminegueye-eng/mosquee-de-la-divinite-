import { MESSAGE_INTRO, PILLARS } from '../../data/content'

export default function LeMessage() {
  return (
    <section id="message" className="section bg-dk motif motif-flower">
      <div className="sw">
        <div className="ey ey-gold">Ce que Sangabi a transmis au monde</div>
        <h2 className="h2 h2-lt">Jub. Ragal Yàlla. <em>Sellal.</em></h2>
        <span className="subhead-rule" />
        <div className="prose">
          {MESSAGE_INTRO.map((p, i) => (
            <p className="bp bp-lt" key={i}>{p}</p>
          ))}
        </div>

        <div className="pillars">
          {PILLARS.map((p) => (
            <article className="pillar" key={p.name}>
              <span className="pillar-ar">{p.ar}</span>
              <h3 className="pillar-name">{p.name}</h3>
              <div className="pillar-sub">{p.subtitle}</div>
              <p className="pillar-note">{p.note}</p>
              {p.body.map((b, i) => (
                <p className="pillar-body" key={i}>{b}</p>
              ))}
            </article>
          ))}
        </div>

        <p className="message-end">Ce n’est pas un idéal qu’il a transmis. C’est un chemin.</p>
      </div>
    </section>
  )
}
