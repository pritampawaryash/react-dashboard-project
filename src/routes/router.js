import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Dashboard/Home/home";
import Login from "../components/Pages/Login/login";
import Signup from "../components/Pages/SignUp/signUp";
import ProtectedRoute from "./protectedRoute";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default Router;
