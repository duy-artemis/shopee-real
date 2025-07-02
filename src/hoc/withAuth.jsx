import React from "react";
import { Navigate } from "react-router-dom";

const withAuth = (Component) => {
  function InnerComponent() {
    const token = localStorage.getItem("token") === "AnhPhongDepTrai";
    if (!token) return <Navigate to="/login" />;
    return <Component />;
  }
  return InnerComponent;
};

export default withAuth;
