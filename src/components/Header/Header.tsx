import React from "react";
// import Logo from "../assets/behoof_logo.svg";
// import Vector from "../assets/Vector.svg";
// import Analyze from "../assets/chart.svg";
// import Like from "../assets/heart.svg";
// import User from "../assets/user.svg";
import "../Header/header.css"
import { Link } from "react-router-dom";

const Header:React.FC = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-content">
            {/* <img src={Logo} alt="" className="logo-img" /> */}
            <h1 className="logo-title">Behoof</h1>
            <p className="slogan">
              Лучшие цены <br /> в интернет-магазинах
            </p>
          </div>
          <div className="find-content">
            <button type="button" className="sort-filter-btn">
               Каталог товаров {/*<img src={Vector} alt="" className="vector" /> */}
            </button>
            <input
              type="search"
              name=""
              id=""
              className="findInput"
              placeholder="Поиск товаров"
            />
          </div>
          <div className="header_btns">
            <button type="button">
              {/* <img src={Like} className="header_btns-img" alt="" /> */}
            </button>
            <button type="button">
              {/* <img src={Analyze} className="header_btns-img" alt="" /> */}
            </button>
            <button type="button">
              {/* <img src={User} className="header_btns-img" alt="" /> */}
            </button>
          </div>
        </div>
          <Link to="/">Группа продуктов/ </Link>
          <Link to="/Review">Oбзор</Link>
      </div>
    </div>
  );
};

export default Header;
