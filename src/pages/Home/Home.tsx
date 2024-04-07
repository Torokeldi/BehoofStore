import React from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import Row from "../../components/row/row";
import Footer from "../../components/Footer/Footer";
import Banners from "../../components/banners/Banners";
import Categories from "../../components/Categories/categories";
import HomeCards from '../../components/Grid-cards/HomeCards';
import Descriptions from "../../components/descriptions/descriptions";
import Reclame from "../../components/Reclame/Reclame";
import Accessories from "../../components/Accessories/Accessories";
import Quantity from "../../components/quantities/Quantity";

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="content">
        <Header/>
        <Banners/>
        <Categories/>
        <Quantity/>
        <HomeCards/>
        <Descriptions/>
        <Reclame/>
        <Accessories/>
        <Row/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
