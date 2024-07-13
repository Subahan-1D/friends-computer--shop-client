// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import banner1 from "../assets/images/banner1.jpg";
import banner3 from "../assets/images/banner3.jpg";
import Slide from "./Slide";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const AddQueriesBanner = () => {
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
            image={banner1}
            text="Want to know where this information comes from"
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={banner3}
            text="Want to know where this information comes from"
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AddQueriesBanner;
