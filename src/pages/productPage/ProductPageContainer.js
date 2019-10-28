import React from 'react';
import ProductPage from './ProductPage';

import ProductService from '../../services/ProductService';

class ProductPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      productId: this.props.match.params.id,
      recomendedProducts: []
    }
    this.ProductService = new ProductService()
  }

  componentDidMount() {
    this.getProduct(this.state.productId);
    this.getRecomendedProducts();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.id !== this.productId) {
      this.setState({
        productId: newProps.match.params.id
      });
      this.getProduct(newProps.match.params.id);
    }
  }

  getProduct = async (productId) => {
    this.ProductService.getProduct(productId)
      .then( product => {
        if (product)  { this.setState({product}) }
      })
      .catch( errors => {
        console.log(errors);
      })
  }

  getRecomendedProducts = async () => {
    this.ProductService.getProducts()
      .then( products => this.setState( {recomendedProducts: products} ) )
      .catch( errors => console.log(errors) )
  }

  render() {
    return (
      <ProductPage
        product={this.state.product}
        productId={this.state.productId}
        recomendedProducts={this.state.recomendedProducts}
        error
      />
    )
  }
}

export default ProductPageContainer;
