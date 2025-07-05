import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';
import { fetchFashion, fetchMobile } from '../../api/api';
import { Spin } from 'antd';
import withHeaderFooter from '../../hoc/withHeaderFooter';


const ProductCategory = () => {
  const param = useParams();
  const [data, setData] = useState();
  const paramCheked = [
    'fashion', 
    'mobile-tablet'
  ]
  if (!paramCheked.includes(param.id))  {
    return (
      <Navigate to= "/404"/>
    )
  }

  useEffect(()=>{
    setTimeout(()=>{
      if (param.id === 'fashion') {
        fetchFashion(setData);
      }
      if (param.id === 'mobile-tablet') {
        fetchMobile(setData);
      }
    }, 1000)
  }, []);
  
  return (
    <>
      {data ? <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 py-4">
        {data.map((item)=>{
          return (
          <Link
            state={item}
            to={`/shop/${param.id}/${item.name}`}
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