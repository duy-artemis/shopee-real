import React from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import DaychuyenVang from "../../components/DaychuyenVang/DaychuyenVang";
import withAuth from "../../hoc/withAuth";

const Daychuyen = () => {
  const { id } = useParams();

  return <div>HEllo</div>;
};

export default withAuth(Daychuyen);
