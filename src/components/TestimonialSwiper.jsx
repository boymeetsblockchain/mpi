import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import YouTube from "react-youtube";

import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const videoIds = [
  "b87dtOcKcko",
  "W-sYdV3SCA8",
  "tyDINGetm8g",
  "x1w2Hje-AvY",
  "EI2MlqqWT7k",
  "Nd9xhgAMRxg",
  "mDlzAF50IgI",
  "7MclhlwVJPw",
  "IgilLuXR_J0",
  "fMtgAhR50Y4",
  "TF2gOpevMaA",
  "x1w2Hje-AvY",
  "y4fA-_Plxl0",
  "jXfF-hcpmFs",
];

const Carousel = () => {
  const opts = {
    height: "200",
    width: "400",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="mySwiper"
        breakpoints={{
          }}
      >
        {videoIds.map((videoId) => (
          <SwiperSlide key={videoId}>
            <div className="h-[250px]">
              <YouTube videoId={videoId} opts={opts} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
