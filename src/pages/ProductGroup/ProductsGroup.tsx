import './ProductsGroup.css'
import Checbox from '../../assets/Checkbox.png'
import Radio from '../../assets/Radio button.png'
import Radio1 from '../../assets/Radio button (1).png'


function ProductsGroup() {
  return (
      <>
    <form action="">
        <div className="productsGroup">
            <div className="container">
                <div className="smartphone">
                    <h1 className='smartphone-info'>Смартфоны</h1>
                    <button className='smartphone-btn'>Все что нужно знать при выборе </button>
                </div>
                <div className="smartphone-titles">
                    <h2>Качественные характеристики</h2>
                    <h2>Дополнительные фильтры</h2>
                    <button>Все фильтры</button>
                </div>
                <div className="characteristic">
                    <div className="range">
                        <div className="characteristics">
                            <div className="characteristics-block1">
                                <h3>Цена</h3>
                                <button className='from btn'>от 12 511</button>
                                <button className='before btn'>до 99 511</button>
                            </div>
                        </div>
                        <div>
                            <h3>Диапазон</h3>
                            <p> <img src={Radio} alt="" /> 0 - 1000p</p>
                            <p><img src={Radio1} alt="" />  10 000 - 20 000p</p>
                            <p><img src={Radio1} alt="" />  20 000 - 30 000p</p>
                            <p><img src={Radio1} alt="" />  30 000p</p>
                        </div>
                    </div>
                    <div>
                        <h3>Батарея</h3>
                        <p><img src={Checbox} alt="" /> text label</p>
                        <p><img src={Checbox} alt="" />text label</p>
                        <p><img src={Radio1} alt="" /> text label</p>
                        <p><img src={Radio1} alt="" /> text label</p>
                        <p><img src={Radio1} alt="" /> text label</p>                            
                        <p><img src={Radio1} alt="" /> text label</p>
                    </div>

                    <div>
                        <h3>Камера</h3>
                        <p><img src={Checbox} alt="" /> text label</p>
                        <p><img src={Checbox} alt="" /> text label</p>
                        <p><img src={Radio1} alt="" /> text label</p>
                        <p><img src={Radio1} alt="" /> text label</p>
                        <p><img src={Radio1} alt="" /> text label</p>
                        <p><img src={Radio1} alt="" /> text label</p>
                    </div>

                    <div>
                        <h3>Ответ</h3>
                        <p><img src={Checbox} alt="" /> text label</p>
                        <p><img src={Checbox} alt="" /> text label</p>
                        <p><img src={Radio1} alt="" /> text label</p>
                        <p><img src={Radio1} alt="" /> text label</p>
                        <p><img src={Checbox} alt="" /> text label</p>
                        <p><img src={Radio1} alt="" /> text label</p>
                    </div>

                    <div>
                        <h3>Портативность</h3>
                        <p><img src={Checbox} alt="" /> text label</p>
                        <p><img src={Checbox} alt="" /> text label</p>
                        <p><img src={Radio1} alt="" /> text label</p>
                        <p><img src={Radio1} alt="" /> text label</p>
                        <p><img src={Radio1} alt="" /> text label</p>
                        <p><img src={Radio1} alt="" /> text label</p>
                    </div>

                </div>
            </div>
        </div>
    </form>
    </>
  )
}

export default ProductsGroup