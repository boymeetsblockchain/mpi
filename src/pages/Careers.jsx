import {FaPhone} from 'react-icons/fa'
import{GiPositionMarker} from 'react-icons/gi'
import {AiOutlineMail} from 'react-icons/ai'

function Careers() {
  return (
    <>
      <hr />
      <h1 className="ml-6 my-2 text-2xl">Careers</h1>
       <hr />
    <div className="career my-3  talk flex flex-col md:flex-row md:justify-around form">
       <div className="talk-address mx-10 flex-1">
       <div className="talk my-4">
           <h1 className='text-2xl  my-2 font-semibold'>JOIN THE MPI® UNLIMITED MOVEMENT!</h1>
           <p>MPI® Unlimited, one of the fastest growing agencies in the country,</p>
           <p>is the home of the exclusive MPI® Premium Strategy. Now available</p>
           <p>to the public, the MPI® Premium Strategy provides similar features</p>
           <p>and benefits of Premium Financing Life Insurance without net</p>
           <p>worth requirements, third party bank underwriting, uncapped loan</p>
            <p>rate risk, and other traditional flaws of Premium Financing,</p>
            <p>producing a more secure and simple path to financial leverage.</p>
            <p>Increase your client’s retirement income by up to 3x over the 401k/</p>
            <p>IUL/ Whole Life through the innovation of secure financial leverage.</p>
        </div>
        <div className="address email phone">
          <div className="address gap-2 flex my-2 ">
            <GiPositionMarker size={'32px'} color={'yellow'}/> 
             <div className="info">
             <h1>ADDRESS</h1>
            <p>459 N Gilbert Road B200</p>
            <p>Gilbert, AZ 85234</p>
             </div>
          </div>
          <div className="email gap-2 flex my-4">
            <AiOutlineMail size={'32px'} color={'yellow'}/> 
             <div className="info">
             <h1>EMAIL</h1>
            <p>contact@compoundinterest.com</p>

             </div>
          </div>
           <div className="phone flex gap-2">
            <FaPhone size={'32px'} color={'yellow'}/>
            <div className="info">
               <h1>PHONE</h1>
                <p>480-530-5840</p>
            </div>
           </div>
        </div>
       </div>
       <div className="form my-2  mx-10 flex-1 ">
           <form >
           <div className="fullname my-2">
            <label  className=''>Full Name</label>
             <input type="text" className='px-4 py-1.5  w-full focus:outline-none  bg-gray-200 block'/>
            </div>
            <div className="email my-2">
            <label  className=''>Email</label>
             <input type="text" className='px-4 py-1.5  w-full focus:outline-none  bg-gray-200 block'/>
            </div> 
            <div className="fullname my-2">
            <label  className=''>Your Message</label>
             <input type="text" className='px-4 py-6 w-full focus:outline-none  bg-gray-200 block'/>
            </div>
            <div className="fullname my-2">
            <label  className=''>UPLOAD RESUME</label>
             <input type="file" className='px-4 py-6 w-full focus:outline-none  bg-gray-200 block'/>
            </div>
            <div className="submit flex justify-center">
            <input type="submit"  className='bg-yellow-500 block  px-4 rounded-sm border border-black font-semibold py-2'/>
          </div>
              
           </form>
         </div>
    </div>
    </>
  )
}

export default Careers