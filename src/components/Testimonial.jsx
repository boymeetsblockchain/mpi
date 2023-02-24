import TestimonialSwiper from './TestimonialSwiper'
function Testimonial() {
  return (
    <div className="testimonial ">
      <div className="client ">
        <p className='text-5xl font-semibold text-center my-4 '>What Our Clients says :</p>
      </div>
       <div className="testimonial-slider">
       <TestimonialSwiper/>
       </div>
       <div className="button flex items-center justify-around mx-3">
       <button className='bg-yellow-500 text-black block px-12 text-center py-2 rounded-md md:w-auto md:mx-0 my-3 mx-2 md:mx-0'>
          Learn More
        </button>
        <button className='bg-yellow-500 text-black block px-12 text-center py-2 rounded-md md:w-auto md:mx-0 my-3 mx-2 md:mx-0'>
          Start Today
        </button>
       </div>
    </div>
  )
}

export default Testimonial