import React from "react";
// import MyComponent from "../components/MyComponent";
// import Marquee from "react-fast-marquee";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const BannerSlider = () => {
  return (
    <section>
      {/* <Marquee className="font-bold text-2xl">
        Bem-vindo Välkommen ようこそ Hoş geldin Bine ati venit בר
      </Marquee> */}

      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full h-[200px] md:h-[400px] lg:h-[750px] object-cover"
            src="https://images.unsplash.com/photo-1609525709961-6b619b661122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[200px] md:h-[400px] lg:h-[750px] object-cover"
            src="https://images.unsplash.com/photo-1588155664348-d4e6715880a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[200px] md:h-[400px] lg:h-[750px] object-cover"
            src="https://images.unsplash.com/photo-1640926323842-bc53ea85f72f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[200px] md:h-[400px] lg:h-[750px] object-cover"
            src="https://images.unsplash.com/photo-1567562671749-7b4061a53b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[200px] md:h-[400px] lg:h-[750px] object-cover"
            src="https://images.unsplash.com/photo-1579935110378-81262796945f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[200px] md:h-[400px] lg:h-[750px] object-cover"
            src="https://images.unsplash.com/photo-1578374173705-08648798df55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[200px] md:h-[400px] lg:h-[750px] object-cover"
            src="https://images.unsplash.com/photo-1578374173703-71809a1757b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[200px] md:h-[400px] lg:h-[750px] object-cover"
            src="https://images.unsplash.com/photo-1596827414894-911f1265e391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BannerSlider;
