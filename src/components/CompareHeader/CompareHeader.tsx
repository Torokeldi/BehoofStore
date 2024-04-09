import React from "react";
import { Link } from "react-router-dom";
import trash from "../../assets/vuesax_linear_trash.svg";

const CompareHeader: React.FC = () => {
  return (
    <div>
      {" "}
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
    </div>
  );
};

export default CompareHeader;
