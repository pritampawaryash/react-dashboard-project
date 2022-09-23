import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../components/Dashboard/Home/home";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("Login");

    if (!login) {
      navigate("/");
    }
  });

  return (
    <div>
      <Home></Home>
    </div>
  );
};

export default ProtectedRoute;
