// accessory.jsx
import React from "react";
import "./Accessory.css";
import productImg from "../../assets/clock.png";
import like from "../../assets/heart.svg";
import analyze from "../../assets/chart.svg";

const Accessory: React.FC = () => {
  return (
    <>
      <div className="product-card">
        <div className="product-img">
          <img src={productImg} alt="" />
        </div>
        <div className="product-information">
          {" "}
          <p className="product-type">Умные часы</p>
          <h5 className="product-name">Apple iPhone 13 Pro Max 256 ГБ серый</h5>
          <div className="product-card-bottom">
            <div className="price-box">
              <div style={{display: 'flex', flexDirection: 'row', gap: '7px'}}>
                <p style={{color: '#7e8794'}}>цена</p>
                <p style={{color: "lime"}}>&#9660; 13%</p>
              </div>
              <h1>114 099 ₽</h1>
            </div>
            <div className="icon-box">
              <button>
                <img src={like} alt="" />
              </button>
              <button>
                <img src={analyze} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessory;
