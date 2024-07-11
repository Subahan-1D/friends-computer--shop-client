// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import carousel1 from "../assets/images/carousel1.jpg";
import carousel2 from "../assets/images/carousel2.jpg";
import carousel3 from "../assets/images/carousel3.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

export default function Carousel() {
  return (
    <div className="container px-6 py-10 mx-auto rounded-lg">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={carousel1}
            text="Computer Store in Houston, TX - Micro Center"
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={carousel2}
            text="Repair ANY Computer - MacBook Repairs"
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={carousel3}
            text="Forum Shopping Centre, Dinajpur Friends Computer Shop"
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
