import React from 'react';
import { Link } from 'react-router-dom';
import './button.sass';

function Button(props) {
  return <Link to={props.href} className="btn">{props.text}</Link>;
}

export default Button;