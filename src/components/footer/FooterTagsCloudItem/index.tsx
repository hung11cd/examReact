import React from 'react'

const FooterTagsCloudItem = ({link='', name='', target='_self'}: {link: string, name: string, target?: string}) => {
  return (
    <a href={link}>{name}</a>
  )
}

export default FooterTagsCloudItem
