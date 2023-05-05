import React from 'react'

const FooterLink = ({children}: {children?: React.ReactNode}) => {
  return (
    <>
    <h4 className="widget-title">Customer Service</h4>
    <ul className="links">
        {children}
    </ul>
    </>
  )
}

export default FooterLink
