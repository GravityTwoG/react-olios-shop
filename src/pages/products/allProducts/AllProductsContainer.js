import React from 'react';
import AllProducts from './AllProducts';
import ProductService from './../../../services/ProductService';

class AllProductsContainer extends React.Component {
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

  render() {
    return (
      <AllProducts
        products={this.state.products}
      />
    )
  }
}

export default AllProductsContainer;