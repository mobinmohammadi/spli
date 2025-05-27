import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
        <span className="inline-block text-center w-full mt-5 mb-3 font-bold">فروشگاه مکمل محمدی</span>
      <div className="flex shadow-slider h-[15rem] mt-7 bg-white  gap-5  items-center">

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper & > *:w-[60%]  & > *:h-[24px] & > *:rounded-sm"
        >
          <SwiperSlide>
            <img
              className=" rounded-sm"
              src="./Images/slider1.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" rounded-sm"
              src="./Images/slider2.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" rounded-sm"
              src="./Images/slider3.webp"
              alt=""
            />
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
        <div className="h-full pl-5 md:flex hidden shadow-slider gap-4   top-0 flex-col & > *:rounded-md ">
          <img
            className="h-[50%] w-full"
            src="./Images/fastSend.webp"
            alt=""
          />
          <img
            className="h-[50%] w-full"
            src="./Images/offerAlarms.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
