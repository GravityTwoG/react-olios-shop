import React from 'react';
import { Route } from 'react-router-dom';
import './products.sass';

import AllProductsContainer from './allProducts/AllProductsContainer';
import ProductsByCategoryContainer from './productsByCategory/ProductsByCategoryContainer';

function Products() {
  return (
    <div className="products">
      <Route exact path="/products" component={AllProductsContainer}/>
      <Route path="/products/:category" component={ProductsByCategoryContainer}></Route>
    </div>
  )
}

export default Products;
