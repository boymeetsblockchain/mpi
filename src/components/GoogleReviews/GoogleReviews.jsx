import  {FaUserAlt} from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import googlereview from "../../assets/googlereview.png"
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react"
import React, { useEffect, useState } from 'react'
import { reviewData } from '../../data/Data'

function GoogleReviews() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // reviewData.map(item => console.log(item.fullName))
  return (
    <div className='mx-auto'>
      <div className='flex flex-col items-center md:flex-row'>
        <div className='flex gap-10 flex-1 items-center w-inherit mx-auto max-w-[400px] md:max-w-[70%] md:mt-0 lg:max-w-[80%] p-6 space-x-6'>
          <Swiper
            spaceBetween={20}
            slidesPerView={`${width < 1200 && 1 || width >= 1100 && width < 1100 && 2 || width >= 1100 && 3}`}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="mySwiper"
            breakpoints={{
            }}
          >
            {reviewData.map((review) => (
             <div className='flex justify-center  items-center mx-auto p-10'>
                <SwiperSlide key={review.fullName} >
                  <div className="flex justify-center items-center  py-12 mr-60 w-[350px] px-4">
                    <div className='rounded-2xl shadow-2xl px-4 lg:px-6 py-10 space-y-7'>
                      <div className="flex flex-col items-center space-x-5">
                       <div className='flex'>
                       <FaUserAlt className='h-6 mx-1 items-center' fill={'gray'}/>
                      <h1 className=' text-sm'>{review.fullName}</h1>
                       </div>
                      <div className="flex">
                         <FaStar fill="orange"/>
                         <FaStar fill="orange"/>
                         <FaStar fill="orange"/>
                         <FaStar fill="orange"/>
                         <FaStar fill="orange"/>
                         <FaStar fill="orange"/>
                        </div>
                       </div>
                      <div>
                        <p className='line-clamp-6 text-[10px]'>{review.review}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
             </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default GoogleReviews