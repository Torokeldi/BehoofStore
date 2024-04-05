import Header from "../../components/Header/Header.jsx";
import phone from "../../assets/phone.svg";
import star from "../../assets/Star.svg";
import crown from "../../assets/crown.svg";
import "./ProductInfo.css";
import analyze from "../../assets/chart.svg";
import like from "../../assets/heart.svg";
import chart from "../../assets/Frame8.png";
import Row from "../Review/row.js";
import Comments from "../../components/Comments/Comments.tsx";
import Footer from "../../components/Footer/Footer.js";
import Charts from "./Charts/Charts.tsx";
import Details from "./Details/Details.tsx";

const ProductInfo: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="product-info-content">
          <div className="route">
            <a href="#">Главная</a>
            {"/"}
            <a href="#">Смартфоны</a>
            {"/"}
            <a href="#">Apple iPhone 13 Pro Max 256 ГБ серый</a>
          </div>
          <div className="phone-character_content">
            <img src={phone} alt="" className="phone-img" />
            <div className="phone-character_info">
              <div className="phone-character_head">
                <h1 className="phone-character-title">
                  Apple iPhone 13 Pro Max 256 ГБ серый
                </h1>
                <div className="phone-character_head-bottom">
                  <p className="rating">4.4 оценка экспертов</p>
                  <p>4.4</p>{" "}
                  <div className="stars">
                    <img src={star} alt="" className="star" />
                    <img src={star} alt="" className="star" />
                    <img src={star} alt="" className="star" />
                    <img src={star} alt="" className="star" />
                    <img src={star} alt="" className="star" />
                  </div>
                  <p className="rating-comments">447 Отзывов</p>
                </div>
              </div>
              <div className="phone-characters">
                <div>
                  <p className="product-title">Дизайн</p>
                  <div className="lines">
                    {" "}
                    <hr /> <hr /> <hr /> <hr /> <hr />{" "}
                  </div>
                </div>
                <div>
                  <p className="product-title">Батарея</p>
                  <div className="lines">
                    {" "}
                    <hr /> <hr /> <hr /> <hr /> <hr />{" "}
                  </div>
                </div>
                <div>
                  <p className="product-title">Дисплей</p>
                  <div className="lines">
                    {" "}
                    <hr /> <hr /> <hr /> <hr /> <hr />{" "}
                  </div>
                </div>
                <div>
                  <p className="product-title">Камера</p>
                  <div className="lines">
                    {" "}
                    <hr /> <hr /> <hr /> <hr /> <hr />{" "}
                  </div>
                </div>
                <div>
                  <p className="product-title">Ответ</p>
                  <div className="lines">
                    {" "}
                    <hr /> <hr /> <hr /> <hr /> <hr />{" "}
                  </div>
                </div>
                <div>
                  <p className="product-title">Портативность</p>
                  <div className="lines">
                    {" "}
                    <hr /> <hr /> <hr /> <hr /> <hr />{" "}
                  </div>
                </div>
              </div>
              <p className="crown">
                <img src={crown} alt="" className="crown-img" />
                &nbsp;&nbsp;Самый дешевый
              </p>
              <div className="amount">
                <h1>78 999 ₽</h1>
                <p>
                  <b style={{ color: "black", fontSize: "20px" }}>re:</b>
                  <b style={{ color: "#C71585", fontSize: "20px" }}>Store</b>
                </p>
              </div>
              <p className="post">Доставка бесплатная</p>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "12px" }}
              >
                <img src={chart} alt="" className="chart" />
                <p>
                  <strong>Цена хорошая</strong>
                  <br /> Исходя из последних 40 дней, сумма составляет близко к
                  среднему<strong> 80 000 ₽</strong>
                </p>
              </div>
              <div className="slider">
                <input type="range" min="0" max="100" value="50" />
              </div>
              <div className="product-configuration">
                <div className="color-section">
                  <p className="section-title">Цвет:</p>
                  <div className="color-options">
                    <div className="color-option">
                      <div
                        className="color-box"
                        style={{ backgroundColor: "rgba(242, 245, 249, 1)" }}
                      ></div>
                      <div
                        className="color-box"
                        style={{ backgroundColor: "#FFBBBB" }}
                      ></div>{" "}
                      <div
                        className="color-box"
                        style={{ backgroundColor: "#6C6C6C" }}
                      ></div>{" "}
                      <div
                        className="color-box"
                        style={{ backgroundColor: "#BBFFE2" }}
                      ></div>{" "}
                      <div
                        className="color-box"
                        style={{ backgroundColor: "#BBC2FF" }}
                      ></div>{" "}
                      <div
                        className="color-box"
                        style={{ backgroundColor: "#FEBBFF" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="memory-section">
                  <p className="section-title">Память:</p>
                  <div className="memory-options">
                    <div className="memory-option">
                      <button className="memory-button">128 ГБ</button>
                      <button className="memory-button">256 ГБ</button>
                      <button className="memory-button">512 ГБ</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="phone-character-btns">
                <button>
                  <img src={analyze} alt="" />
                  &nbsp;&nbsp;&nbsp;Сравнение
                </button>
                <button>
                  <img src={like} alt="" />
                  &nbsp;&nbsp;&nbsp;Избранное
                </button>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <div className="phone-info">
              <h1 className="title">
                Характеристики Apple iPhone 13 Pro Max 256 ГБ серый
              </h1>
              <div className="feature-container">
                <div className="feature">
                  <p className="label">Камера</p>
                  <strong className="value">48 MPx</strong>
                </div>

                <div className="feature">
                  <p className="label">Система</p>
                  <strong className="value">IOS</strong>
                </div>

                <div className="feature">
                  <p className="label">Диагональ</p>
                  <strong className="value">6,1</strong>
                </div>

                <div className="feature">
                  <p className="label">Зарядка</p>
                  <strong className="value">Беспроводная</strong>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="link-container">
                 <Details/>
                </div>
                <div className="description-div">
                  <h1>Описание</h1>
                  <p>
                    Смартфон Apple iPhone 13 выполнен в компактном корпусе с
                    привлекательной розовой расцветкой и защищенной конструкцией
                    по стандарту IP68. Мощный чип A15 Bionic обеспечивает
                    быструю и стабильную работу при запуске приложений,
                    просмотре видео, веб-серфинге и выполнении других задач. На
                    дисплее 6.1 дюйма OLED выводится четкая и красочная
                    картинка. На тыловой стороне расположена камера с двумя
                    датчиками по 12 Мп, которые при поддержке ряда технологий и
                    функций позволяют создавать реалистичные снимки в различных
                    условиях. На передней стороне имеется камера 12 Мп для селфи
                    и общения. В мобильном устройстве предлагается широкий набор
                    беспроводных интерфейсов и разъем Lightning 8-pin.
                    Аккумулятор гарантирует продолжительное время автономности.
                    Из особенностей отмечаются поддержка быстрой зарядки,
                    беспроводной зарядки и устройств MagSafe с магнитным
                    позиционированием.
                  </p>
                </div>
              </div>
              <Charts />
            </div>
          </div>
          <div className="row">
            <Row />
          </div>
          <div className="comments-bar">
            <div className="comments">
              <Comments />
            </div>
            <div className="comments">
              <Comments />
            </div>
            <div className="comments">
              <Comments />
            </div>
            <div className="comments">
              <Comments />
            </div>
            <div className="comments">
              <Comments />
            </div>
            <div className="comments">
              <Comments />
            </div>
            <div className="comments">
              <Comments />
            </div>
            <div className="comments">
              <Comments />
            </div>
            <div className="comments">
              <Comments />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
