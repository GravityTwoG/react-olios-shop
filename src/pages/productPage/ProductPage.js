import React from 'react';
import './product-page.sass';

import Category from '../../components/category/Category';
import ProductCard from '../../components/productCard/ProductCard';

import LivingRoomIcon from '../../images/category-icons/Living-room.png';

class ProductPage extends React.Component {

  getLastPrice = () => {
    if (this.props.product.lastPrice) {
      return <span className="product__price-prev">{this.props.product.lastPrice}</span>
    }
  }

  renderRecomendedProducts = () => {
    const productIds = Object.entries(this.props.recomendedProducts);
    return productIds.map( product => {
      const id = product[0]
      product = product[1]
      return  (
        <ProductCard
          href={`/product/${id}`}
          img={product.imgUrl}
          name={product.name}
          desc={product.desc}
          price={product.price}
          key={product.id}
        />
      )
    })
  }

  render() {
    return (
      <div className="product">
        <div className="product__preview">
          <img src={this.props.product.imgUrl} alt=""/>
          <div className="product__preview-like">
            <span>409</span> ❤
          </div>
          <div className="product__preview-arrows">
            <button>prev</button>
            <button>next</button>
          </div>
        </div>
        <div className="product__right">
          <div className="product__right-inner">
            <div className="product__header">
              <div className="product__header-title">Products</div>
              <Category name="Living room" href="/products/living-room">
                <img src={LivingRoomIcon} alt=""/>
              </Category>
            </div>
            <div className="product__info">
              <div className="product__name">{this.props.product.name}</div>
              <div className="product__desc">
                {this.props.product.desc}
              </div>
              <div className="product__line">
                <div className="product__price">
                  <div className="product__price-label">Cost</div>
                  <span className="product__price-curr">{this.props.product.price}</span>
                  { this.getLastPrice() }
                </div>
                <div className="product__quantity">
                  <div className="product__quantity-label">Quantity</div>
                  <input className="product__quantity-input" type="number" defaultValue="1"/>
                </div>
                <button className="btn">Add to card</button>
              </div>
            </div>
          </div>
          <div className="product__recomended">
            <div className="product__recomended-title">Recomended</div>
            <div className="product__recomended-cont">
              {this.renderRecomendedProducts()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductPage;
