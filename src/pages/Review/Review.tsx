import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/Header'
import './Review.css'
import Categories from './categories'
import Row from './row'

function Review() {
  return (
    <>
    <Header/>
        <section>
            <div className="container">
                <div className="reviews">
                    <div className="reviews-content">
                        <div className="reviews-title">
                            <h1>Обзоры, чтобы выбрать нужное</h1>
                        </div>
                        <div className="reviews-btn">
                            <input placeholder='Поиск по обзорам'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Categories/>
        <Row/>
        <Footer/>
    </>
  )
}

export default Review