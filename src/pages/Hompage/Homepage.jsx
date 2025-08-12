import React, { useEffect } from "react";
import { Header } from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import Banner from "../../components/ui/Banner";
import Category from "../../components/ProductCategory/Category/Category";
import withAuth from "../../hoc/withAuth";
import productApi from "../../services/apis/product.api";
import axios from "axios";
import AllProduct from "../../components/AllProduct/AllProduct";
import authStore from "../../stores/auth/authStore";

const Homepage = () => {
  const {user} = authStore();
  console.log(user);
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
