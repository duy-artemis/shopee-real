import React from 'react'
import ShopPage from '../../pages/Shop/ShopPage'
import ProductCategory from '../../components/ProductCategory/ProductCategory'
import ProductDetail from '../../pages/ProductDetail/ProductDetail'
import { Route, Routes } from 'react-router-dom'

const ShopRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' Component={ShopPage}></Route>
            <Route path="/:id" Component={ProductCategory}></Route>
            <Route path="/:id/:id" Component={ProductDetail}></Route>
        </Routes>
    </>
  )
}

export default ShopRoutes