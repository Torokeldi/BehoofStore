import React from "react";
import star from "../../assets/Star.svg";
import "../css/comments.css";

const Comments: React.FC = () => {
  return (
    <div className="comment_content">
      <div className="comment-header">
        <img src={userImg} alt="" className="user-img" />
        <div className="name_stars">
          <p className="user-name"></p>
          <div className="stars">
            <img src={star} alt="" className="star" />
            <img src={star} alt="" className="star" />
            <img src={star} alt="" className="star" />
            <img src={star} alt="" className="star" />
            <img src={star} alt="" className="star" />
          </div>
        </div>
        <p className="time">{date}</p>
      </div>
      <h1 className="comment-title"></h1>
      <p className="user-comment">
      </p>
    </div>
  );
};

export default Comments;
