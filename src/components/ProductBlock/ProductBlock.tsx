import "./ProductBlock.css";
import phone from "../../assets/phone.svg";
import rating from "../../assets/Rating.png";
import analyze from "../../assets/chart.svg";
import like from "../../assets/heart.svg";

function ProductBlock() {
  return (
    <>
      <div className="Product-block">
        <div className="container">
         <div className="bc-block">
         <div className="b">
            <div className="block-img">
              <img src={phone} alt="" />
            </div>
            <div className="block-content">
              <div className="block-info">
                <div className="block-header">
                  <div className="blocks">
                    <div className="grade">
                      <h5 className="grade-text">4.4 Оценка экспертов</h5>
                      <h5 className="grade-text2">
                        4.0 <img src={rating} alt="" /> 447Отзывов
                      </h5>
                    </div>
                    <div className="block-icon">
                      <img src={like} alt="" />
                      <img src={analyze} alt="" />
                    </div>
                  </div>
                </div>
                <div className="block-name">
                  <h3>Apple iPhone 13 Pro Max 256 ГБ серый</h3>
                  <h3>78 999p</h3>
                </div>
              </div>

              <div className="information">
                <div className="information-data">
                  <h5>Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC</h5>
                  <h5>6.1 inches, 1170 x 2532 px Display with Small Notch</h5>
                  <h5>Bionic A15, Hexa Core, 3.22 GHz Processor</h5>
                  <h5>12 MP + 12 MP Dual Rear & 12 MP Front Camera</h5>
                </div>
                <div className="information-data2">
                  <h5>4 GB RAM, 128 GB inbuilt</h5>
                  <h5>Memory Card Not Supported</h5>
                  <h5>3240 mAh Battery with Fast Charging</h5>
                  <h5>iOS v15</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="c">
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
        </div>
         </div>
          </div>
        </div>
    </>
  );
}

export default ProductBlock;
