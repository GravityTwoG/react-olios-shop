import React from 'react';
import './category.sass'

function Category(props) {
  return (
    <a href="#" className="category">
      <span>{props.name}</span>
      <p>{props.children}</p>
    </a>
  );
}

export default Category;