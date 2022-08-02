import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "../pages/Calculator";
import Main from "../pages/Main";
import Navbar from "../components/Navbar";

const BmiRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/calculate" element={<Calculator />} />
      </Routes>
    </Router>
  );
};

export default BmiRouter;
