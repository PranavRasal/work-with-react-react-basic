import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Print from './assets/function.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Print />
  </StrictMode>,
)
