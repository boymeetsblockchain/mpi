import connect from '../assets/connect.png'
import chris from '../assets/Chris_Hale.png'

function Meet() {
  return (
    <div>
        <div className="connect flex justify-center items-center bg-cover text-left bg-center md:bg-center md:bg-cover h-3/4 md:h-3/4"style={{ backgroundImage: `url(${connect})`,height:'200px' }}>
           <div className="meet-div text-5xl  bg-yellow-500  py-10 px-5 rounded-sm">
           Meet MPI® Unlimited
           </div>
       </div>
       <div className="team text-center my-5 mx-3">
          <h1 className='text-2xl mb-5'>Our Team</h1>
          <div className="chris flex gap-10">
            <div className="image-text flex flex-col">
                <img src={chris} alt="chris" className='h-60'/>
                <p>Chris Hale</p>
                <p>Vice President of Operations</p>
                <p>chris@mpiunlimited.com</p>
            </div>
            <div className="about text-left">
                <p>Chris Hale is Vice President and Chief Operating Officer of MPI® UNLIMITED. He joined MPI® UNLIMITED in 2018 after having worked for Vanguard for nearly a decade. While at Vanguard, Chris held various leadership positions in Retail Operations, Contact Center Management and Sales while obtaining his Series 7 and 63 licenses. He also took an active role in hiring and recruiting, leading several on-campus college recruiting events in Utah, Idaho and Arizona. Chris holds a Bachelor’s Degree in Finance from Arizona State University and is a passionate Sun Devil fan. Since joining MPI® UNLIMITED, Chris has helped grow the company from a two-man operation to a multi-million dollar business, providing oversight and guidance on all operational elements, with a focus and passion for automation and efficiency. His leadership and past experience in the financial services industry have been instrumental in driving success. Chris takes pride in being a “first follower” of Curtis Ray and quickly adopted the concept of Secure Compound Interest within the revolutionary MPI® system.</p>
                <p className='my-2'>Outside of work, Chris loves spending time with his wife, Andrea, and their five children. He loves sports, especially basketball, football and ping-pong. After serving a two-year church mission in New York City, he played basketball at Chandler-Gilbert Community College, where he was a Co-Captain of the team and ranked in the top five of the ACCAC Conference in steals, averaging 2.1 per game. Chris loves to be a youth sports coach and can be found almost every Saturday coaching one of his kids’ teams. He also enjoys helping his kids with homework, playing board games and going on dates with his wife.</p>

            </div>
          </div>
       </div>
    </div>
     
  )
}

export default Meet