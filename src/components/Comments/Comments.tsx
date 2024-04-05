import React from "react";
import star from "../../assets/Star.svg";
import userImg from '../../assets/Frame 2371.jpeg';

import "./comments.css";

const Comments: React.FC = () => {
  return (
    <div className="comment_content">
      <div className="comment-header">
        <img src={userImg} alt="" className="user-img" />
        <div className="name_stars">
          <p className="user-name">LOrem IPsum</p>
          <div className="stars">
            <img src={star} alt="" className="star" />
            <img src={star} alt="" className="star" />
            <img src={star} alt="" className="star" />
            <img src={star} alt="" className="star" />
            <img src={star} alt="" className="star" />
          </div>
        </div>
        <p className="time">23.05.2020</p>
      </div>
      <h1 className="comment-title">qwErty</h1>
      <p className="user-comment">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero asperiores dolorum saepe. Natus repellat quam, maxime iusto repudiandae earum labore facere nulla saepe incidunt. Ipsam, dolorem doloremque.
      </p>
    </div>
  );
};

export default Comments;
