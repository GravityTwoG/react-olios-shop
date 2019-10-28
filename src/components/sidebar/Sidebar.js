import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.sass';
import BurgerMenu from '../burger-menu/BurgerMenu'
import logo from './img/LOGO.png';
import {ReactComponent as HomeIcon} from './img/Home.svg';
import {ReactComponent as BasketIcon} from './img/Basket.svg';
import {ReactComponent as SearchIcon} from './img/Search.svg';
import {ReactComponent as AboutIcon} from './img/About.svg';

function Sidebar(props) {
  return (
    <aside className="sidebar">
      <NavLink to="/home" className="main-logo">
        <img src={logo} alt=""/>
      </NavLink>
      <nav className="nav">
        <NavLink to="/home" className="nav__item">
          <HomeIcon/>
        </NavLink>
        <NavLink to="/basket" className="nav__item">
          <BasketIcon/>
        </NavLink>
        <NavLink to="/search" className="nav__item">
          <SearchIcon/>
        </NavLink>
      </nav>
      <NavLink to="/about" className="in nav__item">
        <AboutIcon/>
      </NavLink>
      <BurgerMenu
        onClick={props.onBurgerMenuClick}
        opened={props.burgerMenuOpened}/>
    </aside>
  )
}

export default Sidebar;
