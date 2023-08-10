import React from 'react'
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';


const Slide = () => {
  return (
    <section id='slider'>
        <Swiper
      // install Swiper modules
      className='mySwiper'
      modules={[Navigation, Autoplay, EffectFade]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      loop
      autoplay={{
        delay: 2500,
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
         effect="fade"
    >
      <SwiperSlide className='mySlide' ><img src="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/slideshow/home1/Index_v1_1-1740x860.jpg" alt="" /></SwiperSlide>
      <SwiperSlide className='mySlide' ><img src="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/slideshow/home1/Index_v1_2-1740x860.jpg" alt="" /></SwiperSlide>
      <SwiperSlide className='mySlide' ><img src="https://opencart.smartaddons.com/themes/so_bigboom/image/cache/catalog/slideshow/home1/Index_v1_3-1740x860.jpg" alt="" /></SwiperSlide>
    </Swiper>
    </section>
  )
}

export default Slide

