import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import CoffesPorvider from './Provider/CoffesPorvider.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CoffesPorvider>
        <RouterProvider router={router} />
      </CoffesPorvider>
    </AuthProvider>
  </StrictMode>,
)
