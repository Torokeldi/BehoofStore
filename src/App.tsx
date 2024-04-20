import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Review from "./pages/Review/Review";
import Home from "./pages/Home/Home";
import Compare from "./pages/Compare/Compare";
import Login from "./pages/Login/Login";
import Dropdown from "./components/Dropdown/Dropdown";
import ProductApp from "./pages/ProductApp/ProduckApp";
import Search from "./components/search/Search";

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-app" element={<ProductApp />} />
          <Route path="/product-info" element={<ProductInfo />} />
          <Route path="/review" element={<Review />} />
          <Route path="/login" element={<Login />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/search" element={<Search />} />
        </Routes>
    </Router>
  );
};

export default App;
