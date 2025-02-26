/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState , useEffect, useRef} from 'react';
import { Helmet } from 'react-helmet';
//import { Dialog } from "@headlessui/react";
//import { PlayCircleIcon } from "@heroicons/react/24/solid";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import churchVideo from '../assets/video/church.mp4';
import image2 from '../assets/img/pexels-field-engineer-147254-442150.jpg';
import image3 from '../assets/img/pexels-pixabay-60504.jpg';
import image4 from '../assets/img/pexels-shvetsa-3727469.jpg';
import image5 from '../assets/img/pexels-tara-winstead-8386440.jpg';
import church1 from '../assets/img/chuch1.jpg';
import church2 from '../assets/img/church2.jpg';
import { Button, Paper } from '@mui/material';
import Ratings from '../components/Ratings';
import youth from '../assets/img/youth.jpg'
import usher from '../assets/img/usher.jpg'
import LogoMarquee from '../components/LogoMarquee';
import Newsletter from '../components/Newsletter';
import img4 from '../assets/img/altar2.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import {
  faArrowCircleDown,
  faCalendar,
 faMap,
 faPeopleGroup,
 faPerson,
 faPlayCircle
}from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
import Altar from '../assets/img/childrens.jpg'
import {Dialog  , DialogActions} from '@mui/material';


import childrens from '../assets/img/childrens.jpg'
import LogoMarquee1 from '../components/LogoMarquee1';
import choir from '../assets/img/choirs.jpg'
import children from '../assets/img/childrenss.jpg'
import women from '../assets/img/women.jpg'
import Modal from "react-modal"


const Home = ({isVisible}) => {

  const [showBank , setShowBank] =useState(false)


  const bankPopup =()=>{
    const isMobile = /iPhone|iPod|iPad|Andriod/i.test(navigator.userAgent);

    if(isMobile){
      window.location.href="https://play.google.com/store/apps/details?id=com.firstbank.firstmobile"
    }else {
      setShowBank(true)
    }
  }
 
  const bankSelection =(bank)=>{
    switch(bank){
    case 'First Bank':
      window.open("https://play.google.com/store/apps/details?id=com.firstbank.firstmobile");
      break
      case 'Uba Bank':
        window.open("https://play.google.com/store/apps/details?id=com.uba.vericash");
        break
        case 'Zenith bank':
          window.open("https://play.google.com/store/apps/details?id=com.zenithBank.eazymoney");
          break
          default:
          break;
    }
  } 

  /*const settings = {
    //dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };*/
  const scrollToLast = () =>{
    const lastItem = document.getElementById('last-item')
    if(lastItem){
      lastItem.scrollIntoView({behavior:'smooth'})
    }
  }
 const joinRef = useRef(null)

 const scrollToJoin = () =>{
  joinRef.current?.scrollIntoView({ behaviour:'smooth'})
 }

  const donateRef = useRef(null)

  const scrollDonate =() =>{
     donateRef.current?.scrollIntoView({ behaviour:'smooth'})
  }
  const images = [
    {
      video: churchVideo,
        text4:'Join In Person',
        text5:'Donate now',
      alt: 'Experience God’s love and grace in a welcoming community where faith grows, hope thrives, and everyone is cherished.',

       
    },
    
  ];

  const services = [
    { title: "Children's Ministry", image: children },
    { title: "Youth Ministry", image: youth },
    { title: "Choir", image: choir },
  ];

  const scriptures =[
    {
      id:1,
      title: 'Make a difference today',
      description:'Loving God, loving other and serving the world !',
      text3:'Experience God’s love and grace in a welcoming community where faith grows, hope thrives, and everyone is cherished.',

    },
   
  ]
  
  const onlines = [
    {
      id: 2,
      title: "Online Service",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiRLv009OfrS4zCl_52z7SLhyJCZRB1frOIQ&s",
      video: "https://youtu.be/Xg9CJoD3eYE",
    },
  ]
  
  
  const [isOpen, setIsOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState("")
  const [currentIndex, setCurentIndex] = useState(0)

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurentIndex((prevIndex) => (prevIndex + 1) % scriptures.length )
    },2000) ;

  return () => clearInterval(interval)

  },[])

  const Currentscripture = scriptures[currentIndex]


  useEffect(() => {
    // Set the app element to the document body
    Modal.setAppElement(document.body)
  }, [])

  /*const openVideo = (videoUrl: string) => {
    const embedUrl = videoUrl.replace("youtu.be/", "www.youtube.com/embed/")
    setCurrentVideo(embedUrl)
    setIsOpen(true)
  }*/
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet >
        <title>Home - Welcome to churh</title>
        <meta
          name="description"
          content="Come and worship with us as we preach the gospel"
        />
        <meta name="keywords" content="chuch, gospel , thanksgiving, prayer" />
      </Helmet>

      <motion.main 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="w-full h-auto overflow-hidden font-Fira">
        {/* Hero Slider */}
       

        <section aria-label="Hero Slider" className="w-full">
      {images.map((item, index) => (
        <article key={index} className="relative w-full h-80 sm:h-96 md:h-[500px] lg:h-[600px]  filter drop-shadow-lg"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)', // Curved triangle shape
          filter:'drop-shadow(0 8px 8px rgba(0, 0, 0, 0.8))'
          
        }}>
          <video
            src={item.video}
            className="w-full h-full object-cover brightness-110"
            loading="lazy"
            autoPlay
            loop
            muted
          />
  {/*<Slider {...settings}>
            {images.map((item, index) => (
              <article key={index} className="relative w-full h-80 md:h-[500px]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white text-center p-4"
                  role="region"
                  aria-label={`Slide ${index + 1}`}
                >
                  <h1 className="text-lg md:text-2xl font-bold mb-2">{item.text1}</h1>
                  <p className="text-sm md:text-base">{item.text2}</p>
                </div>
              </article>
            ))}
          </Slider>*/}
          {Currentscripture && (
            <div
              className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white text-center p-4 space-y-6 sm:space-y-8"
              role="region"
              aria-label={`Slide ${index + 1}`}
            >
             <div className=' leading-3'>
             <p className="text-sm sm:text-base md:text-base font-bold mb-2 my-4 text-[#ec3237]">
                {Currentscripture.title}
              </p>
              <h1 className="text-lg sm:text-2xl md:text-5xl font-bold">
                {Currentscripture.description}
              </h1>
              <p className="text-sm sm:text-base">{Currentscripture.text3}</p>
              <p className="text-sm sm:text-base">{Currentscripture.name}</p>


             </div>
              <div className="flex flex-wrap justify-center gap-4">
              {/* Main screen button*/}
                  <Button
                  className="hidden md:block"
                    variant="contained"
                    onClick={scrollToJoin}
                    sx={{
                      backgroundColor: '#ec3237',
                      '&:hover': { backgroundColor: '#c1272d' },
                      color: 'white',
                      borderRadius: '8px',
                      display: { xs: 'none', md: 'block' },
                      
                     
                    }}
                    aria-label="Contact Us for Consultation"
                  >
                    {item.text4}
                  </Button>
        
                    {/*Mobile button */}

                    <Button
  className="sm:hidden md:hidden lg:hidden xl:hidden"
  variant="contained"
  onClick={scrollToJoin}
  sx={{
    backgroundColor: '#ec3237',
    '&:hover': { backgroundColor: '#c1272d' },
    color: 'white',
    borderRadius: '8px',
    display: { xs: 'block', md: 'none' }, // Visible on mobile, hidden on larger screens
    padding: '4px 8px', // Smaller padding
    fontSize: '0.75rem', // Smaller font size
    minWidth: 'auto', // Remove minimum width
  }}
  aria-label="Contact Us for Consultation"
>
  <p className="text-xs">{item.text4}</p>
</Button>
        
             {/* main screen */}
                  <Button
                    variant="contained"
                    onClick={scrollDonate}
                    sx={{
                      backgroundColor: 'white',
                      '&:hover': { backgroundColor: '#f3f3f3' },
                      color: '#ec3237',
                      borderRadius: '8px',
                      display: { xs: 'none', md: 'block' },
                    }}
                    aria-label="Learn More"
                  >
                    {item.text5}
                  </Button>

                  {/* mobile button */}
                  <Button
                    variant="contained"
                    onClick={scrollDonate}
                    sx={{
                      backgroundColor: 'white',
                      '&:hover': { backgroundColor: '#f3f3f3' },
                      color: '#ec3237',
                      borderRadius: '8px',
                      display: { xs: 'block', md: 'none' }, // Visible on mobile, hidden on larger screens
    padding: '4px 8px', // Smaller padding
    fontSize: '0.75rem', // Smaller font size
    minWidth: 'auto', // Remove minimum width
                    }}
                    aria-label="Learn More"
                  >
                    {item.text5}
                  </Button>
              </div>
              <div
        className="flex relative top-5 sm:top-40 justify-center mt-8   cursor-pointer animate-bounce"
        onClick={scrollToLast}
        aria-label="Scroll to last item"
      >
        <FontAwesomeIcon icon={faArrowCircleDown} className=" text-xl sm:text-4xl text-[#ec3237]" />
      </div>
            </div>
          
          )}
        
        </article>
        
      ))}

      <LogoMarquee />
    </section>



        {/* Consultation Section */}
        <motion.section
  className="flex flex-col md:flex-row w-full py-16 md:py-32 px-6 md:px-12"
  aria-labelledby="consultation-heading"
>
  {/* Image Section */}
  <motion.div
    initial={{ x: '-100vw' }}
    animate={{ x: 0 }}
    exit={{ x: '100vw' }}
    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    className="flex w-full md:w-1/2 items-center justify-center" // Center the image
  >
    <div className="rounded-br-[100px] overflow-hidden w-full md:w-11/12 lg:w-10/12">
      <img
        src={church1}
        alt="church"
        className="w-full h-auto object-cover brightness-110 rounded-br-[150px]"
        loading="lazy"
      />
    </div>
  </motion.div>

  {/* Text Content Section */}
  <div
    className="bg-white w-full md:w-1/2 px-6 py-8 md:px-12 md:py-10 flex flex-col justify-center" // Center text vertically
    role="region"
  >
    <h2
      id="about-us"
      className="text-base md:text-xl font-bold text-[#ec3237] mb-4"
    >
      ABOUT US
    </h2>

    <h1 className="font-bold text-2xl sm:text-4xl text-black mb-4">
      Faith, Hope, and Love in Action everyday
    </h1>
    <p className="text-sm md:text-base text-black mb-6 leading-relaxed">
      We are a vibrant community of believers dedicated to worship, fellowship,
      and service. Our mission is to share God’s love, grow in faith, and make
      a positive impact in the world through compassionate outreach and
      meaningful connections.
    </p>
    <p className="text-sm md:text-base text-black mb-6 leading-relaxed">
      Our church is a welcoming place where everyone can find support,
      inspiration, and a sense of belonging. Together, we strive to live out
      our faith and make a difference.
    </p>

    {/* Goals Grid */}
    <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
      <div>
        <div className="flex space-x-2">
          <FontAwesomeIcon icon={faPerson} className="text-[#ec3237]" />
          <p>Share God's Love</p>
        </div>
        <div className="flex space-x-2">
          <FontAwesomeIcon icon={faPerson} className="text-[#ec3237]" />
          <p>Foster spiritual growth</p>
        </div>
      </div>
      <div>
        <div className="flex space-x-2">
          <FontAwesomeIcon icon={faPeopleGroup} className="text-[#ec3237]" />
          <p>Serve our community</p>
        </div>
        <div className="flex space-x-2">
          <FontAwesomeIcon icon={faPeopleGroup} className="text-[#ec3237]" />
          <p>Build strong relationships</p>
        </div>
      </div>
    </div>

    {/* Button */}
    <NavLink to="/about-us">
      {/*main screen button*/}
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#ec3237', // Custom pink color
          '&:hover': {
            backgroundColor: '#000', // Darker pink on hover
          },
          color: 'white', // Ensures text color is white
          marginTop: '1rem', // Adds spacing from the grid above
          borderRadius: '8px',
          display: { xs: 'none', md: 'block' },
        }}
        aria-label="Contact Us for Consultation"
      >
        Read More About Us
      </Button>

      {/*mobile screen button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#ec3237', // Custom pink color
          '&:hover': {
            backgroundColor: '#000', // Darker pink on hover
          },
          color: 'white', // Ensures text color is white
          marginTop: '1rem', // Adds spacing from the grid above
          borderRadius: '8px',
          display: { xs: 'block', md: 'none' }, // Visible on mobile, hidden on larger screens
    padding: '4px 8px', // Smaller padding
    fontSize: '0.55rem', // Smaller font size
    minWidth: 'auto', // Remove minimum width
        }}
        aria-label="Contact Us for Consultation"
      >
        Read More About Us
      </Button>
    </NavLink>
  </div>
</motion.section>

        {/* Testimonials Section */}
        <section
  className="my-5 px-4 ease-linear bg-[#ec3237] py-12 md:py-16 lg:py-20 font-Fira"
  aria-labelledby="testimonials-heading"
>
  {/* Heading */}
  <h2
    id="testimonials-heading"
    className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 text-white"
  >
    Worship with us
  </h2>
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center uppercase mb-3">
    Join us on Sunday at
  </h1>
  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center uppercase mb-8">
    8:00 & 9:00 AM
  </p>

  {/* Content Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Full Image */}
    <div className="relative flex flex-col items-center">
      <img
        src={youth}
        alt="Altar"
        className="w-full md:w-11/12 max-w-[600px] brightness-125 rounded-br-[80px] md:rounded-br-[100px]"
      />

      {/* Overlay Content */}
      <div className="absolute top-1/3 md:top-3/4 w-11/12 md:w-10/12 max-w-[500px] bg-white px-6 py-4 rounded-br-[40px] md:rounded-br-[60px] shadow-lg text-center">
        <h1 className="font-bold text-lg md:text-2xl text-gray-800">
          Youth Worship
        </h1>
        <p className="text-sm md:text-base text-gray-600">
          Engaging teens in faith, fellowship, and growth.
        </p>
      </div>
    </div>

    {/* Worship Sections */}
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 1.5 }}
      className="space-y-6 md:space-y-8"
    >
      {/* Worship Items */}
      {[
        {
          title: "Children's Worship",
          desc: "Fun, faith-filled worship for kids ages 4-12.",
        },
        {
          title: "Sunday School Worship",
          desc: "Learning and worship for all ages.",
        },
        {
          title: "Children's Worship",
          desc: "Fun, faith-filled worship for kids ages 4-12.",
        },
      ].map((item, index) => (
        <div key={index} className="flex items-start space-x-4">
          <img
            src={Altar}
            alt={item.title}
            className="w-5/12 sm:w-4/12 md:w-3/12 max-w-[160px] brightness-125 rounded-br-[40px] md:rounded-br-[50px]"
          />
          <div>
            <p className="text-lg md:text-xl font-semibold">{item.title}</p>
            <p className="text-sm md:text-base text-gray-800">{item.desc}</p>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
</section>


{/*<section className='border w-11/12 mx-auto px-4 sm:px-6 h-auto bg-[#ec3237] rounded-br-full py-8 sm:py-10'>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
    <div className='text-white'>
      <h1 className='text-white text-3xl sm:text-4xl font-bold'>350+</h1>
      <p className='text-sm sm:text-base'>Oldest Member</p>
      <p className='text-xs sm:text-sm'>
        Our oldest member is Mary Thompson, who is 95 years old and has been attending since 1945.
      </p>
    </div>
    <div className='text-white'>
      <h1 className='text-white text-3xl sm:text-4xl font-bold'>350+</h1>
      <p className='text-sm sm:text-base'>Oldest Member</p>
      <p className='text-xs sm:text-sm'>
        Our oldest member is Mary Thompson, who is 95 years old and has been attending since 1945.
      </p>
    </div>
    <div className='text-white'>
      <h1 className='text-white text-3xl sm:text-4xl font-bold'>350+</h1>
      <p className='text-sm sm:text-base'>Oldest Member</p>
      <p className='text-xs sm:text-sm'>
        Our oldest member is Mary Thompson, who is 95 years old and has been attending since 1945.
      </p>
    </div>
    <div className='text-white'>
      <h1 className='text-white text-3xl sm:text-4xl font-bold'>350+</h1>
      <p className='text-sm sm:text-base'>Oldest Member</p>
      <p className='text-xs sm:text-sm'>
        Our oldest member is Mary Thompson, who is 95 years old and has been attending since 1945.
      </p>
    </div>
  </div>
</section>*/}


<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12 px-6 md:px-12 lg:px-10 font-Fira">
  <div className="flex flex-col justify-center items-start">
    <h2 className="text-[#ec3237] text-sm font-bold">OUR MISSION</h2>
    <h1 className="leading-10 my-8 font-extrabold text-3xl md:text-4xl uppercase">
    Walking  <span className="text-[#ec3237]">in Dominion</span>
    </h1>
    <p className="my-6 text-black font-bold text-center text-base md:text-lg">
    Genesis 1:26-28; Luke 10:19
    </p>
    <div className="flex items-center space-x-4 my-6">
      <div className="border border-[#ec3237] h-20 w-0"></div>
      <p className="text-sm md:text-base w-full">
      our mission to serve the NAF Community through pastoral care, robust Biblical guidance, build the spiritual and moral resilience of personnel in order to fulfil Airpower tasks demanded by National Defense and security imperatives.
      </p>
    </div>
   <NavLink to='/contact-us'>
   <Button
      type=""
      variant="contained"
      sx={{
        backgroundColor: '#ec3237',
        '&:hover': {
          backgroundColor: '#000',
        },
        color: 'white',
        marginTop: '1rem',
        borderRadius: '8px',
        padding: '0.5rem 1.5rem',
      }}
      aria-label="Contact Us for Consultation"
    >
      Contact Now
    </Button>
   </NavLink>
    
  </div>

  <div className="flex justify-center items-center">
    <img
      src={img4}
      alt="altar"
      className="object-cover w-full h-auto max-w-md md:max-w-lg brightness-125 lg:max-w-xl rounded-br-[120px]"
    />
  </div>
</section>

<section
  className="px-6 py-24 min-h-screen flex flex-col justify-center font-sans relative overflow-hidden"
  style={{
    background: `
      linear-gradient(45deg, #ec3237 25%, #d42a2f 25%, #d42a2f 75%, #ec3237 75%, #ec3237),
      linear-gradient(-45deg, #ec3237 25%, #d42a2f 25%, #d42a2f 75%, #ec3237 75%, #ec3237)
    `,
    backgroundSize: '60px 60px', // Adjust diamond size here
    backgroundColor: '#ec3237', // Fallback background color
  }}
>
  {/* Header Section */}
  <div className="text-center mb-12 relative z-10">
    <p className="text-sm md:text-base text-white uppercase tracking-wide font-bold">
      Online service
    </p>
    <h1 className="font-bold text-2xl md:text-4xl text-black leading-snug mt-2">
      Come and worship with us{' '}
      <span className="text-white">together</span>
    </h1>
  </div>

  {/* Video Section */}
  <div
    className="relative aspect-w-16 aspect-h-9 aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg z-10"
    ref={joinRef}
  >
    <iframe
      src="https://www.youtube.com/embed/Xg9CJoD3eYE"
      title="YouTube Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>

  {/* Logo Marquee */}
  <div className="mt-10 font-Fira relative z-10">
    <LogoMarquee1 />
  </div>
</section>

{/* Red Background Section */}
<section
      className=" px-3 py-5 md:px-6 md:py-10 bg-[#ec3237] text-white text-center font-Fira"
      aria-labelledby="testimonials-heading"
      style={{
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)', // Curved triangle shape
    filter: 'drop-shadow(0 8px 8px rgba(0, 0, 0, 0.8))',
    background: `
      linear-gradient(90deg, #ec3237 25%, #d42a2f 25%, #d42a2f 40%, #ec3237 75%, #ec3237),
      linear-gradient(-90deg, #ec3237 25%, #d42a2f 25%, #d42a2f 40%, #ec3237 75%, #ec3237)
    `,
    backgroundSize: '10px 5px', // Adjust diamond size here
    backgroundColor: '#ec3237', // Fallback background color
  }}
      
    >
      {/* Header Section */}
     <motion.div 
     className='relative  ease-in duration-100 '>
     <div className="max-w-3xl mx-auto">
        <p className="text-sm md:text-base uppercase tracking-wide font-semibold">
          Church group
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-snug my-6 text-black">
          Loving God, helping others, and serving the{" "}
          <span className="text-[#ffff]">world together</span>
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" ,stiffness:100}}
           
          >
            <Paper
              className="relative  overflow-hidden shadow-lg rounded-br-[100px]"
              sx={{
                backgroundColor: "#fff",
                height: "auto",
                minHeight: "500px",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover bg-black opacity-95 brightness-105 contrast-125 saturate-110 filter rounded-br-[100px] "
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 p-6 text-start "
              >
                <p className="text-lg md:text-xl font-medium text-white">
                  {service.title}
                </p>
              </motion.div>
            </Paper>
          </motion.div>
        ))}
      </div>
     </motion.div>
    </section>

{/* Additional Section */}
<section className="px-4 py-16 bg-white text-center font-Fira">
  <p className="text-gray-800 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
    Explore the exciting new ways we are serving our community and growing
    together in faith with our latest ministry initiatives.{" "}
    <a
      href="#"
      className="text-[#ec3237] font-bold hover:underline"
    >
     <NavLink to='/ministry'>View All Ministries</NavLink> 
    </a>
  </p>
</section>

<motion.section className="py-16 px-8 sm:px-16 lg:px-24 bg-gray-50 font-Fira">
  <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      <motion.img
        src={church1}
        alt="Night Vigil"
        className="w-full h-auto rounded-br-[100px] shadow-lg"
      />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6 text-center lg:text-left"
    >
      <motion.p className="text-sm uppercase text-[#ec3237] tracking-widest font-bold">
        Upcoming Event
      </motion.p>
      <motion.h2 className="text-3xl font-bold text-gray-800">
        Church Night {''}
        <span className="text-[#ec3237]">Vigil</span>
      </motion.h2>

      <motion.div className="flex items-center justify-center lg:justify-start space-x-3">
        <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[#faacaf]">
          <FontAwesomeIcon icon={faCalendar} className="text-[#ec3237]" />
        </div>
        <p className="text-gray-700">Feb 28, 2025 - 9:00 PM to 3:00 AM</p>
      </motion.div>

      <motion.div className="flex items-center justify-center lg:justify-start space-x-3">
        <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[#faacaf]">
          <FontAwesomeIcon icon={faMap} className="text-[#ec3237]" />
        </div>
        <p className="text-gray-700">St Stephen's Protestant Church</p>
      </motion.div>

      <motion.p className="text-gray-600">
        Bring your family, friends, and burdens—God is ready to move!
      </motion.p>
    </motion.div>
  </motion.div>
</motion.section>

<motion.section>
  <motion.div
    className="relative w-full px-6 py-16 bg-gray-900 text-white overflow-hidden"
    aria-labelledby="Donate now"
  >
    {/* Background Image with Overlay */}
    <motion.img
      src={church1}
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover brightness-125 z-0 opacity-40"
    />

    {/* Container */}
    <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
      {/* Video Section */}
     

      {/* Donation Info Section */}
      <motion.div
        className="flex justify-center items-center"
        ref={donateRef}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
      >
        <Paper className="w-full p-8 rounded-xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/10">
          <div className="text-center">
            {/* Donation Header */}
            <p className="text-[#ec3237] text-lg font-bold uppercase tracking-wide">
              Donate Now
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Support Our Mission
            </h2>
            <p className="text-gray-300 mt-4 text-lg">
              Your generous support enables us to continue spreading God’s love and serving our community.
            </p>

            {/* Bank Details */}
            <div className="hidden md:block sm:block lg:block xl:block mt-8 border-t border-gray-600 pt-8">
              <p className="text-xl font-bold text-gray-300">Account Information</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-gray-300">
                <div>
                  <p className="font-semibold">Bank Name</p>
                  <p className="text-gray-400">[First Bank]</p>
                </div>
                <div>
                  <p className="font-semibold">Account Name</p>
                  <p className="text-gray-400">[St Stephen's Military Church]</p>
                </div>
                <div className="col-span-2">
                  <p className="font-semibold">Account Number</p>
                  <p className="text-gray-400">[3031412875]</p>
                </div>
              </div>
            </div>

             {/* Bank Details mobile */}
            <div className="sm:hidden md:hidden lg:hidden xl:hidden mt-8 border-t border-gray-600 pt-8">
              <p className="text-xl font-bold text-gray-300">Account Information</p>
              <div className="grid grid-cols-2 gap-6 mt-6 text-gray-300">
                <div className="col-span-2">
                  <p className="font-semibold">Bank Name</p>
                  <p className="text-gray-400">[First Bank]</p>
                </div>
                <div className="col-span-2">
                  <p className="font-semibold">Account Name</p>
                  <p className="text-gray-400">[St Stephen's Military Church]</p>
                </div>
                <div className="col-span-2">
                  <p className="font-semibold">Account Number</p>
                  <p className="text-gray-400">[3031412875]</p>
                </div>
              </div>
            </div>
            {/* Call-to-Action Button */}
            <div className="mt-8">
              <Button
                variant="contained"
                onClick={bankPopup}
                sx={{
                  backgroundColor: '#ec3237',
                  '&:hover': { backgroundColor: '#c1272d' },
                  color: 'white',
                  padding: '12px 24px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  borderRadius: '8px',
                  textTransform: 'none',
                }}
                aria-label="Donate Now"
              >
                Donate Now
              </Button>
            </div>
          </div>
        </Paper>
      </motion.div>
    </div>
     {/* Bank Selection Popup */}
     {showBank && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Select Your Bank</h3>
              <div className="space-y-4">
                <Button
                  variant="contained"
                  onClick={() => bankSelection('First Bank')}
                  sx={{
                    backgroundColor: '#ec3237',
                    '&:hover': { backgroundColor: '#c1272d' },
                    color: 'white',
                    padding: '12px 24px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    textTransform: 'none',
                    width: '100%',
                  }}
                >
                  First Bank
                </Button>
                <Button
                  variant="contained"
                  onClick={() => bankSelection('Uba Bank')}
                  sx={{
                    backgroundColor: '#ec3237',
                    '&:hover': { backgroundColor: '#c1272d' },
                    color: 'white',
                    padding: '12px 24px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    textTransform: 'none',
                    width: '100%',
                  }}
                >
                 Uba Bank
                </Button>
                <Button
                  variant="contained"
                  onClick={() => bankSelection('Zenith bank')}
                  sx={{
                    backgroundColor: '#ec3237',
                    '&:hover': { backgroundColor: '#c1272d' },
                    color: 'white',
                    padding: '12px 24px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    textTransform: 'none',
                    width: '100%',
                  }}
                >
                Zenith bank
                </Button>
              </div>
              <Button
                variant="outlined"
                onClick={() => setShowBank(false)}
                sx={{
                  marginTop: '16px',
                  color: '#ec3237',
                  borderColor: '#ec3237',
                  '&:hover': { borderColor: '#c1272d' },
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
  </motion.div>
</motion.section>


        {/* Newsletter Section */}
       
      </motion.main>
    </>
  );
};

export default Home;
