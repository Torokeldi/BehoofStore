import "./Footer.css";
import vk from "../../assets/vk.svg";
import tiktok from "../../assets/tiktok.svg";
import instagram from "../../assets/instagram.svg";
import telegram from "../../assets/telegram.svg";
import youtube from "../../assets/youtube.svg";
import Logo from "../../assets/behoof_logo.svg";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer__colums">
        <div className="footer-block">
          <div className="logo-content">
            <img src={Logo} alt="" />
            <h1 className="logo-title">Behoof</h1>
          </div>
          <h5>Мы в соц сетях</h5>
          <div className="sites">
            <img src={vk} alt="" />
            <img src={tiktok} alt="" />
            <img src={instagram} alt="" />
            <img src={telegram} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>

        <div className="footer-block">
          <h3 className="footer-title">Пользователю</h3>
          <ul>
            <li>
              <a href="#">Связаться с нами</a>
            </li>
            <li>
              <a href="#">Поддерка пользователей</a>
            </li>
            <li>
              <a href="#">FAQ & Руководства</a>
            </li>
            <li>
              <a href="#">Политика конфиденциальности</a>
            </li>
            <li>
              <a href="#">Пользовательское соглашение</a>
            </li>
          </ul>
        </div>

        <div className="footer-block">
          <h3 className="footer-title">Популярные категории</h3>
          <ul>
            <li>
              <a href="#">Смартфоны</a>
            </li>
            <li>
              <a href="#">Teteras electricas</a>
            </li>
            <li>
              <a href="#">Стиральные машины</a>
            </li>
            <li>
              <a href="#">Телевизоры</a>
            </li>
            <li>
              <a href="#">Ноутбуки</a>
            </li>
          </ul>
        </div>

        <div className="footer-block">
          <h3 className="footer-title">Команда Behoof</h3>
          <ul>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Работа у нас</a>
            </li>
          </ul>
        </div>
      </div>
      <h5>Copyright © 2023 Behoof, Inc. Все права защищены</h5>
    </footer>
  );
};

export default Footer;
