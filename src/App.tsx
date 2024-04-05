import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Compare from "./components/Compare/Compare";
import Review from "./pages/Review/Review";
import ProductsGroup from "./pages/ProductGroup/ProductsGroup";
import Home from "./pages/Home/Home";

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
