import React from 'react'
import { Outlet, NavLink ,Link} from "react-router-dom";
interface NavType 
{
  id: number;
  link: string;
  label: string;
  target?: string;
}


const HeaderNavigationItem = ({link, label='', target='_self',onClick,customClass, childs}: {link: string, label: string, target?: string,onClick?:()=>void,customClass?:string,childs: Array<NavType | null> }) => {
  let [active, setActive] = React.useState(false);
 
  return (
    <>
    {customClass?
        (<li className={customClass}>
          <NavLink  style={({ isActive }) => ({ 
                            color: isActive ? '#303442' : '' })} to={link}>
          {label}
          </NavLink>
          {childs && childs.length > 0 ? (
        <div className={active ? 'nav-child actived' : 'nav-child'}>
          {childs.map(child=> {
            return (
            <Link to ={`${child?.link}`}  target={child?.target}>{child?.label}</Link>
            )
          })}
        </div>
      ) : null}
        </li>):(
          <li >
          <NavLink  style={({ isActive }) => ({ 
                            color: isActive ? '#303442' : '' })} to={link}>
          {label}
          </NavLink>
        </li>
        )}
     </>

  )
}

export default HeaderNavigationItem