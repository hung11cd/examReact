import React from 'react'
import { Navigation, Pagination} from 'swiper';
import {SwiperSlide,Swiper} from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle'
import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
import {gallerys} from './../../../data/gallerys';
const HomeGallery = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: false }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {gallerys.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img src={slide.urlImage} alt={slide.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default HomeGallery
