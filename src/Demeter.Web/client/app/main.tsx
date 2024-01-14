import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import App_Shop from './App_Shop.tsx'
import App_admin from './App_admin.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App/> */}
      {/* <App_Shop/> */}
      <App_admin/>
    </BrowserRouter>
  </React.StrictMode>,
)
