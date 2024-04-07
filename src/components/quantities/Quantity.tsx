import React from "react";
import "../../pages/Home/Home.css";

const Quantity:React.FC =() =>{
  return (
    <div>
      {" "}
      <div className="qualities-content">
        <button className="quality">Дизайн</button>
        <button className="quality">Портативность</button>
        <button className="quality">Камера</button>
        <button className="quality">Ответ</button>
        <button className="quality">Дисплей</button>
        <button className="quality">Батарея</button>
      </div>
    </div>
  );
}

export default Quantity;
