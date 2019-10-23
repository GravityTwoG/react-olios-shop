import React from 'react';
import './sidebar.sass';
import logo from './img/LOGO.png';
import {ReactComponent as HomeIcon} from './img/Home.svg';
import {ReactComponent as BasketIcon} from './img/Basket.svg';
import {ReactComponent as SearchIcon} from './img/Search.svg';
import {ReactComponent as InIcon} from './img/In.svg';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="main-logo">
        <img src={logo} alt=""/>
      </div>
      <nav className="nav">
        <a href="/home" className="nav__item">
          <HomeIcon/>
        </a>
        <a href="/basket" className="nav__item">
          <BasketIcon/>
        </a>
        <a href="/search" className="nav__item">
          <SearchIcon/>
        </a>
      </nav>
      <a href="/in" className="in nav__item">
        <InIcon/>
      </a>
    </aside>
  )
}

export default Sidebar;
