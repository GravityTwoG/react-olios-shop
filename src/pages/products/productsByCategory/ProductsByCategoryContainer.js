import React from 'react';
import ProductsByCategory from './ProductsByCategory';
import ProductService from './../../../services/ProductService';

class ProductsByCategoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      categoryIcon: '',
      products: []
    }
    this.ProductService = new ProductService();
  }

  componentDidMount() {
    this.computeCategory(this.props.match.params.category);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.category !== this.props.match.params.category) {
      this.computeCategory(newProps.match.params.category);
    }
  }

  computeCategory = async (param) => {
    let category;
    let categoryIcon;
    switch(param) {
       case 'living-room':
          category = 'Living room';
          categoryIcon = await import('../../../images/category-icons/Living-room.png');
          break;
       case 'office':
          category = 'Office';
          categoryIcon = await import('../../../images/category-icons/Office.png');
          break;
       case 'for-kids':
          category = 'For kids';
          categoryIcon = await import('../../../images/category-icons/For-kids.png');
          break;
       case 'kitchen':
          category = 'Kitchen';
          categoryIcon = await import('../../../images/category-icons/Kitchen.png');
          break;
       case 'accesories':
          category = 'Accesories';
          categoryIcon = await import('../../../images/category-icons/Accesories.png');
          break;
       default:
         return;
    }
    this.setState({category, categoryIcon: categoryIcon.default});
    this.getProductsByCategory(category);
  }

  getProductsByCategory = async (category) => {
    this.ProductService.getProductsByCategory(category)
      .then( products => {
        if (products)  {
           this.setState({products})
        } else {
          this.setState({products: []})
        }
      })
      .catch( errors => console.log(errors) )
  }

  render() {
    return (
      <ProductsByCategory
        category={this.state.category}
        categoryIcon={this.state.categoryIcon}
        products={this.state.products}
      />
    )
  }
}

export default ProductsByCategoryContainer;