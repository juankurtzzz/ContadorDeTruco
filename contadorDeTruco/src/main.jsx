import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContadorTruco from './pages/contadorDeTruco';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContadorTruco />
  </StrictMode>,
)
