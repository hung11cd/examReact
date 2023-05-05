import React from 'react'
import SectionDesc from '../SectionDesc'

const HomeProductItem = ({title,href,urlImage,description}:{title:string, href:string,urlImage:string,description:string}) => {
  return (
    <li>
        <img
        className="photo"
        alt={title}
        src={urlImage}
        />
        <div className="content">
        <h3>
            <a href={href} title={title}
            >{title}</a>
        </h3>
        <SectionDesc label={description}/>
        <div className="section_btn">
            <a
            className="readmore"
            href={href}
            title={title}
            >Read more</a>
        </div>
        </div>
  </li>
  )
}

export default HomeProductItem
