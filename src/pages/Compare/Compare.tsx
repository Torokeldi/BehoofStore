import React from "react";
import Header from "../../components/Header/Header";
import Swiper from "../../components/Swiper/Swiper";
import CompareHeader from "../../components/CompareHeader/CompareHeader";
import './Compare.css';

const Compare: React.FC = () => {
  return (
    <>
      <div className="container">
        {" "}
        <Header />
        <div className="compare-content">
        <CompareHeader/>
        <Swiper/>
        </div>
      </div>
    </>
  );
};

export default Compare;
