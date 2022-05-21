import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Autoplay,
  Mousewheel,
  A11y,
  Keyboard,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/css/bundle";

import "./Slider.scss";

const Slider = () => {
  return (
    <section className="slider-container">
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          mousewheel={{
            forceToAxis: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[
            Autoplay,
            Pagination,
            Navigation,
            Mousewheel,
            A11y,
            Keyboard,
          ]}
          a11y={{
            enabled: true,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            {/* Slide 1 */}
            <img
              src={`${process.env.PUBLIC_URL}/img/large-slider-1.jpg`}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {/* Slide 2 */}
            <img
              src={`${process.env.PUBLIC_URL}/img/large-slider-3.jpg`}
              alt=""
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {/* Slide 3 */}
            <img
              src={`${process.env.PUBLIC_URL}/img/large-slider-4.jpg`}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {/* Slide 4 */}
            <img
              src={`${process.env.PUBLIC_URL}/img/medium-slider-5.jpg`}
              alt=""
              className="obj-center"
            />
          </SwiperSlide>
          {/* <SwiperSlide>Slide 5</SwiperSlide> */}
          {/* <SwiperSlide>Slide 6</SwiperSlide> */}
          {/* <SwiperSlide>Slide 7</SwiperSlide> */}
          {/* <SwiperSlide>Slide 8</SwiperSlide> */}
          {/* <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </>
    </section>
  );
};

export default Slider;
