import React from "react";
import "./Dropdown.css";
import Reclame from "../../assets/reclame.png";
import Header from "../Header/Header";

const Dropdown: React.FC = () => {

  return (
    <div className="dropdown-container">
      <Header />
      <div className="dropdown-content">
        <div className="dropdown-box">
          <h1>Каталог товаров</h1>
          <ul className="dropdown-list">
            <li>Смартфоны</li>
            <li>Ноутбуки</li>
            <li>Планшеты</li>
            <li>Умные часы</li>
            <li>Игровые приставки</li>
            <li>Наушники</li>
            <li>Портативные колонки</li>
            <li>Мониторы</li>
            <li>Принтеры и сканеры</li>
            <li>Планшеты и электронные книги</li>
            <li>Корпуса и блоки питания</li>
            <li>Аксессуары</li>
          </ul>
        </div>
        <div className="dropdown-box">
          <h1>Смартфоны</h1>
          <ul className="dropdown-list">
            <li>Все смартфоны</li>
            <li>Новинки</li>
            <li>Недорогие смартфоны</li>
            <li>Смартфоны Android</li>
            <li>Премиум смартфоны</li>
            <li>Кнопочные телефоны</li>
            <li>Apple</li>
            <li>Xiaomi</li>
            <li>Samsung</li>
            <li>HONOR</li>
            <li>Realme</li>
            <li>Tecno</li>
            <li>Infinix</li>
            <li>Poco</li>
          </ul>
        </div>
        <div className="dropdown-box">
          <h1>Apple</h1>
          <ul className="dropdown-list">
            <li>Все смартфоны Apple</li>
            <li>iPhone 14 pro max</li>
            <li>iPhone 14 pro</li>
            <li>iPhone 14 plus</li>
            <li>iPhone 14 </li>
            <li>iPhone 13 pro max</li>
            <li>iPhone 13 mini</li>
            <li>iPhone 12 pro</li>
            <li>iPhone 12</li>
            <li>iPhone 11</li>
          </ul>
        </div>
        <div className="img-box">
          <img src={Reclame} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
