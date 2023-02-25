import React, { useEffect, useState } from 'react'
import chris from '../assets/Chris_Hale.png'
import Aleks from '../assets/Aleks_Hand.png'
import Crisse from '../assets/Crisse.png'
import Edison_Cardenas from '../assets/Edison_Cardenas.png'
import Rob_Duve from '../assets/Rob_Duve_noBG.png'
import Zach_Garner from '../assets/Zach_Garner.png'


const MeetComponent = () => {
    const [openBio, setOpenBio] = useState(false)
    const [personBio, setPersonBio] = useState("")
    const [width, setWidth] = useState(window.innerWidth);

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    // const handleOpenBio = (click) => {
    //     if (width <= 1000){
    //         setpersonBio(click)
    //     }
        
    // }
  return (
      <div className="py-5 pb-20 px-3 mx-auto max-w-7xl">
          <h1 className='text-2xl mb-5 text-center'>Our Team</h1>
          <div className='flex flex-wrap md:block justify-center'>
              <div className='my-6 px-10 md:flex'>
                  <div>
                      <img src={chris} alt="chris" className='max-h-[200px]' />
                      <p>Chris Hale</p>
                      <p>Vice President of Operations</p>
                      <p>chris@mpiunlimited.com</p>
                      <button className='hover:text-blue-500 hover:underline lg:hidden' onClick={() => setPersonBio("chris")}>Read bio</button>
                  </div>
                  <div className='fixed lg:relative top-[100px] px-10 lg:px-0 lg:block flex justify-center  w-full left-0 lg:top-0 flex-1'>
                      {width > 1200 || personBio === "chris" ?
                          <div className='max-w-2xl md:max-w-full'>
                              <div className="lg:pl-10 bg-white py-10 px-4 rounded-2xl lg:p-0 shadow-2xl lg:shadow-none relative">
                                  <div className='overflow-scroll max-h-[600px]'>
                                      <h2 className='text-center lg:hidden'>Chris Hale</h2>
                                      <button className='hover:bg-gray-200 h-10 absolute right-6 top-4 rounded-full w-10 text-xl font-bold lg:hidden' onClick={() => setPersonBio("")}>
                                          X
                                      </button>
                                      <p className="text-sm font-light">Chris Hale is Vice President and Chief Operating Officer of MPI® UNLIMITED. He joined MPI® UNLIMITED in 2018 after having worked for Vanguard for nearly a decade. While at Vanguard, Chris held various leadership positions in Retail Operations, Contact Center Management and Sales while obtaining his Series 7 and 63 licenses. He also took an active role in hiring and recruiting, leading several on-campus college recruiting events in Utah, Idaho and Arizona. Chris holds a Bachelor’s Degree in Finance from Arizona State University and is a passionate Sun Devil fan. Since joining MPI® UNLIMITED, Chris has helped grow the company from a two-man operation to a multi-million dollar business, providing oversight and guidance on all operational elements, with a focus and passion for automation and efficiency. His leadership and past experience in the financial services industry have been instrumental in driving success. Chris takes pride in being a “first follower” of Curtis Ray and quickly adopted the concept of Secure Compound Interest within the revolutionary MPI® system.</p>
                                      <p className='my-2 text-sm font-light'>Outside of work, Chris loves spending time with his wife, Andrea, and their five children. He loves sports, especially basketball, football and ping-pong. After serving a two-year church mission in New York City, he played basketball at Chandler-Gilbert Community College, where he was a Co-Captain of the team and ranked in the top five of the ACCAC Conference in steals, averaging 2.1 per game. Chris loves to be a youth sports coach and can be found almost every Saturday coaching one of his kids’ teams. He also enjoys helping his kids with homework, playing board games and going on dates with his wife.</p>
                                  </div>
                              </div>
                          </div> : ""}
                  </div>
              </div>
              <div className='my-6 px-10 md:flex'>
                  <div>
                      <img src={Crisse} alt="Crisse" className='max-h-[200px]' />
                      <p>Crisse McCormack</p>
                      <p>Underwriting</p>
                      <p>Crisse@mpiunlimited.com</p>
                      <button className='hover:text-blue-500 hover:underline lg:hidden' onClick={() => setPersonBio("Crisse")}>Read bio</button>
                  </div>
                  <div className='fixed lg:relative top-[100px] px-10 lg:px-0 lg:block flex justify-center  w-full left-0 lg:top-0 flex-1'>
                      {width > 1200 || personBio === "Crisse" ?
                          <div className='max-w-2xl md:max-w-full'>
                              <div className="lg:pl-10 bg-white py-10 px-4 rounded-2xl lg:p-0 shadow-2xl lg:shadow-none relative">
                                  <div className='overflow-scroll max-h-[600px]'>
                                      <h2 className='text-center lg:hidden'>Crisse McCormack</h2>
                                      <button className='hover:bg-gray-200 h-10 absolute right-6 top-4 rounded-full w-10 text-xl font-bold lg:hidden' onClick={() => setPersonBio("")}>
                                          X
                                      </button>
                                      <p className="text-sm font-light">Crisse McCormack is the Client Support manager for MPI® UNLIMITED having joined the team in March 2022. Prior to joining MPI® UNLIMITED, Crisse spent nearly 15 years with Camping World where she contributed to growing the Mesa, AZ location into one of the top 5 highest revenue generating locations in the company. While at Camping World, Crisse worked as Retail Manager focusing on customer satisfaction by developing a remarkable well educated staff. Crisse took an active role in all aspects of the business including; human resources, recruiting, accounting, training and inventory. Since joining MPI® she has been focused on making the client experience as smooth and simplified as possible. She believes in leading by example and within the Client Support team is focused on providing the best possible service and is dedicated to assisting clients with securing their financial futures.</p>
                                      <p className='my-2 text-sm font-light'>In her free time, Crisse loves spending time with her husband, Jason, their four kids, two beautiful granddaughters and bull mastiff Koda. She appreciates music and is an avid concert goer, enjoys outdoor activities and spending time with friends.</p>
                                  </div>
                              </div>
                          </div> : ""}
                  </div>
              </div>
              <div className='my-6 px-10 md:flex'>
                  <div>
                      <img src={Edison_Cardenas} alt="Edison" className='max-h-[200px]' />
                      <p>Edison Cardenas</p>
                      <p>Sales</p>
                      <p>Edison@mpiunlimited.com</p>
                      <button className='hover:text-blue-500 hover:underline lg:hidden' onClick={() => setPersonBio("Edison")}>Read bio</button>
                  </div>
                  <div className='fixed lg:relative top-[100px] px-10 lg:px-0 lg:block flex justify-center  w-full left-0 lg:top-0 flex-1'>
                      {width > 1200 || personBio === "Edison" ?
                          <div className='max-w-2xl md:max-w-full'>
                              <div className="lg:pl-10 bg-white py-10 px-4 rounded-2xl lg:p-0 shadow-2xl lg:shadow-none relative">
                                  <div className='overflow-scroll max-h-[600px]'>
                                      <h2 className='text-center lg:hidden'>Edison Cardenas</h2>
                                      <button className='hover:bg-gray-200 h-10 absolute right-6 top-4 rounded-full w-10 text-xl font-bold lg:hidden' onClick={() => setPersonBio("")}>
                                          X
                                      </button>
                                      <p className="text-sm font-light">Edison Cardenas is Director of Business Development of MPI® UNLIMITED. He joined MPI® UNLIMITED in 2021 after having worked in the financial services industry close to 20 years. During that time he held various individual and leadership positions. He also run his own hospitality and real estate company. Edison holds a Bachelor’s Degree in Finance from Grand Canyon University. At MPI® UNLIMITED he has made it a mission to help improve the financial lives of as many people as possible.
                                          Outside of work, Edison loves spending time with his wife, Amy, and their four children. They love serving at their church, traveling, family weekend gatherings and trying new eating places. When he is able, he will try a round of golf.</p>
                                  </div>
                              </div>
                          </div> : ""}
                  </div>
              </div>
              <div className='my-6 px-10 md:flex'>
                  <div>
                      <img src={Rob_Duve} alt="Rob" className='max-h-[200px]' />
                      <p>Rob Duve</p>
                      <p>Advanced Planning</p>
                      <p>Rob@mpiunlimited.com</p>
                      <button className='hover:text-blue-500 hover:underline lg:hidden' onClick={() => setPersonBio("Rob")}>Read bio</button>
                  </div>
                  <div className='fixed lg:relative top-[100px] px-10 lg:px-0 lg:block flex justify-center  w-full left-0 lg:top-0 flex-1'>
                      {width > 1200 || personBio === "Rob" ?
                          <div className='max-w-2xl md:max-w-full'>
                              <div className="lg:pl-10 bg-white py-10 px-4 rounded-2xl lg:p-0 shadow-2xl lg:shadow-none relative">
                                  <div className='overflow-scroll max-h-[600px]'>
                                      <h2 className='text-center lg:hidden'>Rob Duve</h2>
                                      <button className='hover:bg-gray-200 h-10 absolute right-6 top-4 rounded-full w-10 text-xl font-bold lg:hidden' onClick={() => setPersonBio("")}>
                                          X
                                      </button>
                                      <p className="text-sm font-light">When Rob Duve first heard about MPI®, he was overseeing community and youth financial wellness programs for one of the largest credit unions in the nation. As a Certified Financial Education Instructor and Certified Financial Coach, Rob deeply believes Knowledge is Power because applying that knowledge empowers us to create our best path forward. He saw firsthand how traditional financial solutions were leading to suboptimal results and after many months of extensive research, Rob determined MPI® offered a better future for himself and his family. He felt others deserved to know about this incredible strategy and joined the effort in early 2019. Rob is a proud “second follower” and over the years has lent his analytical thinking and abilities in program development, systems, management, training, and product development to help turn MPI® into a movement. He continues to support the growth of MPI® UNLIMITED as he now focuses on MPI® Advanced Solutions, supporting MPI® Certified Advisors to provide specifically structured solutions that meet their clients’ goals and objectives.</p>
                                      <p className='my-2 text-sm font-light'>Rob has a Master of Business Administration from Benedictine University and graduated Magna Cum Laude with degrees in Spanish and History from Arizona State University. Prior to getting into Finance, he worked for a Fortune 100 company, overseeing free teen technology education initiatives nationwide and supporting various community-focused efforts of 30,000+ employees. Rob believes each of us have daily opportunities to make an impact for good and loves that his role at MPI® UNLIMITED allows him a way to tangibly improve people’s lives and disrupt false money beliefs. Rob’s family is his top priority and in additional to spending time with his wife and five children, he’s very active in his church and community.</p>
                                  </div>
                              </div>
                          </div> : ""}
                  </div>
              </div>
              <div className='my-6 px-10 md:flex'>
                  <div>
                      <img src={Aleks} alt="Aleks" className='max-h-[200px]' />
                      <p>Aleks Hand</p>
                      <p>Client Support</p>
                      <p>Aleks@mpiunlimited.com</p>
                      <button className='hover:text-blue-500 hover:underline lg:hidden' onClick={() => setPersonBio("Aleks")}>Read bio</button>
                  </div>
                  <div className='fixed lg:relative top-[100px] px-10 lg:px-0 lg:block flex justify-center  w-full left-0 lg:top-0 flex-1'>
                      {width > 1200 || personBio === "Aleks" ?
                          <div className='max-w-2xl md:max-w-full'>
                              <div className="lg:pl-10 bg-white py-10 px-4 rounded-2xl lg:p-0 shadow-2xl lg:shadow-none relative">
                                  <div className='overflow-scroll max-h-[600px]'>
                                      <h2 className='text-center lg:hidden'>Chris Hale</h2>
                                      <button className='hover:bg-gray-200 h-10 absolute right-6 top-4 rounded-full w-10 text-xl font-bold lg:hidden' onClick={() => setPersonBio("")}>
                                          X
                                      </button>
                                      <p className="text-sm font-light">Aleks Hand is the leader of our In Force Acceleration team, facilitating the management of all MPI® client policies. After completing her Bachelor’s Degree in Finance from Arizona State University, she was recruited into a Leadership Development Program where she had the opportunity to move around the country and support a variety of manufacturing companies. Aleks created and managed a $212M forecast for a multinational aerospace manufacturer and developed metrics that drove operational excellence and financial success, and now uses her skills in data analytics on behalf of MPI® clients. She joined MPI® in October of 2019 after meeting with Curtis by chance and reading The Richest Man in Babylon at his recommendation.</p>
                                      <p className='my-2 text-sm font-light'>At MPI® UNLIMITED, Aleks has implemented internal systems and processes to increase efficiencies and support a 300% volume increase in new monthly clients, with a keen focus on expediting MPI® clients through the qualification process. She and her team provide support and education on existing client management to our MPI® Certified Advisors, together ensuring that our clients understand our commitment to the long-term wellbeing of their financial future. Outside of work, Aleks enjoys a wide range of activities such that range from whimsical to serious, including singing in her car, finding a great coffee shop, and browsing through bookstores. She is passionate about quality time with her family, enjoying watching movies with her kids, visiting the family cabin in Colorado, and traveling to the beach. Aleks is also committed to personal growth in the form of running and personal development books, and is an avid supporter of Humans of New York.</p>
                                  </div>
                              </div>
                          </div> : ""}
                  </div>
              </div>
              <div className='my-6 px-10 md:flex'>
                  <div>
                      <img src={Zach_Garner} alt="Zach" className='max-h-[200px]' />
                      <p>Zach Garner</p>
                      <p>Marketing</p>
                      <p>Zach@mpiunlimited.com</p>
                      <button className='hover:text-blue-500 hover:underline lg:hidden' onClick={() => setPersonBio("Zach")}>Read bio</button>
                  </div>
                  <div className='fixed lg:relative top-[100px] px-10 lg:px-0 lg:block flex justify-center  w-full left-0 lg:top-0 flex-1'>
                      {width > 1200 || personBio === "Zach" ?
                          <div className='max-w-2xl md:max-w-full'>
                              <div className="lg:pl-10 bg-white py-10 px-4 rounded-2xl lg:p-0 shadow-2xl lg:shadow-none relative">
                                  <div className='overflow-scroll max-h-[600px]'>
                                      <h2 className='text-center lg:hidden'>Crisse McCormack</h2>
                                      <button className='hover:bg-gray-200 h-10 absolute right-6 top-4 rounded-full w-10 text-xl font-bold lg:hidden' onClick={() => setPersonBio("")}>
                                          X
                                      </button>
                                      <p className="text-sm font-light">Zach Garner focuses his energy on promoting MPI® through digital marketing and public relations at MPI® UNLIMITED. Previously, he spent nearly fifteen years in self-employment, building and selling five different entertainment business models, and in digital marketing services. Outside of his own entrepreneurial ventures, Zach has spent the majority of his career in leadership roles with various SaaS (Software as a Service) companies and other expansion roles in consulting, sales, marketing, and affiliate marketing. After hearing the compelling journey of the creation of MPI®, he joined the MPI® UNLIMITED team in January of 2020.</p>
                                      <p className='my-2 text-sm font-light'>Zach’s greatest joy is helping educate the world about MPI®, so that as many people as possible have the knowledge to achieve, protect, grow, and accelerate their financial freedom with true compound interest. Zach is from Boise, Idaho, has served a two-year mission for the Church of Jesus Christ of Latter-day Saints in Honolulu, Hawaii, married his high school sweetheart and in 2009 headed to the beautiful Blue Ridge mountains to study at Southern Virginia University. He played two-collegiate sports: football and golf, and served as the Student Body President. Zach graduated with a Business Management and Leadership Degree and now lives in Gilbert, Arizona with his wife, Taylor, and their three daughters. Outside of work Zach enjoys time with family, his church community, helping his daughters excel in their personal activities, playing golf with associates, friends and building his business network..</p>
                                  </div>
                              </div>
                          </div> : ""}
                  </div>
              </div>
          </div>
        </div>
  )
}

export default MeetComponent
