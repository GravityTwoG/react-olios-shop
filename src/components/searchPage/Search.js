import React from 'react';
import './search.sass';
import ProductCard from '../productCard/ProductCard';
import ProductService from '../../services/ProductService'

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: '',
      results: []
    }
    this.ProductService = new ProductService();
  }

  getSearchedProducts = async (searchWord) => {
    this.ProductService.getSearchedProducts(searchWord)
      .then( results => {
        if (results) {
          this.setState({results})
         }
      })
      .catch ( errors => console.log(errors) )
  }

  searchHandler = (event) => {
    this.setState( {
      searchWord: event.target.value
    })
    if (event.target.value.trim().length > 0) {
      this.getSearchedProducts(event.target.value)
    } else {
      this.setState( {
        results: []
      })
    }
  }

  getResults = () => {
    const productIds = Object.entries(this.state.results);
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
      <div className="Search">
        <div className="searchForm">
          <div className="searchForm__cont">
            <input className="searchForm__input" type="text" value={this.state.searchWord} onChange={ (event) => {this.searchHandler(event)} }/>
            <button className="searchForm__reset"/>
          </div>
          <div className="searchForm__label">Type product that you are looking for</div>
        </div>
        <div className="Search__results">
          {this.getResults()}
        </div>
      </div>
    )
  }
}

export default SearchPage;