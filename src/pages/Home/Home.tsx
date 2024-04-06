import './Home.css'

import Header from '../../components/Header/Header'
import Categories from '../Review/categories'
import Advertising from './advertising'

const Home:React.FC =() =>{
  return (
    <>
    <Header/>
        <section>
            <div className="container">
                <div className="hemo__content">
                    <div className="hemo__category">
                        <div className="home__info">
                           <div className="home-texts">
                                <h1 className='mln'>1.8 млн </h1>
                                <h1>товаров в </h1> 
                                <h1 className='mln'> 2272 </h1> 
                                <h1> магазинах </h1> <br />
                           </div>
                            <h1 className='mln2'>найди, сравни, выберай!</h1>
                            <div className="home-btn">
                                <button>Перейти к категориям</button>
                            </div>
                        </div>
                    </div>

                    <div className="hemo__category">
                        <div className="home__info">
                           <div className="home-text">
                                <h1 className='mln'>Топ-10</h1>
                                <h1 className='mln2'>смартфонов 2023 года</h1>
                           </div>
                            <div className="home-btn">
                                <button>Перейти к категориям</button>
                            </div>
                            {/* <img className='hemo-img' src="src/assets/o.png" alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
            <Categories/>
            <Advertising/>
        </section>
    </>
  )
}

export default Home