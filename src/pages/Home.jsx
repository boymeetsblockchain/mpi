import React from 'react'
import hero from '../assets/hero.jpg'
import HomeList from '../components/HomeList'
function Home() {
  return (
    <>
    <div className="flex justify-center items-center bg-cover text-left bg-center md:bg-center md:bg-cover h-3/4 md:h-3/4" style={{ backgroundImage: `url(${hero})` }}>
      <div className="home-info mx-4 md:mx-8 py-8 md:py-16">
        <h1 className='font-bold text-4xl md:text-5xl px-4  pt-2'>Home of MPI® Premium Strategies</h1>
        <p className='font-bold text-sm md:text-3xl px-4 my-4'>Increase your retirement by up to 200%</p>
        <button className='bg-black text-white block px-12 text-center py-2 rounded-md md:w-auto md:mx-0 my-3 mx-2 md:mx-0'>
          Learn More
        </button>
        <button className='bg-transparent border border-black block  px-12  text-center rounded-md hover:bg-yellow-500  py-2 font-semibold my-2 mx-2 md:mx-0 md:w-auto'>
          Start Today
        </button>
      </div>
    </div>
    <HomeList/>
    </>
  )
}

export default Home
