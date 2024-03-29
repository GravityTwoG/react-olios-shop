import React from 'react';
import './mainPage.sass';
import Button from '../../components/button/Button';

function MainPage() {
  return (
    <div className="MainPage">
      <div className="main-text">
        <div className="main-text-title">OLIOS</div>
        <div className="main-text-subtitle">NEWEST FURNITURE SHOP</div>
        <Button href="/products" text="View more" className="btn"/>
      </div>
    </div>
  )
}

export default MainPage;