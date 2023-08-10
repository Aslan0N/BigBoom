import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrData from "../../../Data/ArrivalsData.json";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SingleCard from "../../../Components/SingleCard";
import { useCart } from "react-use-cart";

const Populars = () => {
  const { addItem } = useCart();

  return (
    <>
      <section id="populars">
        <h4>TOP POPULARS</h4>
        <p>
          LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
          INDUSTRY
        </p>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                navigation
                breakpoints={{
                  200: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  600: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  900: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1200: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                }}
                modules={[Navigation]}
                className="mySwiper cen"
              >
                {ArrData.slice(3).map((item) => (
                  <SwiperSlide className="my-slide small" key={item.id}>
                    <SingleCard myProp={item} />
                    <button onClick={() => addItem(item)}>Add To Cart</button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="item"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Populars;
