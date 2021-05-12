import 'bootstrap/dist/css/bootstrap.min.css'
import foto from '../../assets/imgs/foto.jpg'
import './Logo.css'
import React from 'react'

/*Definindo que todos os componentes serão funcionais*/ 
export default props => 
    <aside className="logo w-100" id="home">
        <div className="row align-items-center h-100 justify-content-center">
            <div className="col-lg-9 text-center">
                <h2 className="text-uppercase text-white">Eu sou Rodrigo Costa</h2>
                <span className="d-block">Front-End Developer</span>
                <span className="d-block">35 anos, Empreendedor, pet lover, profissional no Fifa nas horas vagas</span>
                <a href="#" className="page-scroll btn box-shadow-wide btn-base-color btn-large m-0 mt-4">Venha me conhecer</a>
            </div>
        </div>
    </aside> 