import './Review.css'

const Categories:React.FC =() =>{
  return (
    <>
        <section>
            <div className="categories">
                <div className="container">
                    <div className="categories-content">
                        <h1>Категории обзоров</h1>
                        <div className="categories__images">
                            <div className="smartphones">
                                <img src="src/pages/Review/image/img1.png" alt="" />
                                <h3>Смартфоны</h3>
                            </div>
                            <div className="smartphones">
                                <img src="src/pages/Review/image/img2.png" alt="" />
                                <h3>Ноутбуки</h3>
                            </div>
                            <div className="smartphones">
                                <img src="src/pages/Review/image/img3.png" alt="" />
                                <h3>Планшеты</h3>
                            </div>
                            <div className="smartphones">
                                <img src="src/pages/Review/image/img4.png" alt="" />
                                <h3>Умные часы</h3>
                            </div>
                            <div className="smartphones">
                                <img src="src/pages/Review/image/img5.png" alt="" />
                                <h3>Игровые приставки</h3>
                            </div>
                            <div className="smartphones">
                                <img src="src/pages/Review/image/img6.png" alt="" />
                                <h3>Наушники</h3>
                            </div>
                            <div className="smartphones">
                                <img src="src/pages/Review/image/img7.png" alt="" />
                                <h3>Портативные <br />колонки</h3>
                            </div>
                            <div className="smartphones">
                                <img src="src/pages/Review/image/img8.png" alt="" />
                                <h3>Аксесуары</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Categories