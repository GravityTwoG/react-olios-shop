import React from 'react';
import './App.sass';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import mainReducer from './store/reducers';

import Sidebar from './components/sidebar/Sidebar';
import BurgerMenu from './components/burger-menu/BurgerMenu';
import Menu from './components/menu/Menu';

import MainPage from './pages/mainPage/MainPage';
import ProductPageContainer from './pages/productPage/ProductPageContainer';
import Products from './pages/productsPage/Products';
import SearchPageContainer from './pages/searchPage/SearchPageContainer';
import BasketContainer from './pages/basketPage/BasketContainer';
import AboutPage from './pages/aboutPage/AboutPage';

const store = createStore(mainReducer, applyMiddleware(thunk));

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

  menuClose = (event) => {
    if (!event.target.classList.contains('BurgerMenu')) {
      this.setState({
        menu: { opened: false }
      })
    }
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App" onClick={this.menuClose}>
            <Sidebar onBurgerMenuClick={this.menuHandler} burgerMenuOpened={this.state.menu.opened}/>
            <div className="content">
              <Switch>
                <Route path="/product/:id" component={ProductPageContainer}/>
                <Route path="/products" component={Products}/>
                <Route path="/basket" component={BasketContainer}/>
                <Route path="/search" component={SearchPageContainer}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/" component={MainPage}/>
              </Switch>
              <BurgerMenu onClick={this.menuHandler} opened={this.state.menu.opened}/>
            </div>
            <Menu opened={this.state.menu.opened}/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
