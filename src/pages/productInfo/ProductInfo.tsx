import Header from "../../components/Header/Header.jsx";
import phone from "../../assets/phone.svg";
import star from "../../assets/Star.svg";
import crown from "../../assets/crown.svg";
import "../css/ProductInfo.css";

function ProductInfo() {
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
