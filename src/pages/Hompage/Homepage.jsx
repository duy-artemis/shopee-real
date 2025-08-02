import React, { useEffect } from "react";
import { Header } from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import Banner from "../../components/ui/Banner";
import Category from "../../components/ProductCategory/Category/Category";
import withAuth from "../../hoc/withAuth";
import productApi from "../../services/apis/product.api";
import axios from "axios";
import AllProduct from "../../components/AllProduct/AllProduct";

const Homepage = () => {

  return (
    <div>
      <Header />
      <Banner />
      <Category />
      <AllProduct />
      <Footer />
    </div>
  );
};

export default withAuth(Homepage);
