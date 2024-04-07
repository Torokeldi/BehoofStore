import React from "react";
import ProductCard from "../ProductCard/ProductCard.tsx"

const HomeCards:React.FC =() => {
  return (
    <div>
      {" "}
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
      <h6 className="slogan">
        Наша цель - создать фантастический <br /> сервис для всех потребителей
      </h6>
    </div>
  );
}

export default HomeCards;
