import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Theme CSS (from original assets)
import './assets/css/spacing.css'
import './assets/css/animate.css'
import './assets/css/font-awesome-pro.css'
import './assets/css/main.css'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
