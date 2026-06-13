// Service de contact — point d'entrée pour l'envoi du formulaire.
// Pour l'instant, simulation locale ; à brancher plus tard sur une vraie API.

const API_URL = '/api/contact'

export async function submitContactForm(data) {
  // TODO: remplacer par un vrai appel réseau vers le backend
  // const res = await fetch(API_URL, { method: 'POST', body: JSON.stringify(data) })
  // return res.json()
  console.log('Formulaire de contact (simulation) :', data, API_URL)
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ok: true }), 600)
  })
}
