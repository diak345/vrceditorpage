import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import NodeEditorPage from './pages/NodeEditorPage'
import PreviewEditorPage from './pages/PreviewEditorPage'
import RequirementsPage from './pages/RequirementsPage'
import WarningsPage from './pages/WarningsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="node-editor" element={<NodeEditorPage />} />
        <Route path="preview-editor" element={<PreviewEditorPage />} />
        <Route path="warnings" element={<WarningsPage />} />
        <Route path="requirements" element={<RequirementsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
