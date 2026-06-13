import { useState } from 'react'
import { SOCIALS } from '../../data/content'
import { submitContactForm } from '../../services/contactService'

export default function Contact() {
  const [sent, setSent] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    await submitContactForm({
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    })
    setSent(true)
    form.reset()
  }

  return (
    <section id="contact" className="contact-section">
      <div className="sw">
        <div className="ey ey-gold">Contact</div>
        <h2 className="h2 h2-dk">Nous contacter.</h2>
        <span className="subhead-rule" />

        <div className="contact-grid">
          <div>
            <span className="col-label">Informations</span>
            <div className="info-rows">
              <div className="info-row">
                <span className="info-key">Adresse</span>
                <span className="info-val">Corniche-Ouest, Ouakam, Dakar, Sénégal</span>
              </div>
              <div className="info-row">
                <span className="info-key">Coordonnées</span>
                <span className="info-val">14°44′N · 17°31′W</span>
              </div>
              <div className="info-row">
                <span className="info-key">Itinéraire</span>
                <span className="info-val">
                  <a href="https://www.google.com/maps?q=Mosqu%C3%A9e+de+la+Divinit%C3%A9+Ouakam" target="_blank" rel="noreferrer">Google Maps →</a>
                </span>
              </div>
            </div>
            <span className="socials-label">Nous suivre</span>
            <div className="socials-row">
              {SOCIALS.map((s) => (
                <a key={s} href="#contact" className="soc-icon">{s}</a>
              ))}
            </div>
          </div>

          <div>
            <span className="col-label">Écrivez-nous</span>
            {sent ? (
              <p className="bp bp-dk">Merci, votre message a bien été envoyé.</p>
            ) : (
              <form className="cf-form" onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="Nom" required />
                <input name="email" type="email" placeholder="Email" required />
                <textarea name="message" placeholder="Message" required />
                <button type="submit">Envoyer</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
