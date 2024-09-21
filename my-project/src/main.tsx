import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'


createRoot(document.getElementById('pogi ako')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)