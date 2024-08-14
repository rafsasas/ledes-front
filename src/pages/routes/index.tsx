import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/index";
import Register from "../Register";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
