import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

// Componentes
import Header from './components/Header'
import Footer from './components/Footer'

import {HomePage, LoginPage, MainPageAdoptante, MainPagePublicador, RegisterPage} from './pages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

      <Header/>
      
      <Routes>

        <Route path='/' element={<HomePage />}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sesion1" element={<MainPageAdoptante />} />
        <Route path="/sesion2" element={<MainPagePublicador />} />
                                      
      </Routes>

      <Footer/>

    </BrowserRouter>

  </React.StrictMode>
)
