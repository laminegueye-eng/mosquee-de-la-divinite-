import { createContext, useContext, useState } from 'react'

// Mémorise la version de hero choisie (v1 = vidéo, v2 = image fond blanc).
const HeroContext = createContext(null)

export function HeroProvider({ children }) {
  const [version, setVersion] = useState('v1')
  return (
    <HeroContext.Provider value={{ version, setVersion }}>
      {children}
    </HeroContext.Provider>
  )
}

export function useHero() {
  const ctx = useContext(HeroContext)
  if (!ctx) throw new Error('useHero doit être utilisé dans un HeroProvider')
  return ctx
}
