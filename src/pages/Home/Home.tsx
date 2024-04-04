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
import googleplay from "../../assets/logo.svg";
import appstore from "../../assets/_Group_.png";
import behoof from "../../assets/behoof.png";
import "./Home.css";
import Accessory from "../../components/Accessory/Accessory";
import Row from "../Review/row";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <div className="banners">
            <div className="first-banner">
              <h1>
                <strong style={{ color: "#FF4D4D" }}>1.8 млн</strong> товаров в
                <strong style={{ color: "#FF4D4D" }}>2272</strong> магазинах{" "}
                <br /> найди, сравни, выберай!
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
          <div className="qualities-content">
            <button className="quality">Дизайн</button>
            <button className="quality">Портативность</button>
            <button className="quality">Камера</button>
            <button className="quality">Ответ</button>
            <button className="quality">Дисплей</button>
            <button className="quality">Батарея</button>
          </div>
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
            Наша цель - создать фантастический <br /> сервис для всех
            потребителей
          </h6>
          <div className="descriptions_content">
            <div className="description-block">
              <h1 className="count">5</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                officia sunt nemo culpa adipisci? Aspernatur dolores sapiente
                eligendi perspiciatis eos architecto. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Consectetur quasi ullam, deserunt
                architecto consequatur, sit quaerat voluptatum reprehenderit ea
                reiciendis sunt amet! Corporis harum accusantium fuga, iure
                dolorem ab eos.
              </p>
            </div>
            <div className="description-block">
              <h1 className="count">30</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                officia sunt nemo culpa adipisci? Aspernatur dolores sapiente
                eligendi perspiciatis eos architecto. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Consectetur quasi ullam, deserunt
                architecto consequatur, sit quaerat voluptatum reprehenderit ea
                reiciendis sunt amet! Corporis harum accusantium fuga, iure
                dolorem ab eos.
              </p>
            </div>
            <div className="description-block">
              <h1 className="count">300</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                officia sunt nemo culpa adipisci? Aspernatur dolores sapiente
                eligendi perspiciatis eos architecto. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Consectetur quasi ullam, deserunt
                architecto consequatur, sit quaerat voluptatum reprehenderit ea
                reiciendis sunt amet! Corporis harum accusantium fuga, iure
                dolorem ab eos.
              </p>
            </div>
            <div className="description-block">
              <h1 className="count">8</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                officia sunt nemo culpa adipisci? Aspernatur dolores sapiente
                eligendi perspiciatis eos architecto. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Consectetur quasi ullam, deserunt
                architecto consequatur, sit quaerat voluptatum reprehenderit ea
                reiciendis sunt amet! Corporis harum accusantium fuga, iure
                dolorem ab eos.
              </p>
            </div>
          </div>
          <div className="reclame">
            <div>
              {" "}
              <h1>
                <strong>Экономьте</strong> свое время <br />и получайте
                <strong>&nbsp;максимум</strong>
                <br /> от ежедневных покупок
              </h1>
              <div className="download-buttons">
                <button>
                  <img src={googleplay} alt="" className="app-logo" />
                  <p>
                    Загрузите из <br /> <b>Google Play</b>
                  </p>
                </button>
                <button>
                  <img src={appstore} alt="" className="app-logo" />
                  <p>
                    Загрузите из <br /> <b>App Store</b>
                  </p>
                </button>
              </div>
              <img src={behoof} className="behoof" alt="" />
            </div>
          </div>
          <div className="accessory-content">
            <div className="accessory-item">
              <Accessory />
            </div>
            <div className="accessory-item">
              <Accessory />
            </div>
            <div className="accessory-item">
              <Accessory />
            </div>
            <div className="accessory-item">
              <Accessory />
            </div>
            <div className="accessory-item">
              <Accessory />
            </div>
            <div className="accessory-item">
              <Accessory />
            </div>
            <div className="accessory-item">
              <Accessory />
            </div>
            <div className="accessory-item">
              <Accessory />
            </div>
            <div className="accessory-item">
              <Accessory />
            </div>
            <div className="accessory-item">
              <Accessory />
            </div>
          </div>
          <Row/>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Home;
