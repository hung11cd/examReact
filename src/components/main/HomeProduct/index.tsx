import React from 'react'

const HomeProduct = ({children}: {children?: React.ReactNode}) => {
  return (
    <ul className="homeproduct clearfix" id="_loadList">
         {children}
    </ul>
  )
}

export default HomeProduct
