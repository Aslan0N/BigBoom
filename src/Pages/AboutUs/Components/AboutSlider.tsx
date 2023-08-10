import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

const AboutSlider = () => {
  return (
    <section id="about-slider">
        <h4>OUR MEMBERS</h4>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation
        autoplay={{
            delay: 2500,
          }}
        loop
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper cen"
      >
        <SwiperSlide className="my-slide">
          <div className="item">
            <img
              src="https://opencart.smartaddons.com/themes/so_bigboom/image/catalog/about/about1/out1.jpg"
              alt=""
            />
            <h6>VLADIMIR RADSIKIN</h6>
            <p>WEB DESIGNER</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-slide">
          <div className="item">
            <img
              src="https://opencart.smartaddons.com/themes/so_bigboom/image/catalog/about/about1/out2.jpg"
              alt=""
            />
             <h6>MICHAEL PHELPS</h6>
            <p>FOUNDER, CEO</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-slide">
          <div className="item">
            <img
              src="https://opencart.smartaddons.com/themes/so_bigboom/image/catalog/about/about1/out3.jpg"
              alt=""
            />
             <h6>MICHAL KORS</h6>
            <p>TESTER</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-slide">
          <div className="item">
            <img
              src="https://opencart.smartaddons.com/themes/so_bigboom/image/catalog/about/about1/out4.jpg"
              alt=""
            />
             <h6>TOMMY HILFIGER</h6>
            <p>DEVELOPER</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-slide">
          <div className="item">
            <img
              src="https://opencart.smartaddons.com/themes/so_bigboom/image/catalog/about/about1/out5.jpg"
              alt=""
            />
             <h6>NINA BURNS</h6>
            <p>TECH LEADER</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-slide">
          <div className="item">
            <img
              src="https://opencart.smartaddons.com/themes/so_bigboom/image/catalog/about/about1/out1.jpg"
              alt=""
            /> <h6>VLADIMIR RADSIKIN</h6>
            <p>WEB DESIGNER</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-slide">
          <div className="item">
            <img
              src="https://opencart.smartaddons.com/themes/so_bigboom/image/catalog/about/about1/out2.jpg"
              alt=""
            />
            <h6>MICHAEL PHELPS</h6>
            <p>FOUNDER, CEO</p>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </section>
  );
};

export default AboutSlider;
