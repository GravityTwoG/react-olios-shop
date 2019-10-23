import React from 'react';
import './App.sass';
import Sidebar from './components/sidebar/Sidebar';
import Menu from './components/menu/Menu';
import MainPage from './components/MainPage/MainPage'
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
      <div className="App">
        <Sidebar/>
        <div className="content">
          <MainPage/>
          <BurgerMenu onClick={this.menuHandler} opened={this.state.menu.opened}/>
        </div>
        <Menu opened={this.state.menu.opened}/>
      </div>
    )
  }
}

export default App;
