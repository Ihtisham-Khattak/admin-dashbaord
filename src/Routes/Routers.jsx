import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Booking from '../Pages/Booking'
import Dashboard from '../Pages/Dashboard'
import SellCar from '../Pages/SellCar'
import Setting from '../Pages/Setting'


const Routers = () => {
  return (

    
        <Routes>
            <Route path='/' element={<Navigate to="/dashboard" element={<Dashboard />} />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path='/booking' element={ <Booking /> }></Route>
            <Route path='/sellcar' element={ <SellCar /> }></Route>
            <Route path='/setting' element={ <Setting /> }></Route>
        </Routes>
   
  )
}

export default Routers