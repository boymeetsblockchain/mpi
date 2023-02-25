import React from 'react'
import hero from '../../assets/hero.jpg'
import premium from "../../assets/premium.png"
import speaker from "../../assets/speak.png"
import testimonial from "../../assets/testimonials.png"

function HomeList() {
  return (
    <div className='flex flex-col items-center mx-2 mt-4 md:flex-row md:justify-center md:items-stretch md:space-x-4 text-center'>
        <div className="premium flex flex-row px-4 py-6 md:flex-col md:justify-center md:items-center"  style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)'}}>
          <img src={premium} className="h-12 md:h-16"/>
         <div className="text-info px-6 md:px-0">
         <h2 className="font-bold text-lg md:text-2xl"> MPI® Premium Strategy Introduction</h2>
          <h2 className="font-semibold">Learn More{">"}</h2>
         </div>
        </div>
        <div className="premium flex flex-row px-4 py-6 md:flex-col md:justify-center md:items-center"  style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)'}}>
          <img src={speaker} className="h-12 md:h-16" />
         <div className="text-info px-6 md:px-0">
         <h2 className="font-bold text-lg md:text-2xl">Speak to an MPI® Certified Advisor</h2>
          <h2 className="font-semibold">Learn More{">"}</h2>
         </div>
        </div>
        <div className="premium flex flex-row px-4 py-6 md:flex-col md:justify-center md:items-center"  style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)'}}>
          <img src={testimonial} className="h-12 md:h-16" />
         <div className="text-info px-6 md:px-0">
         <h2 className="font-bold text-lg md:text-2xl"> 
         MPI® Premium Testimonials</h2>
          <h2 className="font-semibold">Learn More{">"}</h2>
         </div>
        </div>
    </div>
  )
}

export default HomeList
