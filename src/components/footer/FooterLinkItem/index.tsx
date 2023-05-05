import React from 'react'

const FooterLinkItem = ({link='', name='', target='_self'}: {link: string, name: string, target?: string}) => {
  return (
    <li><a href={link}>{name}</a></li>
  )
}

export default FooterLinkItem
