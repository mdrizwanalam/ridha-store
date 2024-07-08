import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { BrowserRouter } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<ProductPage />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      <Footer />
    </>
  );
};

export default App;
