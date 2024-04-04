// accessory.jsx
import React from "react";
import "./Accessory.css";
import productImg from "../../assets/clock.png";
import like from '../../assets/heart.svg'
import analyze from '../../assets/chart.svg'

const Accessory: React.FC = () => {
  return (
    <div className="product-block">
      <img className="product-image" src={productImg} alt="Product" />
      <div className="product-info">
        <p className="product-type">Умные часы</p>
        <p className="product-name">Apple iPhone 13 Pro Max 256 ГБ серый</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: '20px' }}>
        <div className="product-price">
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <p className="price-txt">Цена &nbsp; </p>
            <p className="price-discount">&nbsp; 13%</p>
          </div>
          <p className="price">114 099 ₽</p>
        </div>
        <div className="product-icons">
          <div className="icon-wrapper">
            <img
              className="icon"
              src={like}
              alt="Icon"
            />
          </div>
        </div>
        <div className="icon-wrapper">
          <img
            className="icon"
            src={analyze}
            alt="Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Accessory;
