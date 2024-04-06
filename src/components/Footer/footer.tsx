import './footer.css'

const Footer:React.FC =() => {
  return (
    <div>
        <footer>
            <div className="container">
                    <div className="footer__content__colums">
                        <div className="footer__logo">
                            <img src="src/pages/Review/image/footer.png" alt="" />
                            <h5>Мы в соц сетях</h5>
                            <div className="sites">
                                <img src="src/pages/Review/image/VK.png" alt="" />
                                <img src="src/pages/Review/image/TT.png" alt="" />
                                <img src="src/pages/Review/image/Inst.png" alt="" />
                                <img src="src/pages/Review/image/TG.png" alt="" />
                                <img src="src/pages/Review/image/YT.png" alt="" />
                            </div>
                        </div>

                        <div className="footer__colums">
                            <div className="footer-block">
                                <h3 className="footer-title">Пользователю</h3>
                                    <ul>
                                        <li><a href="#">Связаться с нами</a></li>
                                        <li><a href="#">Поддерка пользователей</a></li>
                                        <li><a href="#">FAQ & Руководства</a></li>
                                        <li><a href="#">Политика конфиденциальности</a></li>
                                        <li><a href="#">Пользовательское соглашение</a></li>
                                    </ul>
                            </div>

                            <div className="footer-block">
                                <h3 className="footer-title">Популярные категории</h3>
                                    <ul>
                                        <li><a href="#">Смартфоны</a></li>
                                        <li><a href="#">Teteras electricas</a></li>
                                        <li><a href="#">Стиральные машины</a></li>
                                        <li><a href="#">Телевизоры</a></li>
                                        <li><a href="#">Ноутбуки</a></li>
                                    </ul>
                            </div>

                            <div className="footer-block">
                                <h3 className="footer-title">Команда Behoof</h3>
                                    <ul>
                                        <li><a href="#">О нас</a></li>
                                        <li><a href="#">Работа у нас</a></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <h5>Copyright © 2023 Behoof, Inc. Все права защищены</h5>
        </footer>
    </div>
  )
}

export default Footer