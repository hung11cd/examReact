import React from 'react'
import HomeForm from '../components/main/HomeForm'
import HomeGallery from '../components/main/HomeGallery'
import HomeProduct from '../components/main/HomeProduct'
import HomeProductItem from '../components/main/HomeProductItem'
import HomeProductWrapper from '../components/main/HomeProductWrapper'
import HomeProductWrapperItem from '../components/main/HomeProductWrapperItem'
import SectionContent from '../components/main/SectionContent'
import SectionDesc from '../components/main/SectionDesc'
import SectionImg from '../components/main/SectionImg'
import SectionTitle from '../components/main/SectionTitle'
import {products} from './../data/products';

const HomePage = () => {
  return (
    <div>
        <HomeGallery/>
      <section>
        <div className="sections section_one flex">
          <SectionImg/>
          <SectionContent/>
        </div>
      </section>
      <section className="section_two_wrapper">
        <div className="sections section_two">
          <SectionTitle label='What We Offer' customClass='text-center'/>
          <HomeProduct>
            {products.map((product)=><HomeProductItem key={product.id} title={product.title} href={product.href} urlImage={product.urlImage} description={product.description}/>)}
          </HomeProduct>
        </div>
      </section>

      <section className="sections">
        <SectionTitle label='Danh sách sản phẩm' customClass='text-center'/>
        {/* <h2 className="section_title text-center">Danh sách sản phẩm</h2> */}
        <HomeProductWrapper>
          <HomeProductWrapperItem/>
        </HomeProductWrapper>
      </section>
      <section className="section_two_wrapper">
        <div className="sections section_form">
          <SectionTitle label='Subscribe to Our Newsletter' customClass='text-center'/>
          <SectionDesc customClass='text-center' label='Do not want to miss news, updates, note and any offer on our
            products, then please subscriber to our mailling list.'/>
          <HomeForm/>
        </div>
      </section>
    </div>
  )
}

export default HomePage