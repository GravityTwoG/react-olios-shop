import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.sass';
import logo from './../../images/sidebar/LOGO.png';
import {ReactComponent as HomeIcon} from './../../images/sidebar/Home.svg';
import {ReactComponent as BasketIcon} from './../../images/sidebar/Basket.svg';
import {ReactComponent as SearchIcon} from './../../images/sidebar/Search.svg';
import {ReactComponent as InIcon} from './../../images/sidebar/In.svg';

function Sidebar() {
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
      <NavLink to="/in" className="in nav__item">
        <InIcon/>
      </NavLink>
    </aside>
  )
}

export default Sidebar;
