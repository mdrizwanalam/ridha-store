import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./components/Product";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<ProductPage />} exact />
        </Routes>
      </Router>
    </>
  );
};

export default App;
