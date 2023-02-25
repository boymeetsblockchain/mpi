import HomeMp4 from '../../assets/Home-Page-Video-2.0.mp4';
import poster from '../../assets/poster.png';

function HomeVideo() {
  return (
    <div className="lg:flex p-6 items-center space-y-5 bg-gray-100">
      <div className="video-info my-2 lg:max-w-[35%] xl:max-w-[40%] lg:space-y-4">
        <h1 className=' text-3xl md:text-5xl px-4 font- text-center my-2'> What is MPI®?</h1>
        <p className='text-md font-light '>The MPI® Premium Strategy brings the advantages of leveraged life insurance to everyday Americans, helping people from all walks of life achieve the financial freedom they desire and deserve.</p>
        <div className='hidden md:flex justify-center'>
          <button className='bg-yellow-500 text-black px-12 text-center py-2 rounded-md md:flex justify-center hidden'>
            Learn More
          </button>
        </div>
      </div>
      <div className="md:ml-4 video">
        <video
          className="rounded-lg shadow-lg object-cover object-center h-[500px] lg:h-[400px]"
          controls
          poster={poster}
        >
          <source
            src={HomeMp4}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='flex justify-center lg:hidden'>
        <button className='bg-yellow-500 text-black block px-12 text-center py-2 rounded-md'>
          Learn More
        </button>
      </div>
    </div>
  );
}

export default HomeVideo;
