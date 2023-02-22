import logo from '../assets/logo.png';
import { FaTwitter, FaTiktok, FaInstagram, FaFacebook, FaYoutube, FaPinterest } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer flex  text-center flex-col">
      <div className="connect-location flex flex-col md:flex-row bg-gray-100 px-6">
        <div className="location flex items-center flex-col">
          <h2 className="mb-4 text-xl my-3">Location:</h2>
          <p className="px-4 my-1">
            459 N Gilbert Road Suite B-200 Gilbert, 
          </p>
          <p className="px-4 my-1"> AZ 85234 (480) 530-5840</p>
          <p className="px-4 my-1">Cody@mpispecialist.com{" "}</p>
        </div>
        <div className="connect text-center flex flex-col mx-auto my-3">
          <p className="text-xl my-3">Connect With Us :</p>
          <div className="connect-social flex my-2">
            <a href="https://www.tiktok.com/@mpispecialist.com" target='_blank'> <FaTiktok fill="grey" size="24px" className="mx-1 hover:text-yellow-500" /></a>
            <FaYoutube fill="grey" size="24px" className="mx-1" />
           <a href="https://www.instagram.com/mpispecialist" target="_blank"> <FaInstagram fill="grey" size="24px" className="mx-1" /></a>
            <a href="https://www.facebook.com/profile.php?id=100090460991491&mibextid=ZbWKwL"><FaFacebook fill="grey" size="24px" className="mx-1" /></a> 
            <FaPinterest fill="grey" size="24px" className="mx-1" />
            <a href="https://twitter.com/MPISpecialist" target="_blank"><FaTwitter fill="grey" size="24px" className="mx-1" /></a>
          </div>
        </div>
      </div>
      <div className="logo-info bg-black text-white flex flex-col justify-between px-2 items-center font-bold text-center">
        <div className="img">
          <img src={logo} className="h-24 my-4" alt="" />
        </div>
        <p className="my-3 text-xl">
          Copyright © 2023
          <br className="md:hidden" />
          MPI® UNLIMITED LLC. All Rights Reserved.
        </p>
        <p className="mt-2 mb-6 text-xl">
          <a href="#" className="text-white">
            MPI® UNLIMITED
          </a>{" "}
          |{" "}
          <a href="#" className="text-white">
            TERMS
          </a>{" "}
          |{" "}
          <a href="#" className="text-white">
            PRIVACY
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
