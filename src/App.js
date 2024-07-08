import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<ProductPage />} exact />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
