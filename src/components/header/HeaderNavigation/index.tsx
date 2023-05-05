import React from 'react'
import ShoppingCart from '../ShoppingCart'

const HeaderNavigation = ({children}: {children?: React.ReactNode}) => {
  return (
    <nav className="header-nav inline-flex ">
        <ul className='main-nav flex'>
            {children}
        </ul>
        <ShoppingCart/>
    </nav>
  )
}

export default HeaderNavigation