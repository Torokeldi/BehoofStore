import './advertising.css'
import Footer from '../../components/Footer/footer'

const Advertising: React.FC =() =>{
  return (
    <div>
        <section>
            <div className="container">
                <div className="advertising__content">
                    <div className="advertising-title">
                        <h1></h1>
                    </div>
                    <div className="advertising__block">
                        < h1>5</ h1>
                        <h3>Lorem ipsum dolor sit amet consectetur. Rhoncus risus nunc a pharetra viverra enim nunc. </h3>
                    </div>

                    <div className="advertising__block">
                        < h1>30</ h1>
                        <h3>Lorem ipsum dolor sit amet consectetur. Rhoncus risus nunc a pharetra viverra enim nunc. </h3>
                    </div>

                    <div className="advertising__block">
                        < h1>300</ h1>
                        <h3>Lorem ipsum dolor sit amet consectetur. Rhoncus risus nunc a pharetra viverra enim nunc. </h3>
                    </div>

                    <div className="advertising__block">
                        < h1>8</ h1>
                        <h3>Lorem ipsum dolor sit amet consectetur. Rhoncus risus nunc a pharetra viverra enim nunc. </h3>
                    </div>
                </div>
                <img src="src/pages/Home/Frame 2357.png" alt="" />
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Advertising