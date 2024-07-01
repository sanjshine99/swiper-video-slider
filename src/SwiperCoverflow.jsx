import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function SwiperCoverflow() {
  return (
    <div className="App">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false
        }}
        slidesPerView={2}
        centeredSlides
        initialSlide={1}
        style={{ height: "500px" }}
        className="swiper-container"
      >
        <SwiperSlide className="swiper-slide">
          <iframe
            title="Video 1"
            src="https://www.youtube.com/embed/ISuFS0leNzA?si=b2q9NWYR6FnnMDCM"
            allowFullScreen
            style={{ width: "100%", height: "100%" }}
          ></iframe>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <iframe
            title="Video 2"
            src="https://www.youtube.com/embed/5P6fmJuoTjU?si=nKhV6QA8maLXZWQU"
            allowFullScreen
            style={{ width: "100%", height: "100%" }}
          ></iframe>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <iframe
            title="Video 3"
            src="https://www.youtube.com/embed/a_KE1CVPT48?si=xmPrmqL9fsyB3OIr"
            allowFullScreen
            style={{ width: "100%", height: "100%" }}
          ></iframe>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
