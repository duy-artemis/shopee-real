import React from "react";
import { Navigate } from "react-router-dom";
import authStore from "../stores/auth/authStore";

const withAuth = (Component) => {
  function InnerComponent() {
    const { user } = authStore();
    console.log(user);
    if (!user?.access_token) return <Navigate to="/login" />;
    return <Component />;
  }
  return InnerComponent;
};

export default withAuth;
