import React from "react";
import ArrivalsData from "../../../Data/ArrivalsData.json";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import SingleCard from "../../../Components/SingleCard";

const Arrivals = () => {
  return (
    <>
      <section id="arrivals">
        <h4>NEW ARRIVALS</h4>
        <p>
          SHOP THE NEW SELECTION OF NEW ARRIVALS AT OUR STORE. FILL OUT YOUR
          WISHLIST ITEM.
        </p>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          loop={true}
          navigation
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {ArrivalsData.map((item) => (
            <SwiperSlide className="my-slide" key={item.id}>
              <SingleCard myProp={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Arrivals;
