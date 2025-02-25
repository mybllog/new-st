import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Message, Phone } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/WhatsApp_Image_2024-10-20_at_09.03.19_6578ea68-removebg-preview (1).png';
import nafrc from '../assets/img/nafrc-removebg-preview.png'
const Footer = () => {
 const logo1 = logo
 const logo2 = nafrc
 const [currentLogo , setCurrentLogo] = useState(logo1)
  
  useEffect(()=>{
const interval = setInterval(()=>{
  setCurrentLogo((prevLogo)=>(prevLogo === logo2 ? logo1 : logo2))
},1000)

  return () => clearInterval(interval)
  },[])

  return (
    <footer className="w-full bg-black py-8 text-white font-Fira">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="flex flex-col space-y-6">
          <div className=' flex'>
            <img src={currentLogo} alt='logo' className='h-16 transition-all  duration-500 ease-in-out transform scale-110 opacity-100'/>
          </div>
            <p className="text-base text-gray-400 leading-6 break-words">
              Build a firm digital foundation
              <br />
              with our service offering and expert consultations.
            </p>
            <div className="flex space-x-4">
            <a href="https://web.facebook.com/?_rdc=1&_rdr#">
            <FontAwesomeIcon
                icon={faFacebook}
                className="text-lg text-[#ec3237]  cursor-pointer rounded-full h-6 w-6 hover:bg-white"
              />
            </a>
             <a href='#'>
             <FontAwesomeIcon
                icon={faInstagram}
                className="text-lg text-[#ec3237] cursor-pointer rounded-full h-6 w-6 hover:bg-white"
              />
             </a>
             
             <a href='#'>
             <FontAwesomeIcon
                icon={faTwitter}
                className="text-lg text-[#ec3237]  cursor-pointer rounded-full h-6 w-6 hover:bg-white"
              />
             </a>
             
            </div>
          </div>

          {/* Middle Section */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Company</h2>
            <ul className="space-y-2">
              <li><NavLink to="/" className="text-gray-400 hover:text-[#ec3237]">Home</NavLink></li>
              <li><NavLink to="/about-us" className="text-gray-400 hover:text-[#ec3237]">About Us</NavLink></li>
              <li><NavLink to="/contact-us" className="text-gray-400 hover:text-[#ec3237]">Contact Us</NavLink></li>
              <li><NavLink to="/services" className="text-gray-400 hover:text-[#ec3237]">Services</NavLink></li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Head Office</h2>
            <p className="text-gray-400 text-sm mb-2">
              Nigerian Armed Forces Resettlement Centre (NAFRC), Oshodi
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Message className="text-[#ec3237]" />
              <p className="text-sm">st.stephenprotestantchurch@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 mt-2">
              <Phone className="text-[#ec3237]" />
              <p className="text-sm">+234 901 628 2357</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} St. Stephen's Protestant Church. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;