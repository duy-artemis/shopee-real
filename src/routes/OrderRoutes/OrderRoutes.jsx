import React from 'react'
import OrderDashboard from '../../pages/OrderDashboard/OrderDashboard'
import { Route, Routes } from 'react-router-dom'

const OrderRoutes = () => {
  return (
    <Routes>
        <Route path='/' Component={OrderDashboard}></Route>
        <Route path="/:id" Component={OrderDashboard}></Route>
    </Routes>
  )
}

export default OrderRoutes