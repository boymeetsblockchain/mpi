import curtis from '../assets/curtis.png'
import rayfamily from '../assets/Ray-Family.jpg'
function Founder() {
  return (
    <div>
      <div className='mb-16'>
        <div>
          <img src={curtis} alt="founder" />
        </div>

        <div className='mx-auto max-w-5xl'>
          <h1 className='text-center text-4xl my-4'>Meet The Founder: </h1>
          <div className='lg:flex mt-10 border-2 rounded-2xl'>
            <div className='space-y-6 p-10 lg:w-[35%] flex-shrink-0'>
              <img src={rayfamily} alt="founder" />
              <h2 className='text-xl'>Ray Family</h2>
            </div>
            <div className='p-10 border-t-2 md:border-t-0 text-gray-500'>
              <p>Curtis Ray founded MPI® UNLIMITED LLC with his wife Erin and serves as President and CEO. In 2014, Curtis was introduced to the world of Retirement Planning and Insurance and observed that the traditional investment strategies of the 40l(k), IRA, Real Estate, and Insurance were not providing the retirement people hoped for or expected. To provide solutions to hard-working Americans seeking a great retirement, Curtis invented and developed the MPI® Premium Strategy, bringing simplicity to financial education to Achieve, Protect, Grow, and Accelerate the power of Compound Interest.

                Curtis is a serial entrepreneur and inventor, holding multiple patents in various industries. With a passion to address issues others accept as status-quo, Curtis solves inefficiencies with entirely new approaches.

                Prior to founding MPI® UNLIMITED, Curtis attended Arizona State University competing on the wrestling team from 2002-2005. While still in college, he started his first business in the granite counter-top industry, growing to over 60 kitchens a week by 2012. Curtis started his 2nd business in 2008, developing and patenting the revolutionary thin natural stone system called ForzaStone®.

                Curtis and his wife Erin live in Gilbert, Arizona with their five beautiful children: Cayden, Caliann, Brody, Lexi, and Kenzie. He enjoys spending time with his family and competing in all types of sports. When Curtis is not working, he enjoys traveling and experiencing all the world has to offer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
     
  )
}

export default Founder