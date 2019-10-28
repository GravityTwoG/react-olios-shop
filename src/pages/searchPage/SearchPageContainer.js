import React from 'react';
import SearchPage from './SearchPage';

import ProductService from '../../services/ProductService';

class SearchPageContainer extends React.Component {
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
        } else {
          this.setState({results: []})
        }
      })
      .catch ( errors => console.log(errors) )
  }

  searchHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      this.getSearchedProducts(event.target.value.trim())
    } else {
      this.setState( {
        results: []
      })
    }
    this.setState({
      searchWord: event.target.value
    })
  }

  render() {
    return <SearchPage
      results={this.state.results}
      searchWord={this.state.searchWord}
      searchHandler={this.searchHandler}/>
  }
}

export default SearchPageContainer;