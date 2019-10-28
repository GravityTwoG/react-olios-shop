import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.sass';
import Sidebar from './components/sidebar/Sidebar';
import Menu from './components/menu/Menu';
import MainPage from './components/mainPage/MainPage';
import ProductPage from './components/productPage/ProductPage';
import Products from './components/products/Products';
import SearchPage from './components/searchPage/Search';
import BurgerMenu from './components/burger-menu/BurgerMenu';


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
          <Sidebar/>
          <div className="content">
            <Switch>
              <Route path="/product/:id" component={ProductPage}/>
              <Route path="/products" component={Products}/>
              <Route path="/search" component={SearchPage}/>
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
