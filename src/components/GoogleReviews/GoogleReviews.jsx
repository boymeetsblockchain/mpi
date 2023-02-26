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

  return (
    <div className='py-10 md:px-10 px-6'>
      <div className='flex flex-col items-center md:flex-row'>
        <div className=' flex-shrink-0 w-[150px] md:w-[200px]'>
          <img src={googlereview} alt="googlereview" />
        </div>
        <div className='flex-1 flex w-inherit mx-auto w-full md:max-w-[70%] md:mt-0 lg:max-w-[80%] space-x-4'>
          <Swiper
            spaceBetween={10}
            slidesPerView={`${width < 900 && 1 || width >= 900 && width < 1300 && 2 || width >= 1300 && 3}`}
            navigation
            pagination={{ clickable: true }}
            className="w-inherit"
          >
            {reviewData.map((review) => (
              <div>
                <SwiperSlide key={review.fullName}>
                  <div className="flex justify-center items-center bg-inherit py-12 w-inherit md:w-full px-4">
                    <div className='rounded-2xl shadow-2xl px-4 lg:px-6 py-7 space-y-7'>
                      <div className="flex items-center space-x-5">
                        <img src={review.image} alt="googlereview" className='w-[50px] rounded-full' />
                        <h1 className='font-serif font-semibold text-xl'>{review.fullName}</h1>
                      </div>
                      <div>
                        <p className='line-clamp-6'>{review.review}</p>
                      </div>
                    </div>
                  </div>
                </ SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default GoogleReviews