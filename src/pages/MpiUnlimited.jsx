import {FaPhone} from 'react-icons/fa'
import{GiPositionMarker} from 'react-icons/gi'
import {AiOutlineMail} from 'react-icons/ai'
import facebook from '../assets/facebook.png'
import pintrest from '../assets/pintrest.png'
import tiktok from '../assets/tiktok.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'
import instagram from '../assets/instagram.png'

function MpiUnlimited() {
    return (
        <>
         <hr />
         <h1 className="ml-6 my-2 text-2xl">Contact MPI® Unlimited</h1>
          <hr />
         <div className="info form flex md:justify-around flex-col md:flex-row">
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
         <div className="form my-2 mx-10 ">
           <form >
           <div className="fullname my-2">
            <label  className=''>Full Name</label>
             <input type="text" className='px-4 py-1.5  w-full focus:outline-none  bg-gray-200 block'/>
            </div>
            <div className="email my-2">
            <label  className=''>Email</label>
             <input type="text" className='px-4 py-1.5  w-full focus:outline-none  bg-gray-200 block'/>
            </div>
            <div  className='px-4 py-3 my-3  w-full focus:outline-none  bg-gray-200 block'>
            <label className='mx-2'>Select a state</label>
<select name="state" id="state">
  <option value="AL">Alabama</option>
  <option value="AK">Alaska</option>
  <option value="AZ">Arizona</option>
  <option value="AR">Arkansas</option>
  <option value="CA">California</option>
  <option value="CO">Colorado</option>
  <option value="CT">Connecticut</option>
  <option value="DE">Delaware</option>
  <option value="DC">District of Columbia</option>
  <option value="FL">Florida</option>
  <option value="GA">Georgia</option>
  <option value="HI">Hawaii</option>
  <option value="ID">Idaho</option>
  <option value="IL">Illinois</option>
  <option value="IN">Indiana</option>
  {/* <option value="IA">Iowa</option>
  <option value="KS">Kansas</option>
  <option value="KY">Kentucky</option>
  <option value="LA">Louisiana</option>
  <option value="ME">Maine</option>
  <option value="MD">Maryland</option>
  <option value="MA">Massachusetts</option>
  <option value="MI">Michigan</option>
  <option value="MN">Minnesota</option>
  <option value="MS">Mississippi</option>
  <option value="MO">Missouri</option>
  <option value="MT">Montana</option>
  <option value="NE">Nebraska</option>
  <option value="NV">Nevada</option>
  <option value="NH">New Hampshire</option>
  <option value="NJ">New Jersey</option>
  <option value="NM">New Mexico</option>
  <option value="NY">New York</option>
  <option value="NC">North Carolina</option>
  <option value="ND">North Dakota</option>
  <option value="OH">Ohio</option>
  <option value="OK">Oklahoma</option>
  <option value="OR">Oregon</option>
  <option value="PA">Pennsylvania</option>
  <option value="RI">Rhode Island</option>
  <option value="SC">South Carolina</option>
  <option value="SD">South Dakota</option>
  <option value="TN">Tennessee</option>
  <option value="TX">Texas</option>
  <option value="UT">Utah</option>
  <option value="VT">Vermont</option>
  <option value="VA">Virginia</option>
  <option value="WA">Washington</option>
  <option value="WV">West Virginia</option>
  <option value="WI">Wisconsin</option> */}
  <option value="WY">Wyoming</option>
</select>

            </div>
            <div className="phone">
                <label htmlFor="">Phone</label>
                <input type="number" placeholder='(XXX) XXX-XXXX' className='px-4 py-1.5  w-full focus:outline-none  bg-gray-200 block'/>

            </div>
            <div className="fullname my-2">
            <label  className=''>Subject</label>
             <input type="text" className='px-4 py-1.5 w-full focus:outline-none  bg-gray-200 block'/>
            </div>
            <div className="fullname my-2">
            <label  className=''>Message *</label>
             <input type="text" className='px-4 py-6 w-full focus:outline-none  bg-gray-200 block'/>
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

export default MpiUnlimited