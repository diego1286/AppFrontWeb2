import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BarraNav() {
  return (

    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Inventarios</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <NavLink 
        className="nav-item nav-link"
        to='/'
        > 
        Estados
        </NavLink>
        <NavLink 
        className="nav-item nav-link"
        to='/marcas'
        > 
        Marcas
        </NavLink>
        <NavLink 
        className="nav-item nav-link"
        to='/tipoequipo'
        > 
        Tipo Equipo
        </NavLink>
        <NavLink 
        className="nav-item nav-link"
        to='/inventarios'
        > 
        Inventarios
        </NavLink>
        
        
      </ul>
    
    </div>
  </div>
</nav>
    
  )
}
