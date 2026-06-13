// Fonctions utilitaires réutilisables

// Année courante (utilisée dans le footer)
export const currentYear = () => new Date().getFullYear()

// Défilement fluide vers une ancre (#id)
export function scrollToAnchor(hash) {
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// Concatène des classes conditionnelles
export function cx(...classes) {
  return classes.filter(Boolean).join(' ')
}
