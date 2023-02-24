import TestimonialSwiper from './TestimonialSwiper'
function Testimonial() {
  return (
    <div className="testimonial mt-20">
      <div className="client">
        <p className='text-3xl md:text-5xl font-semibold text-center my-4 '>What Our Clients says :</p>
      </div>
       <div className="testimonial-slider">
       <TestimonialSwiper/>
       </div>
       <div className="button flex items-center justify-around px-3">
       <button className='bg-yellow-500 text-black block px-12 text-center py-2 rounded-md md:w-auto my-3 md:mx-0'>
          Learn More
        </button>
        <button className='bg-yellow-500 text-black block px-12 text-center py-2 rounded-md md:w-auto my-3'>
          Start Today
        </button>
       </div>
    </div>
  )
}

export default Testimonial