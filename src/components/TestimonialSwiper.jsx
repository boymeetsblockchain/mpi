import React, { useEffect, useState } from "react";
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
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const opts = {
    height: "200",
    width: "400",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="mx-auto max-w-[500px] p-8 md:max-w-[1000px] lg:max-w-[1400px]">
      <div className=" p-4 pt-10 md:p-20 md:mt-8 rounded-2xl">
        <Swiper
          spaceBetween={20}
          slidesPerView={`${width < 1000 && 1 || width >= 1000 && width < 1300 && 2 || width >= 1300 && 3}`}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="mySwiper"
          breakpoints={{
          }}
        >
          {videoIds.map((videoId) => (
            <SwiperSlide key={videoId} className="">
              <div className="h-[250px] ">
                <YouTube videoId={videoId} opts={opts} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
