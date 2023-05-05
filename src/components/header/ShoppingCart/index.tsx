import React from 'react';
import {FaShoppingCart } from 'react-icons/fa'

const ShoppingCart = () => {
  return (
    <div className="header-cart">
        <FaShoppingCart />
        <span>0</span>
    </div>
  )
}

export default ShoppingCart