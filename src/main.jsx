import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NGOWebsite from './components/NgoWebsite.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NGOWebsite />
  </StrictMode>,
)
