import React from "react";
import Header from "../../components/Header/Header";
import trash from "../../assets/vuesax_linear_trash.svg";
import like from "../../assets/heart.svg";
import phone from "../../assets/phone.svg";
import "./Compare.css";
import star from "../../assets/Star.svg";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Compare: React.FC = () => {
  return (
    <>
      <div className="container">
        {" "}
        <Header />
        <div className="compare-content">
          <div className="compare-route">
            <Link to="/">Главная</Link>
            {"/"}
            <span>Сравнение</span>
          </div>
          <div className="compare-header">
            <h1 className="compare-head-title">Сравнение товаров</h1>
            <button className="compare-head-btn">
              <img src={trash} alt="" />
              Удалить все списки
            </button>
          </div>
          <div className="head-btns">
            <button>Смартфоны</button>
            <button>Ноутбуки</button>
          </div>
          <div className="swiper">
            <div className="swiper-head">
              <div className="flex-row">
                <div className="product-container">
                  <img src={phone} className="phone-jpg" alt="" />

                  <div className="product-details">
                    <button type="button" className="trash-btn">
                      <img src={trash} alt="" />
                    </button>
                    <div>
                      <p className="type-product">Смартфоны</p>
                      <h1 className="title-product">
                        Apple iPhone 13 Pro Max 256 ГБ серый
                      </h1>
                      <p className="price-txt">Цена</p>
                      <h1 className="compare-price">114 099 ₽</h1>
                      <button type="button" className="like-btn">
                        <img src={like} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-container">
                  <img src={phone} className="phone-jpg" alt="" />

                  <div className="product-details">
                    <button type="button" className="trash-btn">
                      <img src={trash} alt="" />
                    </button>
                    <div>
                      <p className="type-product">Смартфоны</p>
                      <h1 className="title-product">
                        Apple iPhone 13 Pro Max 256 ГБ серый
                      </h1>
                      <p className="price-txt">Цена</p>
                      <h1 className="compare-price">114 099 ₽</h1>
                      <button type="button" className="like-btn">
                        <img src={like} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-container">
                  <img src={phone} className="phone-jpg" alt="" />

                  <div className="product-details">
                    <button type="button" className="trash-btn">
                      <img src={trash} alt="" />
                    </button>
                    <div>
                      <p className="type-product">Смартфоны</p>
                      <h1 className="title-product">
                        Apple iPhone 13 Pro Max 256 ГБ серый
                      </h1>
                      <p className="price-txt">Цена</p>
                      <h1 className="compare-price">114 099 ₽</h1>
                      <button type="button" className="like-btn">
                        <img src={like} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-container">
                  <img src={phone} className="phone-jpg" alt="" />

                  <div className="product-details">
                    <button type="button" className="trash-btn">
                      <img src={trash} alt="" />
                    </button>
                    <div>
                      <p className="type-product">Смартфоны</p>
                      <h1 className="title-product">
                        Apple iPhone 13 Pro Max 256 ГБ серый
                      </h1>
                      <p className="price-txt">Цена</p>
                      <h1 className="compare-price">114 099 ₽</h1>
                      <button type="button" className="like-btn">
                        <img src={like} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="swiper-title">Сравнение товаров</h1>
              <div className="flex-column">
                <h6 className="flex-title">Рейтинг</h6>
                <div className="flex-row">
                  <div className="stars-div">
                    <img alt="" className="star-rating" src={star} />
                    <img alt="" className="star-rating" src={star} />
                    <img alt="" className="star-rating" src={star} />
                    <img alt="" className="star-rating" src={star} />
                    <img alt="" className="star-rating" src={star} />
                  </div>
                  <div className="stars-div">
                    <img alt="" className="star-rating" src={star} />
                    <img alt="" className="star-rating" src={star} />
                    <img alt="" className="star-rating" src={star} />
                    <img alt="" className="star-rating" src={star} />
                    <img alt="" className="star-rating" src={star} />
                  </div>
                  <div className="stars-div">
                    <img alt="" className="star-rating" src={star} />
                    <img alt="" className="star-rating" src={star} />
                    <img alt="" className="star-rating" src={star} />
                    <img alt="" className="star-rating" src={star} />
                    <img alt="" className="star-rating" src={star} />
                  </div>
                  <div className="stars-div">
                    <img alt="" className="star-rating" src={star} />
                    <img alt="" className="star-rating" src={star} />
                    <img alt="" className="star-rating" src={star} />
                    <img alt="" className="star-rating" src={star} />
                    <img alt="" className="star-rating" src={star} />
                  </div>
                </div>
                <h6 className="flex-title">Модель</h6>
                <div className="flex-row">
                  <p style={{ color: "gray" }}>Apple iPhone 13 Pro Max</p>
                  <p style={{ color: "gray" }}>Apple iPhone 13 Pro</p>
                  <p style={{ color: "gray" }}>Apple iPhone 13</p>
                  <p style={{ color: "gray" }}>Apple iPhone 12</p>
                </div>
                <h6 className="flex-title">Год релиза</h6>
                <div className="flex-row">
                  <p style={{ color: "gray" }}>2021</p>
                  <p style={{ color: "gray" }}>2021</p>
                  <p style={{ color: "gray" }}>2021</p>
                  <p style={{ color: "gray" }}>2021</p>
                </div>
                <h6 className="flex-title">Количество ядер</h6>
                <div className="flex-row">
                  <p style={{ color: "lime" }}>12</p>
                  <p style={{ color: "gray" }}>8</p>
                  <p style={{ color: "gray" }}>6</p>
                  <p style={{ color: "gray" }}>7</p>
                </div>
                <h6 className="flex-title">Поддержка сетей 4G (LTE)</h6>
                <div className="flex-row">
                  <p style={{ color: "lime" }}>&#10003;</p>
                  <p style={{ color: "lime" }}>&#10003;</p>
                  <p style={{ color: "purple" }}>&#10007;</p>
                  <p style={{ color: "lime" }}>&#10003;</p>
                </div>
                <h6 className="flex-title">Объем встроенной памяти</h6>
                <div className="flex-row">
                  <p style={{ color: "green" }}>128 ГБ</p>
                  <p style={{ color: "gray" }}>64 ГБ</p>
                  <p style={{ color: "gray" }}>64 ГБ</p>
                  <p style={{ color: "gray" }}>64 ГБ</p>
                </div>
                <h6 className="flex-title">Модель</h6>
                <div className="flex-row">
                  <p style={{ color: "gray" }}>Apple iPhone 13 Pro Max</p>
                  <p style={{ color: "gray" }}>Apple iPhone 13 Pro</p>
                  <p style={{ color: "gray" }}>Apple iPhone 13</p>
                  <p style={{ color: "gray" }}>Apple iPhone 12</p>
                </div>
                <h6 className="flex-title">Год релиза</h6>
                <div className="flex-row">
                  <p style={{ color: "gray" }}>2021</p>
                  <p style={{ color: "gray" }}>2021</p>
                  <p style={{ color: "gray" }}>2021</p>
                  <p style={{ color: "gray" }}>2021</p>
                </div>
                <h6 className="flex-title">Количество ядер</h6>
                <div className="flex-row">
                  <p style={{ color: "lime" }}>12</p>
                  <p style={{ color: "gray" }}>8</p>
                  <p style={{ color: "gray" }}>6</p>
                  <p style={{ color: "gray" }}>7</p>
                </div>
                <h6 className="flex-title">Поддержка сетей 4G (LTE)</h6>
                <div className="flex-row">
                  <p style={{ color: "lime" }}>&#10003;</p>
                  <p style={{ color: "lime" }}>&#10003;</p>
                  <p style={{ color: "purple" }}>&#10007;</p>
                  <p style={{ color: "lime" }}>&#10003;</p>
                </div>
                <h6 className="flex-title">Объем встроенной памяти</h6>
                <div className="flex-row">
                  <p style={{ color: "green" }}>128 ГБ</p>
                  <p style={{ color: "gray" }}>64 ГБ</p>
                  <p style={{ color: "gray" }}>64 ГБ</p>
                  <p style={{ color: "gray" }}>64 ГБ</p>
                </div>
                <div className="footer">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compare;
