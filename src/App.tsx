import React from "react";
import Home from "./pages/Home/Home";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Review from "./pages/Review/Review";
import ProductsGroup from "./pages/ProductGroup/ProductsGroup";
import Compare from "./pages/Compare/Compare";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-group" element={<ProductsGroup />} />
        <Route path="/product-info" element={<ProductInfo />} />
        <Route path="/review" element={<Review />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </div>
  );
};

export default App;
