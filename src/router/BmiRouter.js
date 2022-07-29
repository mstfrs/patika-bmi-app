import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calcualator from "../pages/Calcualator";
import Main from "../pages/Main";
import Navbar from "../components/Navbar";

const BmiRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/calculate" element={<Calcualator />} />
      </Routes>
    </Router>
  );
};

export default BmiRouter;
