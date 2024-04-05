import React from "react";
import "../Details/Details.css";

const Details: React.FC = () => {
  return (
    <div>
      <details>
        <summary className="link">Полный список характеристик</summary>
        <div className="characteristics-list">
          <div className="phone-info">
            <div className="factory-data">
              <p>Заводские данные</p>
              <div className="data-section">
                <div className="data-item">
                  <p className="data-label">Тип</p>

                  <p className="data-value">смартфон</p>
                </div>
                <div className="data-item">
                  <p className="data-label">Модель</p>

                  <p className="data-value">Apple iPhone 13</p>
                </div>
                <div className="data-item">
                  <p className="data-label">Год релиза</p>

                  <p className="data-value">2021</p>
                </div>
              </div>
            </div>
            <div className="factory-data">
              <p>Заводские данные</p>
              <div className="data-section">
                <div className="data-item">
                  <p className="data-label">Тип</p>

                  <p className="data-value">смартфон</p>
                </div>
                <div className="data-item">
                  <p className="data-label">Модель</p>

                  <p className="data-value">Apple iPhone 13</p>
                </div>
                <div className="data-item">
                  <p className="data-label">Год релиза</p>

                  <p className="data-value">2021</p>
                </div>
              </div>
            </div>
            <div className="screen-info">
              <p>Экран</p>
              <div className="data-section">
                <div className="data-item">
                  <p className="data-label">Диагональ экрана</p>

                  <p className="data-value">6.1 дюймов</p>
                </div>
                <div className="data-item">
                  <p className="data-label">Разрешение экрана</p>

                  <p className="data-value">2532x1170 пикселей</p>
                </div>
                <div className="data-item">
                  <p className="data-label">Плотность пикселей</p>

                  <p className="data-value">460 ppi</p>
                </div>
                <div className="data-item">
                  <p className="data-label">Технология изготовления экрана</p>

                  <p className="data-value">OLED</p>
                </div>
                <div className="data-item">
                  <p className="data-label">Количество цветов экрана</p>

                  <p className="data-value">16.7 миллионов</p>
                </div>
                <div className="data-item">
                  <p className="data-label">
                    Конструктивные особенности экрана
                  </p>

                  <p className="data-value">безрамочный вырез на экране</p>
                </div>
              </div>
            </div>
            <div className="camera-info">
              <p>Камера</p>
              <div className="data-section">
                <div className="data-item">
                  <p className="data-label">Основная камера</p>

                  <p className="data-value">
                    Двойная, 12 МП, f/1.6 и 12 МП, f/2.4
                  </p>
                </div>
                <div className="data-item">
                  <p className="data-label">Фронтальная камера</p>

                  <p className="data-value">12 МП, f/2.2</p>
                </div>
                <div className="data-item">
                  <p className="data-label">Оптический зум</p>

                  <p className="data-value">2x оптический зум приближения</p>
                </div>
                <div className="data-item">
                  <p className="data-label">Видеосъемка</p>

                  <p className="data-value">
                    4K при 24/30/60 к/с, 1080p при 30/60/120/240 к/с
                  </p>
                </div>
                <div className="data-item">
                  <p className="data-label">Дополнительные функции камеры</p>

                  <p className="data-value">
                    Ночной режим, Smart HDR 4, оптическая стабилизация
                    изображения
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
};

export default Details;
