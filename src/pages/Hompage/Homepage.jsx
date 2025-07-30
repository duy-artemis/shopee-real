import React, { useEffect } from "react";
import { Header } from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import Banner from "../../components/ui/Banner";
import Category from "../../components/ProductCategory/Category/Category";
import withAuth from "../../hoc/withAuth";
import productApi from "../../services/apis/product.api";
import axios from "axios";

const Homepage = () => {
  // useEffect(()=>{
  //   fetch('http://localhost:5001/api/test')
  //     .then((res)=>{
  //       return res.json()
  //     })
  //     .then((data)=>{
  //       console.log(data)
  //     })
  //     .catch((error) => {
  //       console.error('Fetch error:', error)
  //     })
  // }, [])
  // const productList = {
  //   page: '',
  //   limit: '',
  //   sort_by: '',
  //   order: '',
  //   exclude: '',
  //   rating_filter: '',
  //   price_max: '',
  //   price_min: '',
  //   name: '',
  //   category: ''
  // }


  return (
    <div>
      <Header />
      <Banner />
      <Category />
      <Footer />
    </div>
  );
};

export default withAuth(Homepage);
