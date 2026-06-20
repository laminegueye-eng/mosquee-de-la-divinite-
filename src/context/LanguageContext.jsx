import { createContext, useContext, useState } from 'react'

// Contexte de langue (FR par défaut) — alimente le sélecteur FR/EN du header.
const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('FR')

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook pratique pour consommer le contexte (colocalisé avec le Provider — pattern courant)
// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage doit être utilisé dans un LanguageProvider')
  }
  return ctx
}
