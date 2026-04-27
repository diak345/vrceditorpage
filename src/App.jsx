import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import CapabilitiesPage from './pages/CapabilitiesPage'
import CautionPage from './pages/CautionPage'
import FeaturesPage from './pages/FeaturesPage'
import HomePage from './pages/HomePage'
import StepsPage from './pages/StepsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="capabilities" element={<CapabilitiesPage />} />
        <Route path="steps" element={<StepsPage />} />
        <Route path="caution" element={<CautionPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
