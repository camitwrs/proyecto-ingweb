import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { AuthProvider } from './context/AuthContext.jsx'

import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

// Componentes
import Header from './components/Header'
import Footer from './components/Footer'

import {HomePage, LoginPage, MainPageAdoptante, MainPagePublicador, RegisterPage} from './pages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/adoptar" element={<MainPageAdoptante />} />
          <Route path="/publicar" element={<MainPagePublicador />} />                  
        </Routes>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>

  </React.StrictMode>
)
