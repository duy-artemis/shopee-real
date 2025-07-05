import React from "react";
import { Header } from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import Banner from "../../components/ui/Banner";
import Category from "../../components/ProductCategory/Category/Category";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Category />
      <Footer />
    </div>
  );
};

export default Homepage;
