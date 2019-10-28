import React from 'react';
import { Link } from "react-router-dom";
import './product-card.sass';

function ProductCard(props) {
  let size;
  if (props.size === '3') {
    size = 'big'
  }

  return (
    <Link to={props.href} className={`product-card product-card--${size}`}>
      <div className="product-card__photo">
        <img src={props.img} alt=""/>
      </div>
      <div className="product-card__info">
        <div className="product-card__name">{props.name}</div>
        <div className="product-card__desc">{props.desc}</div>
        <div className="product-card__price">{props.price}</div>
      </div>
    </Link>
  )
}

export default ProductCard;