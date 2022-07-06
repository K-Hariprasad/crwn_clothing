import React from "react";
import {useNavigate} from 'react-router-dom'
import './CategoryItem.scss';
function CategoryItem({title, imageUrl}) {
  const navigate = useNavigate()
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ background: `url(${imageUrl})` }}
      />
      <div className="category-body-container" onClick={()=>navigate(`/shop/${title.toLowerCase()}`)}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
