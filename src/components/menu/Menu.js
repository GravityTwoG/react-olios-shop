import React from 'react';
import './menu.sass'
import Category from '../category/Category'
import LivingRoomIcon from './img/Living-room.png';
import OfficeIcon from './img/Office.png';
import ForKidsIcon from './img/For-kids.png';
import KitchenIcon from './img/Kitchen.png';
import AccesoriesIcon from './img/Accesories.png';


function Menu(props) {
  const renderCategories = () => {
    return (
      <div className="categories">
        <Category name="Living room">
            <img src={LivingRoomIcon} alt=""/>
        </Category>
        <Category name="Office">
            <img src={OfficeIcon} alt=""/>
        </Category>
        <Category name="For kids">
            <img src={ForKidsIcon} alt=""/>
        </Category>
        <Category name="Kitchen">
            <img src={KitchenIcon} alt=""/>
        </Category>
        <Category name="Accesories">
            <img src={AccesoriesIcon} alt=""/>
        </Category>
      </div>
    )
  }
  return (
    <div className={props.opened ? "Menu Menu--active" : "Menu"}>
        {renderCategories()}
        <a href="#" className="showAll">Show All Categories</a>
    </div>
  )
}

export default Menu;
