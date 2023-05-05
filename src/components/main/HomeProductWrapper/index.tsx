import React from 'react'

const HomeProductWrapper = ({children}: {children?: React.ReactNode}) => {
  let [viewmore, setViewmore] = React.useState<boolean>(false);

  let tabletClass = viewmore ? 'tableparameter showall_parameter' : 'tableparameter';
  return (
    <section className={tabletClass} id="tableparameter">
    <>
    <ul className="product_wrapper flex">
        {children}
    </ul>
    <div className="viewparameterfull" onClick={()=>{
      setViewmore(!viewmore);
    }}>
    Xem chi tiết
    </div>
    {viewmore ? (
    <div className='modal_parameter'>
      Modal danh sách sản phẩm
      <button onClick={()=>{
      setViewmore(false);
    }}>Close</button>
    </div>
    )
    : null
}
</>
 </section>
  )
}

export default HomeProductWrapper
