import HomeMp4 from '../assets/Home-Page-Video-2.0.mp4';
import poster from '../assets/poster.png';

function HomeVideo() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between mx-2 items-center h-100 bg-gray-100">
      <div className="md:mr-4 video-info px-8 my-2 md:w-1/2">
        <h1 className=' text-3xl md:text-5xl px-4 font-bold my-2'> What is MPI®?</h1>
        <p className='md:text-xl text-sm '>The MPI® Premium Strategy brings the advantages of leveraged life insurance to everyday Americans, helping people from all walks of life achieve the financial freedom they desire and deserve.</p>
        <button className='bg-yellow-500 text-black block px-12 text-center py-2 rounded-md md:w-auto md:mx-0 my-3 mx-2 md:mx-0'>
          Learn More
        </button>
      </div>
      <div className="md:ml-4 video md:w-1/2">
        <video
          className="h-200  md:w-3/4 lg:w-3/4 rounded-lg shadow-lg object-cover object-center"
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
    </div>
  );
}

export default HomeVideo;
