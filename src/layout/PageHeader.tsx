import React from 'react'
import { Outlet, Link ,NavLink} from "react-router-dom";
import HeaderLogo from './../components/header/HeaderLogo'
import HeaderNavigation from './../components/header/HeaderNavigation'
import HeaderNavigationItem from './../components/header/HeaderNavigationItem'
import { navs } from './../data/navigations';
const PageHeader = () => {

  return (
      <header>
        <div className="container">
          <div className="header-main flex" >
          <HeaderLogo/>
            <HeaderNavigation  >
            {navs.map(nav=> <HeaderNavigationItem  key={nav.id} childs ={nav.childs} link={nav.link} label={nav.label} target={nav.target} customClass={nav.customClass}/>)}
            </HeaderNavigation>
          </div>
        </div>
      </header>
  )
}

export default PageHeader