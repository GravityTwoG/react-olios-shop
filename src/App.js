import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.sass';
import Sidebar from './components/sidebar/Sidebar';
import BurgerMenu from './components/burger-menu/BurgerMenu';
import Menu from './components/menu/Menu';

import MainPage from './pages/mainPage/MainPage';
import ProductPageContainer from './pages/productPage/ProductPageContainer';
import Products from './pages/products/Products';
import SearchPageContainer from './pages/searchPage/SearchPageContainer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {
        opened: false
      }
    }
  }

  menuHandler = () => {
    this.setState( (state) => ({
      menu: { opened: !state.menu.opened }
    }))
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Sidebar onBurgerMenuClick={this.menuHandler} burgerMenuOpened={this.state.menu.opened}/>
          <div className="content">
            <Switch>
              <Route path="/product/:id" component={ProductPageContainer}/>
              <Route path="/products" component={Products}/>
              <Route path="/search" component={SearchPageContainer}/>
              <Route path="/" component={MainPage}/>
            </Switch>
            <BurgerMenu onClick={this.menuHandler} opened={this.state.menu.opened}/>
          </div>
          <Menu opened={this.state.menu.opened}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
