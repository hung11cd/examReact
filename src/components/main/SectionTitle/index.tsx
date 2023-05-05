import React from 'react'

const SectionTitle = ({label,customClass=''}:{label:string,customClass?:string}) => {
  return (
    <>
        <h2 className={`section_title ${customClass}`}>{label}</h2>
    </>
  )
}

export default SectionTitle
