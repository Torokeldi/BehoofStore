import React from "react";
import "./search.css";
import phone from "../../assets/phone.svg";
import Vector from "../../assets/Vector.svg";
import chart from "../../assets/chart.svg";
import like from "../../assets/heart.svg";
import iPhones from "../../assets/iphone.png";
import find from "../../assets/vuesax_outline_search-normal.svg";
import X from "../../assets/vuesax_outline_add.svg";
import iPhone from "../../assets/Frame 2371.jpeg";
import Header from '../Header/Header';

const Search: React.FC = () => {
  return (
    <div className="Container__Search">
      <Header/>
      <div className="content">
        <div className="Smartphones">
          <div className="Smartphones-item">
            <img src={phone} alt="" />
            <div className="Smartphone-info">
              <p className="phone-type">Смартфоны</p>
              <h5 className="phone-name">
                Apple iPhone 13 Pro Max 256 ГБ <br /> серый
              </h5>
              <div className="main-block">
                <div className="price">
                  <div className="interest-iPhone">
                    <p className="iPhone-price">Цена</p>
                    <img src={Vector} alt="" />
                    <p className="percent">13%</p>
                  </div>
                  <p className="Iphones-sum">114 099 ₽</p>
                </div>
                <div className="iPhones-estimate">
                  <img className="like" src={like} alt="" />
                  <img src={chart} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="Smartphones-itemTwo">
            <img src={iPhones} alt="" />
            <div className="Smartphone-info">
              <p className="phone-type">Смартфоны</p>
              <h5 className="phone-name">
                Apple iPhone 13 Pro Max 256 ГБ <br /> серый
              </h5>
              <div className="main-block">
                <div className="price">
                  <div className="interest-iPhone">
                    <p className="iPhone-price">Цена</p>
                    <img src={Vector} alt="" />
                    <p className="percent">13%</p>
                  </div>
                  <p className="Iphones-sum">114 099 ₽</p>
                </div>
                <div className="iPhones-estimate">
                  <img className="like" src={like} alt="" />
                  <img src={chart} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="Hero-Searchs">
            <div className="main-heroSearchs">
              <div className="iPod-text">
                <img src={find} alt="" />
                <p className="iPad-Pro">iPad Pro (2022) Wi-Fi 128 ГБ серый</p>
                <button className="iPod-btn">
                  <img src={X} alt="" />
                </button>
              </div>
              <hr />
              <div className="iPod-text">
                <img src={find} alt="" />
                <p className="iPad-Pro">iPad Pro (2022) Wi-Fi 128 ГБ серый</p>
                <button className="iPod-btn">
                  <img src={X} alt="" />
                </button>
              </div>
              <hr />
              <div className="iPod-text">
                <img src={find} alt="" />
                <p className="iPad-Pro">iPad Pro (2022) Wi-Fi 128 ГБ серый</p>
                <button className="iPod-btn">
                  <img src={X} alt="" />
                </button>
              </div>
              <hr />
              <div className="iPod-text">
                <img src={find} alt="" />
                <p className="iPad-Pro">iPad Pro (2022) Wi-Fi 128 ГБ серый</p>
                <button className="iPod-btn">
                  <img src={X} alt="" />
                </button>
              </div>
              <hr />
              <div className="iPod-text">
                <img src={find} alt="" />
                <p className="iPad-Pro">iPad Pro (2022) Wi-Fi 128 ГБ серый</p>
                <button className="iPod-btn">
                  <img src={X} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="search-bottom">
          <div className="section-review">
            <div className="main-info">
              <div className="main-aside">
                <h2 className="review-title">Обзоры</h2>
                <div className="aside-review">
                  <img src={iPhone} alt="" />
                  <div className="review-info">
                    <h3>Обзор устаревших смартфонов</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Rhoncus risus{" "}
                      <br /> viverra enim nunc.{" "}
                    </p>
                    <a href="#">Смотреть &nbsp;&nbsp; {">"} </a>
                  </div>
                </div>
                <div className="aside-review">
                  <img src={iPhone} alt="" />
                  <div className="review-info">
                    <h3>Обзор устаревших смартфонов</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Rhoncus risus{" "}
                      <br /> viverra enim nunc.{" "}
                    </p>
                    <a href="#">Смотреть &nbsp;&nbsp; {">"} </a>
                  </div>
                </div>
              </div>
              <div className="find-gadgets">
                <h2>Часто ищут</h2>
                <ul>
                  <li>Телевизор</li>
                  <li>iPhone 14</li>
                  <li>Планшет</li>
                  <li>Смартфоны</li>
                  <li>iPhone</li>
                    <a href="#">Смотреть все результаты &nbsp;&nbsp; {">"}</a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
