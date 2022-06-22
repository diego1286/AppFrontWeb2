import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Estado from '../components/estado/Estado'
import BarraNav from '../components/iu/BarraNav'
import TipoEquipo from '../components/tipoEquipo/TipoEquipo'
import Marca from '../components/marca/Marca'

import Inventario from '../components/inventario/Inventario'

// se crean las diferentes ruras para la navegadion de la 

export default function MainRouter() {
  return (
    <BrowserRouter> 
    <BarraNav/>
    <Routes>
      <Route  path='/'  element={<Estado/>}/> 
      <Route  path='/marcas' element={<Marca/>} />
      <Route  path='/tipoequipo' element={<TipoEquipo/>} />
      <Route  path='/inventarios' element={<Inventario/>} />


    </Routes>

    </BrowserRouter>
    
  )
}
