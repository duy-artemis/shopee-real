import React from "react";
import { Route, Routes } from "react-router-dom";
import Daychuyen from "../Daychuyen/Daychuyen";
import withAuth from "../../hoc/withAuth";
import DaychuyenVang from "../../components/DaychuyenVang/DaychuyenVang";

const TrangSuc = () => {
  return (
    <Routes>
      <Route path="/" Component={DaychuyenVang} />
      <Route path="/day-chuyen/:id" Component={Daychuyen} />
    </Routes>
  );
};

export default TrangSuc;
