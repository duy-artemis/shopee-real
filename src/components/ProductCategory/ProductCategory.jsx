import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';
import { fetchFashion, fetchMobile } from '../../api/api';
import { Spin } from 'antd';
import withHeaderFooter from '../../hoc/withHeaderFooter';
import productApi from '../../services/apis/product.api';
import { useProductStore } from '../../stores/shop/useProductStore';


const ProductCategory = () => {
  const param = useParams();
  let products = useProductStore(state => state.products);
  const setProduct = useProductStore (state => state.setProduct);

  console.log(products);
  const paramCheked = [
    'fashion', 
    'mobile-tablet'
  ]

  if (!paramCheked.includes(param.id))  {
    return (
      <Navigate to= "/404"/>
    )
  }

  let data = [];
  if (param.id === 'fashion') {
    data = products.filter((item)=>item.category.name === "Áo thun");
  }
  else {
    data = products.filter((item)=>item.category.name !== "Áo thun");
  }

  const loadProducts = async() => {
    if (data.length > 0) {
      return;
    }
    const response = await productApi.getAllProducts();
    let result = response.data.products;
    setProduct(result);
  }


  useEffect(()=>{
    setTimeout(()=>{
      loadProducts();
    }, 1000)
  }, []);

  
  return (
    <>
      {data.length > 0 ? <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 py-4">
        {data.map((item)=>{
          return (
          <Link
            state={item}
            to={`/shop/${param.id}/${item._id}`}
            key={item.id}
            className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 group cursor-pointer flex flex-col items-center p-4"
          >
            <div className="w-full h-32 flex items-center justify-center mb-3">
              <img
                src={item.image}
                alt={item.name}
                className="object-contain h-full max-w-full rounded-xl group-hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="text-base font-semibold mb-1 text-gray-800 line-clamp-2 text-center group-hover:text-pink-600 transition">
              {item.name}
            </h3>
            <div className="text-pink-600 font-bold text-lg mb-1">
              {item.price?.toLocaleString()}₫
            </div>
          </Link>
          )
        })}
      </div> : <div className="flex items-center justify-center h-32">
        <Spin size="large" />
      </div>}
    </>
  )
}

export default withHeaderFooter(ProductCategory);