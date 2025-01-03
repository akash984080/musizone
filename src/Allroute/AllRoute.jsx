import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Cardlist from '../components/Cardlist'
import Cart from '../Pages/Cart'
export const AllRoute = () => {
  return (
   <Routes>
    <Route  path='/' element={<Cardlist/>} />
    <Route  path='/cart' element={<Cart/>} />
   </Routes>
  )
}

