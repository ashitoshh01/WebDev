import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import userCard from './Component/userCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <userCard/>
  </StrictMode>,
)
