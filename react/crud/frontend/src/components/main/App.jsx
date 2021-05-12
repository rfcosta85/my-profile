import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'

import Logo from '../template/Logo'
import Nav from '../template/Nav'
import Main from '../template/Main'
import Footer from '../template/Footer'

/* Componentes funcionais (sem estado) */

export default props => 
    <div className="app container-fluid">
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>