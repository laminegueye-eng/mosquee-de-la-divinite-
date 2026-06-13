import Hero from '../components/sections/Hero'
import Histoire from '../components/sections/Histoire'
import Construction from '../components/sections/Construction'
import Visiter from '../components/sections/Visiter'
import Exposition from '../components/sections/Exposition'
import Prier from '../components/sections/Prier'
import Evenements from '../components/sections/Evenements'
import LeMessage from '../components/sections/LeMessage'
import Communaute from '../components/sections/Communaute'
import Renovation from '../components/sections/Renovation'
import Boutique from '../components/sections/Boutique'
import Patrimoine from '../components/sections/Patrimoine'
import Contact from '../components/sections/Contact'

// Page d'accueil : assemble toutes les sections du site vitrine.
export default function Home() {
  return (
    <>
      <Hero />
      <Histoire />
      <Construction />
      <Visiter />
      <Exposition />
      <Prier />
      <Evenements />
      <LeMessage />
      <Communaute />
      <Renovation />
      <Boutique />
      <Patrimoine />
      <Contact />
    </>
  )
}
