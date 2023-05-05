import React from 'react'
import FooterAbout from '../components/footer/FooterAbout'
import FooterContactInfo from '../components/footer/FooterContactInfo'
import {contactinfos} from './../data/contactinfo';
import FooterContactInfoItem from '../components/footer/FooterContactInfoItem';
import FooterLink from '../components/footer/FooterLink';
import {links} from './../data/links';
import FooterLinkItem from '../components/footer/FooterLinkItem';
import FooterTagsCloud from '../components/footer/FooterTagsCloud';
import FooterTagsCloudItem from '../components/footer/FooterTagsCloudItem';
import {tags} from './../data/tagclouds';
import FooterCopyRight from '../components/footer/FooterCopyRight';

const PageFooter = () => {
  return (
    <footer>
    <div className="container">
    <div className="flex footer-row">
        <div className="footer-col">
          <FooterAbout/>
        </div>
        <div className="footer-col">
        <FooterContactInfo>
          {contactinfos.map((contact,index)=><FooterContactInfoItem key={`contactinfos_${contact.id}`} name={contact.name} value={contact.value}  href={contact.href}/>)}
        </FooterContactInfo>
        </div>
        <div className="footer-col">
          <FooterLink>
            {links.map(lk=><FooterLinkItem key={`links_${lk.id}`} link={lk.link} name={lk.name}/>)}
          </FooterLink>
        </div>
        <div className="footer-col">
          <FooterTagsCloud>
            {tags.map(tag=><FooterTagsCloudItem key={`tags_${tag.id}`} name={tag.name} link={tag.link}/>)}
          </FooterTagsCloud>
        </div>
      </div>
      <FooterCopyRight/>
    </div>
  </footer>
  )
}

export default PageFooter