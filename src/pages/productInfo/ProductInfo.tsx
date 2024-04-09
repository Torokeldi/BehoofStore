import Header from "../../components/Header/Header.jsx";
import "./ProductInfo.css";
import Row from "../../components/row/row.js";
import Footer from "../../components/Footer/Footer.js";
import CommentsBar from "../../components/commentsBar/commentsBar.js";
import Characteristics from "../../components/Characteristics/Characteristics.js";

const ProductInfo: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="product-info-content">
          <Characteristics/>
          <div className="row">
            <Row />
          </div>
          <CommentsBar />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
