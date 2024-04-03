import React from "react";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import phone from "../../assets/phone.svg";
import laptop from "../../assets/laptop.svg";
import ipad from "../../assets/iPad.png";
import clock from "../../assets/clock.png";
import gamepad from "../../assets/gamepad.png";
import earphone from "../../assets/earphone.png";
import portable from "../../assets/portable.png";
import iphone from "../../assets/iphone.png";

import "./Home.css";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <section>
            <div className="categories">
              <div className="container">
                <div className="categories-content">
                  <h1>Лучшие выборы</h1>
                  <div className="categories__s">
                    <div className="accessory">
                      <img src={phone} alt="" />
                      <h3>Смартфоны</h3>
                    </div>
                    <div className="accessory">
                      <img src={laptop} alt="" />
                      <h3>Ноутбуки</h3>
                    </div>
                    <div className="accessory">
                      <img src={ipad} alt="" />
                      <h3>Планшеты</h3>
                    </div>
                    <div className="accessory">
                      <img src={clock} alt="" />
                      <h3>Умные часы</h3>
                    </div>
                    <div className="accessory">
                      <img src={gamepad} alt="" />
                      <h3>Игровые приставки</h3>
                    </div>
                    <div className="accessory">
                      <img src={earphone} alt="" />
                      <h3>Наушники</h3>
                    </div>
                    <div className="accessory">
                      <img src={portable} alt="" />
                      <h3>
                        Портативные <br />
                        колонки
                      </h3>
                    </div>
                    <div className="accessory">
                      <img src={iphone} alt="" />
                      <h3>Аксесуары</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="cards-content">
            <div className="card-item">
              <ProductCard />
            </div>
            <div className="card-item">
              <ProductCard />
            </div>
            <div className="card-item">
              <ProductCard />
            </div>
            <div className="card-item">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
