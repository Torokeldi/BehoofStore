import './ProductsGroup.css'

function ProductsGroup() {
  return (
    <>
        <div className="ProductsGroup">
            <div className="container">
                    <div className="smartphone">
                        <h1 className='smartphone-title'>Смартфоны</h1>
                        <button className='smartphone-btn'>Все что нужно знать при выборе </button>
                    </div>
                <div className="characteristic">
                    <div className="characteristics">
                        <div className="characteristics-block1">
                            <h3>Цена</h3>
                            <button className='from'>от</button>
                            <button className='before'>до</button>
                        </div>
                        <div className="range">
                            <h3>Диапазон</h3>
                            <ul>
                                <li>0 - 10000p</li>
                                <li>10000 - 20000p</li>
                                <li>20000 - 3000p</li>
                                <li> 30000p</li>
                            </ul>
                        </div>
                    </div>

                    <div className="additional">
                        <div className="battery">
                        <h3>Батарея</h3>
                            <li>Text label</li>
                            <li>Text label</li>
                            <li>Text label</li>
                            <li>Text label</li>
                            <li>Text label</li>
                            <li>Text label</li>
                        </div>
                        <div className="camera">
                        <h3>Камера</h3>
                            <li>Text label</li>
                            <li>Text label</li>
                            <li>Text label</li>
                            <li>Text label</li>
                            <li>Text label</li>
                            <li>Text label</li>
                        </div>
                        <div className="battery">
                        <h3>Ответ</h3>
                            <li>Text label</li>
                            <li>Text label</li>
                            <li>Text label</li>
                            <li>Text label</li>
                            <li>Text label</li>
                            <li>Text label</li>
                        </div>
                        <div className="battery">
                        <h3>Портативность</h3>
                            <li>Text label</li>
                            <li>Text label</li>
                            <li>Text label</li>
                            <li>Text label</li>
                            <li>Text label</li>
                            <li>Text label</li>
                        </div>
                        <div className="battery">
                        <h3>4G(LTE)</h3>
                        <button>есть</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductsGroup