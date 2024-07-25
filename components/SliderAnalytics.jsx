import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import React from "react";
import Image from "next/image";

const SliderAnalytics = ({ data }) => {
  const bgColors = ["#e6fff9", "#d9e8fc", "#fff0d6", "#ffd4f9", "#ffd9cf"];
  const colors = ["#3DDAB4", "#5ca1ff", "#ffc04f", "#fa46e2", "#fc7b58"];

  return (
    <div className="slider-1">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        loop={true}
        modules={[]}
        className="swiper-wrapper"
      >
        {data.map((slide, index) => {
          let colorIndex = (index + 1) % bgColors.length;
          if (colorIndex <= 0) colorIndex = bgColors.length - colorIndex;
          const bgColor = bgColors[colorIndex - 1];
          const color = colors[colorIndex - 1];
          //   console.log(bgColor);
          return (
            <SwiperSlide
              className={`slide-1`}
              style={{ backgroundColor: bgColor, color: color }}
              key={index}
            >
              <Image
                src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/svgs/icon-favorites.svg"
                height={45}
                width={45}
                alt="slide-image"
              />
              <p className="text-1">Test</p>
              <p className="text-2">2000</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SliderAnalytics;
