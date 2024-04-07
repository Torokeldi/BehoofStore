import './Review.css'
import Categories from '../../components/Categories/categories.tsx'
import Row from '../../components/row/row.tsx'

const Review:React.FC =()=> {
  return (
    <>
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
    </>
  )
}

export default Review