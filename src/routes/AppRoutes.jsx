import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import RenovationPage from '../pages/Renovation'
import NotFound from '../pages/NotFound'

// Déclaration centralisée des routes de l'application.
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/renovation" element={<RenovationPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
