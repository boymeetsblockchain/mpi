import eofire from '../assets/eofire.png'
import forbes from '../assets/forbes.png'
import stock from '../assets/stock.png'
import yahoo from '../assets/yahoo.png'
import best from '../assets/best.png'
import everyone from '../assets/everyone-end.png'
import enter from '../assets/enter.png'
import lost from '../assets/lost.png'
import book from '../assets/book.jpg'
import BookReviews from '../components/BookReview'
import  EEUP from '../assets/EEUP.png'
import { FaUserAlt,FaStar } from 'react-icons/fa'
function MpiBook() {
  return (
    <div>
         <div className="connect flex justify-center items-center z-0 bg-cover text-left bg-center md:bg-center md:bg-cover h-3/4 md:h-3/4"style={{ backgroundImage: `url(${book})`,height:'200px' }}>
           <div className="meet-div md:text-2xl text-sm hidden md:block  absolute md:right-10  bg-yellow-500  py-10 px-5 rounded-sm">
           Curtis Ray's Best Selling Books
           </div>
       </div>
       <div className="award-books mx-10 my-10">
        <div className="award flex justify-between">
          <p>As seen One</p>
          <img src={forbes} alt="forbes" className='h-4 md:h-8'/>
          <img src={yahoo} alt="forbes" className='h-4 md:h-8'/>
          <img src={enter} alt="forbes" className='h-4 md:h-8'/>
            <img src={stock} alt="forbes" className='h-4 md:h-8'/>
          <img src={eofire} alt="forbes" className='h-4 md:h-8'/>
        </div>
        <div className="books flex flex-col md:flex-row bg-gray-100 my-10 md:mx-20 md:justify-center items-center  py-10 gap-20 ">
          <div className="everyone flex flex-col items-center">
            <img src={everyone} alt="" className='h-60 items-center' />
            <a href="https://www.everyoneendsuppoor.com/optin1657665059833" 
            className='bg-yellow-500 border border-black text-black block px-12 my-4 text-center py-2 rounded-md'>Buy PaperBook</a>
             <h2 className='text-black font-bold'>Download eBook</h2>
          </div>
          <div className="best">
            <img src={best} alt="" className='h-60'/>
          </div>
          <div className="lost flex flex-col items-center">
            <img src={lost} alt=""className='h-60' />
            <a href="https://www.amazon.com/Lost-Science-Compound-Interest/dp/1937449076" 
            className='bg-yellow-500 border border-black text-black block px-12 my-4 text-center py-2 rounded-md'>Buy PaperBook</a>
            <h2 className='text-black font-bold'>Download eBook</h2>
          </div>
         </div>
       </div>
       <BookReviews/>
       <div className="introduce-review  flex items-center flex-col md:flex-row justify-around gap-10 mx-10">
        <div className="introduce flex text-center items-center flex-col">
          <h2>Introducing</h2>
           <h2 className='font-bold text-3xl'>EVERYONE ENDS UP</h2>
            <h1 className='text-yellow-300 font-extrabold text-5xl'>POOR!</h1>
             <h2>This Book Will Help YOU <u>Learn</u> The <u>SECRET</u></h2>
             <h2>To Produce Up to <b>3X</b> More Secure Income</h2>
             <h2>Over Your <b>ROTH IRA/401K</b></h2>
             <img src={EEUP} alt="" className='h-60' />
        </div>
        <div className="review">
          <div className="user-name text-[10px] flex gap-3">
            <FaUserAlt/>
             <p>Lance Watson</p>
          </div>
          <div className="star flex text-[10px] items-center  ">
            <FaStar fill="orange"/>
            <FaStar fill="orange"/>
            <FaStar fill="orange"/>
            <FaStar fill="orange"/>
            <FaStar fill="orange"/>
            <FaStar fill="orange"/>
             <p className='mx-1'>Debunking The Traditional Personal Financial Retirement Trap</p>
          </div>
          <div className="verify text-[10px]">
             <p className='block'>Reviewed in the United States on December 4, 2018</p>
             <span className='text-red-600 font-bold'>Verified Purchase</span>
             </div>
             <div className="review-text text-[10px]">
          <p>Eye-Opening! It's tough to find out that everything you thought you knew about your secure financial</p>
           <p>retirement plan will not produce the income you believed would allow you to retire with the same</p>
           <p>lifestyle. My father is a retired certified financial planner. He has taught me the importance of putting</p>
          <p>money away in my Roth IRA and began my investment the day I turned 16 years old. Today I am 34</p>
          <p>years old and have a sizeable amount in my Roth thanks to the compounding interest over time. I have</p>
          <p>always blindly followed my father's advice because he ultimately wants what is best for me {"("}and he</p>
          <p>does{")"}, but this book changes everything! Curtis outlines exactly why the current financial retirement</p>
          <p>system is failing us and causing everyone to end up poor. I do not want that to be me so you best</p>
          <p>believe I will be using the MPI system to ensure my future family and I are protected so we can become</p>
          <p>truly financially free.</p>
         </div>
         <a href="https://www.everyoneendsuppoor.com/optin1657665059833"  className="bg-yellow-500 border border-black text-black md:text-3xl block px-12 my-4 text-center py-2 rounded-md">
          <span className='block'>YES! I Want My FREE Copy</span>
          <span className='block'> EVERYONE ENDS UP POOR</span>
    
         </a>
        </div>
    
       </div>
    </div>
  )
}

export default MpiBook