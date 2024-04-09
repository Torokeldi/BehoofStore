import React from 'react'
import '../../pages/productInfo/ProductInfo.css'
import Comments from "../../components/Comments/Comments.tsx";

const CommentsBar: React.FC = () => {
  return (
    <div>
            <div className="comments-bar">
            <div className="comments">
              <Comments />
            </div>
            <div className="comments">
              <Comments />
            </div>
            <div className="comments">
              <Comments />
            </div>
            <div className="comments">
              <Comments />
            </div>
            <div className="comments">
              <Comments />
            </div>
            <div className="comments">
              <Comments />
            </div>
            <div className="comments">
              <Comments />
            </div>
            <div className="comments">
              <Comments />
            </div>
            <div className="comments">
              <Comments />
            </div>
          </div>
    </div>
  )
}

export default CommentsBar