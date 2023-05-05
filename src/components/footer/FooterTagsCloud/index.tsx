import React from 'react'

const FooterTagsCloud = ({children}: {children?: React.ReactNode}) => {
  return (
    <>
    <h4 className="widget-title">Poppular Tags</h4>
    <div className="tagcloud">
        {children}
    </div>
    </>

  )
}

export default FooterTagsCloud
