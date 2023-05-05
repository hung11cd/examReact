import React from 'react'

const SectionDesc = ({label,customClass=''}:{label:string,customClass?:string}) => {
  return (
    <p  className={`section_desc ${customClass}`}>
        {label}
    </p>
  )
}

export default SectionDesc
