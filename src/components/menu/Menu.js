import React from 'react';
import { Link } from 'react-router-dom';
import './menu.sass'
import Category from '../category/Category'
import LivingRoomIcon from './../../images/category-icons/Living-room.png';
import OfficeIcon from './../../images/category-icons/Office.png';
import ForKidsIcon from './../../images/category-icons/For-kids.png';
import KitchenIcon from './../../images/category-icons/Kitchen.png';
import AccesoriesIcon from './../../images/category-icons/Accesories.png';


function Menu(props) {
  const renderCategories = () => {
    return (
      <div className="categories">
        <Category name="Living room" href="/products/living-room">
            <img src={LivingRoomIcon} alt=""/>
        </Category>
        <Category name="Office" href="/products/office">
            <img src={OfficeIcon} alt=""/>
        </Category>
        <Category name="For kids" href="/products/for-kids">
            <img src={ForKidsIcon} alt=""/>
        </Category>
        <Category name="Kitchen" href="/products/kitchen">
            <img src={KitchenIcon} alt=""/>
        </Category>
        <Category name="Accesories" href="/products/accesories">
            <img src={AccesoriesIcon} alt=""/>
        </Category>
      </div>
    )
  }

  return (
    <div className={props.opened ? "Menu Menu--active" : "Menu"}>
        {renderCategories()}
        <Link to="/products" className="showAll">Show All Categories</Link>
    </div>
  )
}

export default Menu;
