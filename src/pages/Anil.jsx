import { Swiper, SwiperSlide } from "swiper/react";
import "./anil.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import car_1 from "../assets/images/car1.jpg";
import car_2 from "../assets/images/car2.png";
import car_3 from "../assets/images/car3.jpg";
import car_4 from "../assets/images/car4.jpg";
import car_5 from "../assets/images/car5.jpg";
import car_6 from "../assets/images/car6.jpg";
import car_7 from "../assets/images/car7.jpg";

const Anil = () => {
  return (
    <div className="anil-container">
      <div className="container">
        <h1 className="heading">Luxury Car Gallery</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={car_1} alt="car_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car_2} alt="car_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car_3} alt="car_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car_4} alt="car_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car_5} alt="car_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car_6} alt="car_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car_7} alt="car_image" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Anil;
