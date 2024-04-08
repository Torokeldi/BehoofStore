import "../../pages/Review/Review.css";
import phone from "../../assets/phone.svg";
import laptop from "../../assets/laptop.svg";
import ipad from "../../assets/iPad.png";
import clock from "../../assets/clock.png";
import gamepad from "../../assets/gamepad.png";
import earphone from "../../assets/earphone.png";
import portable from "../../assets/portable.png";
import iphone from "../../assets/iphone.png";

const Categories: React.FC = () => {
  return (
    <>
      <section>
        <div className="categories-content">
          <h1 className="categories-title">Категории обзоров</h1>
          <div className="categories__s">
            <div className="accessory-block">
              <img src={phone} alt="" />
              <h3>Смартфоны</h3>
            </div>
            <div className="accessory-block">
              <img src={laptop} alt="" />
              <h3>Ноутбуки</h3>
            </div>
            <div className="accessory-block">
              <img src={ipad} alt="" />
              <h3>Планшеты</h3>
            </div>
            <div className="accessory-block">
              <img src={clock} alt="" />
              <h3>Умные часы</h3>
            </div>
            <div className="accessory-block">
              <img src={gamepad} alt="" />
              <h3>Игровые приставки</h3>
            </div>
            <div className="accessory-block">
              <img src={earphone} alt="" />
              <h3>Наушники</h3>
            </div>
            <div className="accessory-block">
              <img src={portable} alt="" />
              <h3>
                Портативные <br />
                колонки
              </h3>
            </div>
            <div className="accessory-block">
              <img src={iphone} alt="" />
              <h3>Аксесуары</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
