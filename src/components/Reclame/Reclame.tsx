import React from "react";
import googleplay from "../../assets/logo.svg";
import appstore from "../../assets/_Group_.png";
import behoof from "../../assets/behoof.png";

const Reclame:React.FC =() =>{
  return (
    <div>
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
    </div>
  );
}

export default Reclame;
