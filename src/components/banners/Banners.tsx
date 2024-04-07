import React from "react";
import "../../pages/Home/Home.css";

const Banners:React.FC =() => {
  return (
    <div>
      {" "}
      <div className="banners">
        <div className="first-banner">
          <h1>
            <strong style={{ color: "#FF4D4D" }}>1.8 млн</strong> товаров в
            <strong style={{ color: "#FF4D4D" }}>2272</strong> магазинах <br />{" "}
            найди, сравни, выберай!
          </h1>
          <button>Перейти к категориям {" >"}</button>
        </div>
        <div className="second-banner">
          <h1>
            <strong style={{ color: "#FF4D4D" }}>Топ-10</strong> смартфонов{" "}
            <br />
            2023 года
          </h1>
          <button>Смотреть {" >"}</button>
        </div>
      </div>
    </div>
  );
}

export default Banners;
