import Homeconnect from'../assets/connect.png'

import React from 'react'
function HomeConnect() {
  return (
    <div className='bg-gray-100 text-center px-2 mt-0.5 flex flex-col md:flex-row gap-2  my-2'>
        <div className="text flex flex-col justify-center items-center">
        <h1 className=' text-3xl md:text-4xl px-2 font-semibold my-2'>Connect with an MPI® Certified Advisor</h1>
        <p className='md:text-xl text-sm  text-left'>We have MPI® Certified Advisors eager to help you get started.</p>
        <button className='bg-yellow-500 text-black block px-12 my-4 text-center py-2 rounded-md'>
          Start Today
        </button>
        </div>
        <div className="image">
           <img src={Homeconnect} className="h-100" alt="" />
        </div>
    </div>
  )
}

export default HomeConnect