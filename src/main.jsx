import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AdminContextContainer from './context/adminLayoutContext.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <AdminContextContainer>

    <App />
  </AdminContextContainer>
  </BrowserRouter>

)
