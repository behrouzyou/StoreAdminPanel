import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AdminContextContainer from './context/adminLayoutContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AdminContextContainer>

    <App />
  </AdminContextContainer>
  </StrictMode>,
)
