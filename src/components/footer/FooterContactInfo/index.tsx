import React from 'react'

const FooterContactInfo = ({children}: {children?: React.ReactNode}) => {
  return (
    <>
    <h4 className="widget-title">Contact Info</h4>
    <ul className="contact-info">
      {children}
    </ul>
    </>
  )
}

export default FooterContactInfo;
