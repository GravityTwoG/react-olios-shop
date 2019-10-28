import React from 'react';
import './products-grid.sass';

function ProductsGrid(props) {
  return (
    <div className="products-grid">
      {props.children}
    </div>
  )
}

export default ProductsGrid;