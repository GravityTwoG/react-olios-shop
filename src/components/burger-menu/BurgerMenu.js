import React from 'react';
import './burgerMenu.sass'

function BurgerMenu(props) {
  return (
    <div
      className={props.opened ? "BurgerMenu BurgerMenu--active" : "BurgerMenu"}
      onClick={props.onClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default BurgerMenu;