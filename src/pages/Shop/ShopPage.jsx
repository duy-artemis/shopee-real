import React from 'react'
import AllProduct from '../../components/AllProduct/AllProduct'
import withHeaderFooter from '../../hoc/withHeaderFooter'

const ShopPage = () => {
  return (
    <AllProduct />
  )
}

export default withHeaderFooter(ShopPage);
