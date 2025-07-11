import React, { useEffect } from "react";
import { Header } from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import Banner from "../../components/ui/Banner";
import Category from "../../components/ProductCategory/Category/Category";
import withAuth from "../../hoc/withAuth";

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
  console.log("Hello");
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
