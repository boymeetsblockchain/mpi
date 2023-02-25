import connect from '../assets/connect.png'
import intro from '../assets/intro.png'
function Intro() {
  return (
    <div>
         <div className="connect flex justify-center items-center  bg-cover  bg-center md:bg-center md:bg-cover h-3/4 md:h-3/4"style={{ backgroundImage: `url(${connect})`,height:'200px' }}>
           <div className="meet-div text-2xl  bg-yellow-500 absolute opacity-90 text-center md:right-10 w-[300px] py-10 px-5 rounded-lg">
           An Introduction to MPI® PremiumStrategies
           </div>
       </div>
       <div className="form-book flex mx-auto items-center mx-auto  gap-10  flex-col mt-5 w md:flex-row">
          <div className="book">
           <img src={intro} alt="" className='h-[500px] w-[360px] md:ml-20' />
          </div>
          <div className="form  mx-8 md:mx-auto ">
                   <div >
                     <h1 className='text-xl mb-5'>Customize your MPI® Premium Strategy with Our Fillable Form</h1>
                      <p className=''>Click on the image of the MPI® Premium Strategy to enter your personalized income</p>
                      <p className=''>and retirement information and see just how the MPI® Premium Strategy can give you</p>
                      <p className=''>the retirement you deserve. Watch the video for a detailed explanation.</p>

                   </div>
               <form className='my-10'>
                   <input type="email"  className='w-3/4 py-1.5 px-2 border  focus:outline-none border-black mr-4'/>
                   <button className='bg-yellow-500 px-4 rounded-lg block mt-4 md:inline  py-2'>Email a Copy</button>
                   <button className='bg-yellow-500 px-4 rounded-lg py-2 my-5'>Schedule 1 on 1</button>
               </form>
          </div>
       </div>
    </div>
  )
}

export default Intro