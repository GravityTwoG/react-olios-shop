import React from 'react';
import { Route } from 'react-router-dom';
import './products.sass';
import ProductService from '../../services/ProductService';
import ProductCard from '../productCard/ProductCard';

function Products() {
  return (
    <div className="products">
      <Route exact path="/products" component={AllProducts}/>
      <Route path="/products/:category" component={productsCategory}></Route>
    </div>
  )
}

class AllProducts extends React.Component {
  constructor() {
    super();
    this.state = {products: []}
    this.ProductService = new ProductService();
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    this.ProductService.getProducts()
      .then( products => {
        if (products)  { this.setState({products}) }
      })
      .catch( errors => console.log(errors) )
  }

  renderProducts = () => {
    const productIds = Object.entries(this.state.products);
    return productIds.map( product => {
      const id = product[0]
      product = product[1]
      return  (
        <ProductCard
          href={`/product/${id}`}
          img={product.imgUrl}
          size={product.imgSize}
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
      <div>
        <div className="products__header">
          <div className="products__title">Products</div>
        </div>
        <div className="products__container">
          {this.renderProducts()}
        </div>
        <button className="more-products">Show more products</button>
      </div>
    )
  }
}

function productsCategory(props) {
  const computeCategory = () => {
    let categoryName;
    switch(props.match.params.category) {
       case 'living-room':
          categoryName = 'Living room';
          break;
       case 'office':
          categoryName = 'Office';
          break;
       case 'for-kids':
          categoryName = 'For kids';
          break;
       case 'kitchen':
          categoryName= 'Kitchen';
          break;
       case 'accesories':
          categoryName = 'Accesories';
          break;
       default:
         return;
    }
    return (
      <div className="products__category">
        <span>{categoryName}</span>
        <p><img src={require('./../../images/category-icons/Living-room.png')} alt=""/></p>
      </div>
    )
  }

  return (
    <div>
      <div className="products__header">
        <div className="products__title">Products</div>
          {computeCategory()}
      </div>
      <div className="products__container">

      </div>
      <button className="more-products">Show more products</button>
    </div>
  )
}

export default Products;
