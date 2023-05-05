import React from 'react'

const FooterContactInfoItem = ({name,value,href}:{name:string, value:string,href?:string}) => {
  return (
    <li>
     {(href)?(<>
      <span className="contact-info-label">{`${name}:`}</span>
      <a href={href}>{value}</a>
      
     </>):
     (<>
      <span className="contact-info-label">{`${name}:`}</span>{value}
     </>)}
    </li>
  )
}

export default FooterContactInfoItem
