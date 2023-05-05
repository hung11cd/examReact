import React from 'react'
import { Outlet, Link } from "react-router-dom";
const FooterAbout = () => {
  return (
    <>
    <h4 className="widget-title">About Us</h4>
    <Link to="#"><span>Electrician</span></Link>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
      vestibulum magna, et dapibus lacus. Duis nec vestibulum magna, et
      dapibus lacus.
    </p>
    </>
  )
}

export default FooterAbout;
