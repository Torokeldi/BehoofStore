import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ProductsGroup from "./pages/ProductGroup/ProductsGroup";
import Compare from "./components/Compare/Compare";
import Review from "./pages/Review/Review";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-group" element={<ProductsGroup />} />
          <Route path="/product-info" element={<ProductInfo />} />
          <Route path="/review" element={<Review />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
