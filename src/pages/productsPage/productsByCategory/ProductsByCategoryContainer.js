import React from 'react';
import { connect } from 'react-redux';
import {requestProductsByCategory } from '../../../store/productsPage/actions';

import ProductsByCategory from './ProductsByCategory';

import LivingRoomIcon from '../../../images/category-icons/Living-room.png';
import OfficeIcon from '../../../images/category-icons/Office.png';
import ForKidsIcon from '../../../images/category-icons/For-kids.png';
import KitchenIcon from '../../../images/category-icons/Kitchen.png';
import AccesoriesIcon from '../../../images/category-icons/Accesories.png';

class ProductsByCategoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      categoryIcon: {}
    }
  }

  componentDidMount() {
    this.computeCategory(this.props.match.params.category);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.category !== this.props.match.params.category) {
      this.computeCategory(this.props.match.params.category);
    }
    if (prevState.category !== this.state.category) {
      this.props.requestProductsByCategory(this.state.category);
    }
  }

  computeCategory = (categoryUrl) => {
    let categoryIcon;
    let category;
    switch(categoryUrl) {
       case 'living-room':
          category = 'living room';
          categoryIcon =  LivingRoomIcon;
          break;
       case 'office':
          category = 'office';
          categoryIcon =  OfficeIcon;
          break;
       case 'for-kids':
          category = 'for kids';
          categoryIcon =  ForKidsIcon;
          break;
       case 'kitchen':
          category = 'kitchen';
          categoryIcon =  KitchenIcon;
          break;
       case 'accesories':
          category = 'accesories';
          categoryIcon =  AccesoriesIcon;
          break;
       default:
         return;
    }
    this.setState({
      category,
      categoryIcon
    })
  }

  render() {
    return (
      <ProductsByCategory
        category={this.state.category}
        categoryIcon={this.state.categoryIcon}
        products={this.props.productsByCategory}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    productsByCategory: state.productsPage.productsByCategory
  }
}

const mapDispatchToProps = {
  requestProductsByCategory,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsByCategoryContainer);