import React from 'react';
import { NavLink } from 'react-router-dom';
import './category.sass'

function Category(props) {
  return (
    <NavLink to={props.href} className="category">
      <span>{props.name}</span>
      <p>{props.children}</p>
    </NavLink>
  );
}

export default Category;