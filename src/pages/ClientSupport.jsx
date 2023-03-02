import {FaPhone} from 'react-icons/fa'
import{GiPositionMarker} from 'react-icons/gi'
import {AiOutlineMail} from 'react-icons/ai'
import facebook from '../assets/facebook.png'
import pintrest from '../assets/pintrest.png'
import tiktok from '../assets/tiktok.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'
import instagram from '../assets/instagram.png'
function ClientSupport() {
  return (
     <>
      <hr />
      <h1 className="ml-6 my-2 text-2xl">Contact Client Support</h1>
       <hr />
      <div className="info form flex justify-between flex-col md:flex-row">
      <div className="client my-2 md:mx-20 mx-10 flex flex-col">
        <div className="get-intouch mb-8">
        <h1 className='text-2xl font-semibold my-1 '>GET IN TOUCH</h1>
         < p className='text-[15px]'>Thank you for reaching out to us, please</ p>
         < p className='text-[15px]'>allow up to 72 hours for our office to reply.</ p>
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
          <div className="email gap-2 flex my-2">
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
           <div className="socail flex  my-4 justify-between gap-2">
             <img src={tiktok} alt=""  className='h-8'/>
             <img src={instagram} alt=""  className='h-8'/>
             <img src={youtube} alt=""  className='h-8'/>
             <img src={facebook} alt=""  className='h-8'/>
             <img src={pintrest} alt=""  className='h-8'/>
             <img src={twitter} alt=""  className='h-8'/>
            
           </div>
        </div>
      </div>
      <div className="form my-2 mx-10 md:mr-40">
        <form >
          <div className="name mb-4 flex flex-col md:flex-row gap-4">
          <div className="fullname">
            <label  className=''>Full Name</label>
             <input type="text" className='px-2 md:py-1.5 py-3 w-full md:w-60 focus:outline-none  bg-gray-200 block' placeholder='John Doe '/>
            </div>
            <div className="else">
            <label className=''>If someone else's policy, who?</label>
             <input type="text"  className='px-2  md:py-1.5 py-3  w-full md:w-80 bg-gray-200 block focus:outline-none' />
            </div>
          </div>
          <div className="email mb-4 flex flex-col md:flex-row gap-4">
          <div className="fullname">
            <label  className=''>Email</label>
             <input type="text" className='px-2 md:py-1.5 py-3  w-full md:w-60 focus:outline-none  bg-gray-200 block' placeholder='Jsmith@gmail.com '/>
            </div>
            <div className="else">
            <label className=''>Policy Number (if known)</label>
             <input type="text"  className='px-2 md:py-1.5 py-3   w-full md:w-80 bg-gray-200 block focus:outline-none' />
            </div>
          </div>
          <div className="question mb-4 flex flex-col md:flex-row gap-4">
          <div className="fullname">
            <label  className=''>My question is regarding: *</label>
             <input type="text" className='px-2 md:py-1.5 py-3  w-full md:w-60 focus:outline-none  bg-gray-200 block'/>
            </div>
            <div className="else">
            <label className=''>Policy Number (if known)</label>
             <input type="text"  className='px-2 md:py-1.5 py-3   w-full md:w-80 bg-gray-200 block focus:outline-none' />
            </div>
          </div>
          <div className="question mb-6">
          <div className="fullname">
            <label  className=''>My question is regarding: *</label>
             <input type="text" className='px-4 py-6 w-full focus:outline-none  bg-gray-200 block'/>
            </div>
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

export default ClientSupport