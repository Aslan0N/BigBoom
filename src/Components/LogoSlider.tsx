import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import LogoData from '../Data/Logo.json'

import 'swiper/css';
import 'swiper/css/navigation';



import {  Navigation } from 'swiper/modules';


const LogoSlider:React.FC = () => {
  return (
    <>
    <section id='logo-slider' >
    <Swiper
        slidesPerView={5}
        spaceBetween={10}
        loop={true}
        navigation
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[ Navigation]}
        className="mySwiper"
      >
                {
                    LogoData.map((item)=>(
                      <SwiperSlide className='my-slide' key={item.id}>
                        <div className="my-card">
                          <img src={item.image} alt="" />
                          <p>{item.title}</p>
                        </div>
                      </SwiperSlide>
                    ))
                }
        
      </Swiper>
    </section>
    </>
  )
}

export default LogoSlider