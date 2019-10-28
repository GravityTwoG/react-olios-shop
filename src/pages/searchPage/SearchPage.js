import React from 'react';
import './search.sass';

import ProductCard from '../../components/productCard/ProductCard';
import ProductsGrid from '../../components/productsGrid/ProductsGrid';

class SearchPage extends React.Component {

  getResults = () => {
    const productIds = Object.entries(this.props.results);
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
      <div className="Search">
        <div className="searchForm">
          <div className="searchForm__cont">
            <input className="searchForm__input" type="text" value={this.props.searchWord} onChange={ (event) => {this.props.searchHandler(event)} }/>
            <button className="searchForm__reset"/>
          </div>
          <div className="searchForm__label">Type product that you are looking for</div>
        </div>
        <div className="Search__results">
          <ProductsGrid>
            {this.getResults()}
          </ProductsGrid>
        </div>
      </div>
    )
  }
}

export default SearchPage;