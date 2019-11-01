import React from 'react';
import { Link } from 'react-router-dom';
import './basket.sass';

function Basket(props) {
  const renderProducts = () => {
    if (props.products) {
      return props.products.map( product => {
        return (
          <div className='basket-item' key={product.productId}>
            <img src={product.imgUrl} alt={product.name} className="basket-item__img"/>
            <div className="basket-item__inner">
              <Link to={`/product/${product.productId}`} className="basket-item__name">{product.name}</Link>
              <div className="basket-item__quantity">Qty: {product.quantity}</div>
              <div className="basket-item__price">{product.price}</div>
              <button className="basket-item__delete" onClick={() => {props.deleteItem(product.productId)}}></button>
            </div>
          </div>
        )
      })
    }
  }

  return (
    <div className="basket-page">
      <div className="basket-page__title">Basket</div>
      <div className="basket">
        {renderProducts()}
      </div>
      <div className="order"></div>
    </div>
  )
}

export default Basket;