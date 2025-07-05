import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductCategory from '../../components/ProductCategory/ProductCategory'
import AllProduct from '../../components/AllProduct/AllProduct'
import ProductDetail from '../ProductDetail/ProductDetail'

const Shop = () => {
  return (
    <>
        <Routes>
            <Route path='/' Component={AllProduct}></Route>
            <Route path="/:id" Component={ProductCategory}></Route>
            <Route path="/:id/:id" Component={ProductDetail}></Route>
        </Routes>
    </>
  )
}

export default Shop