import React from 'react'
import SectionDesc from '../SectionDesc'
import SectionHotline from '../SectionHotline'
import SectionTitle from '../SectionTitle'

const SectionContent = () => {
  return (
    <div className="section_one_content flex-full">
        <div className="section_subtitle">Our Services</div>
        <SectionTitle label='Responsive & Professional' />
        <SectionDesc label='We go the extra mile on every project. The value we provide
        clients comes from our level of skill and performance, as well as
        our knowledge and professionalism. Rest assured, we put the same
        level of energy into every project we take on'/>
        <div className="section_about_hotline">
        <SectionHotline/>
        <SectionDesc label=" We're available 24/7, 365 days a year."/>
        </div>
    </div>
  )
}

export default SectionContent
