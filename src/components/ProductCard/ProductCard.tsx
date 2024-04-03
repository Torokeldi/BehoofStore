import React from "react";
import Like from "../../assets/heart.svg";
import Analyze from "../../assets/chart.svg";
import phoneInfo from "../../assets/phone.svg";
import "../ProductCard/ProductCard.css";

function ProductCard() {
  return (
    <div>
      <div className="product-content">
        <div className="product_header">
          <div className="product-name">
            <p>Портативные колонки</p>
            <h1>Apple iPhone 13 Pro Max 256 ГБ серый</h1>
          </div>
          <div className="product-icons">
            <button>
              <img src={Like} alt="" />
            </button>
            <button>
              <img src={Analyze} alt="" />
            </button>
          </div>
        </div>
        <div className="phone-info">
          <img src={phoneInfo} alt="" className="product-img" />
          <div className="phone-characters">
            <div>
              <p className="product-title">Дизайн</p>
              <div className="lines">
                {" "}
                <hr /> <hr /> <hr /> <hr /> <hr />{" "}
              </div>
            </div>
            <div>
              <p className="product-title">Батарея</p>
              <div className="lines">
                {" "}
                <hr /> <hr /> <hr /> <hr /> <hr />{" "}
              </div>
            </div>
            <div>
              <p className="product-title">Дисплей</p>
              <div className="lines">
                {" "}
                <hr /> <hr /> <hr /> <hr /> <hr />{" "}
              </div>
            </div>
            <div>
              <p className="product-title">Камера</p>
              <div className="lines">
                {" "}
                <hr /> <hr /> <hr /> <hr /> <hr />{" "}
              </div>
            </div>
            <div>
              <p className="product-title">Ответ</p>
              <div className="lines">
                {" "}
                <hr /> <hr /> <hr /> <hr /> <hr />{" "}
              </div>
            </div>
            <div>
              <p className="product-title">Портативность</p>
              <div className="lines">
                {" "}
                <hr /> <hr /> <hr /> <hr /> <hr />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
