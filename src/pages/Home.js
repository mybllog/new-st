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
  /*const settings = {
    //dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };*/
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
      title: 'make a difference today',
      description:'Loving God, loving other and serving the world !',
      text3:'Experience God’s love and grace in a welcoming community where faith grows, hope thrives, and everyone is cherished.',

    },
    {
      id:2,
     name:'Now it came to pass, afterward, that He went through every city and village, preaching and bringing the glad tidings of the kingdom of God. And the twelve were with Him, and certain women who had been healed of evil spirits and infirmities... provided for Him from their substance',
      text4:'Luke 8:1-3 NKJV'
    },

    {
      id:3,
     name:' The LORD is known by the judgment which He executeth: The wicked is snared in the work of His own hands. Higgaion',
     text4:'PSALM 9:16'
    }
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
        <article key={index} className="relative w-full h-80 sm:h-96 md:h-[500px] lg:h-[600px]">
          <video
            src={item.video}
            className="w-full h-full object-cover"
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
              <p className="text-sm sm:text-lg md:text-2xl font-bold mb-4 md:mb-2 text-[#ec3237]">
                {Currentscripture.title}
              </p>
              <h1 className="text-lg sm:text-2xl md:text-5xl font-bold">
                {Currentscripture.description}
              </h1>
              <p className="text-sm sm:text-base">{Currentscripture.text3}</p>
              <p className="text-sm sm:text-base">{Currentscripture.name}</p>
              <p className="text-sm sm:text-base">{Currentscripture.text4}</p>

              <div className="flex flex-wrap justify-center gap-4">
              
                  <Button
                    variant="contained"
                    onClick={scrollToJoin}
                    sx={{
                      backgroundColor: '#ec3237',
                      '&:hover': { backgroundColor: '#c1272d' },
                      color: 'white',
                      borderRadius:'100%',
                      paddingX: '20px',
                      paddingY: '10px',
                    }}
                    aria-label="Contact Us for Consultation"
                  >
                    {item.text4}
                  </Button>
        

             
                  <Button
                    variant="contained"
                    onClick={scrollDonate}
                    sx={{
                      backgroundColor: 'white',
                      '&:hover': { backgroundColor: '#f3f3f3' },
                      color: '#ec3237',
                      borderRadius:'100%',
                      paddingX: '20px',
                      paddingY: '10px',
                    }}
                    aria-label="Learn More"
                  >
                    {item.text5}
                  </Button>
               
              </div>
            </div>
          )}
        </article>
      ))}

      <LogoMarquee />
    </section>



        {/* Consultation Section */}
        <motion.section
  className="flex flex-col md:flex-row w-full py-16 md:py-20"
  aria-labelledby="consultation-heading"
>
  {/* Image Section */}
  <motion.div
  initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '100vw' }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
   className="flex flex-col md:flex-row w-full md:w-1/2 space-y-6 md:space-y-0 relative font-Fira">
    <div className="rounded-br-[100px] overflow-hidden w-full md:w-10/12">
      <img
        src={church1}
        alt="church"
        className="w-full h-auto object-cover  brightness-110 rounded-br-[150px]"
        loading="lazy"
      />
    </div>
    <div className="absolute top-1/2 left-1/4 transform -translate-y-10  brightness-110  -translate-x-28">
      <img
        src={church1}
        alt="Church"
        className="w-8/12 md:w-10/12 object-cover rounded-br-[100px]"
        loading="lazy"
      />
    </div>
  </motion.div>

  {/* Text Content Section */}
  <div
    className="bg-white w-full md:w-1/2 px-6 py-8 md:px-12 md:py-10"
    role="region"
  >
    <h2
      id="about-us"
      className="text-2xl md:text-xl font-bold text-gray-800 mb-4"
    >
      ABOUT US
    </h2>

    <h1 className="font-bold text-4xl  text-black mb-4">
      Faith, hope, and love in action every day
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
        <div className='flex space-x-2'>
        <FontAwesomeIcon icon={faPerson} className='text-[#ec3237]' />
        <p>Share God's Love</p>
        </div>
       <div className='flex space-x-2'>
       <FontAwesomeIcon icon={faPerson} className='text-[#ec3237]' />
       <p>Foster spiritual growth</p>
       </div>
      </div>
      <div>
       <div className='flex space-x-2'>
       <FontAwesomeIcon icon={faPeopleGroup} className='text-[#ec3237]' />
       <p>Serve our community</p>
       </div>
        <div className='flex space-x-2'>
        <FontAwesomeIcon icon={faPeopleGroup} className='text-[#ec3237]' />
        <p>Build strong relationships</p>
        </div>
      </div>
    </div>

    {/* Button */}
    <NavLink to='/about-us'>
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#ec3237', // Custom pink color
        '&:hover': {
          backgroundColor: '#000', // Darker pink on hover
        },
        color: 'white', // Ensures text color is white
        marginTop: '1rem', // Adds spacing from the grid above
        borderRadius:'100%'
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
  className="my-5 px-4 ease-linear bg-[#f2a6a8] py-12 md:py-16 lg:py-20 font-Fira"
  aria-labelledby="testimonials-heading"
>
  {/* Heading */}
  <h2
    id="testimonials-heading"
    className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 text-[#ec3237]"
  >
    Worship with us
  </h2>
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center uppercase mb-3">
    Join us on Sunday at
  </h1>
  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ec3237] text-center uppercase mb-8">
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
        borderRadius: '100%',
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

<section className="px-6 py-24 bg-[#f2a6a8] min-h-screen flex flex-col justify-center font-sans">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-sm md:text-base text-[#ec3237] uppercase tracking-wide font-bold">Online service</p>
        <h1 className="font-bold text-2xl md:text-4xl text-black leading-snug mt-2">
          Come and worship with us <span className="text-[#ec3237]">together</span>
        </h1>
      </div>

      <div className="relative aspect-w-16 aspect-h-9  aspect-video w-full  max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg" ref={joinRef}>
  <iframe
    src="https://www.youtube.com/embed/Xg9CJoD3eYE"
    title="YouTube Video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    className="w-full h-full "
  ></iframe>
</div>

      {/* Cards Section */}
     {/* <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto w-full">
        {onlines.map((online) => (
          <div
            key={online.id}
            className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 aspect-video"
          >
            <img
              src={online.image || "/placeholder.svg"}
              alt={online.title}
              className="absolute inset-0 w-full h-full object-cover object-center brightness-75"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 text-white p-6 flex flex-col items-center justify-center">
              <p className="text-2xl font-semibold text-center mb-4">{online.title}</p>
              {online.video && (
                <button onClick={() => openVideo(online.video)} className="bg-transparent border-none cursor-pointer">
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    className="w-32 h-32 text-white opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110"
                  />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>*/}

      {/* Video Modal */}
     {/* <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Online Service Video"
        className="modal"
        overlayClassName="overlay"
      >
        <h2 className="text-2xl font-bold mb-4">Online Service Video</h2>
        <p className="mb-4">Watch the online service video below.</p>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={currentVideo}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Close
        </button>
      </Modal>
*/}
      
      <div className="mt-10 font-Fira">
        <LogoMarquee1 />
      </div>
    </section>


{/* Red Background Section */}
<section
      className="px-6 py-10 bg-[#ec3237] text-white text-center font-Fira"
      aria-labelledby="testimonials-heading"
    >
      {/* Header Section */}
     <motion.div 
     className='relative translate-y-16 ease-in duration-100 '>
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
                className="absolute inset-0 w-full h-full object-cover bg-black opacity-95 rounded-br-[100px] "
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

<motion.section className="py-10 px-4 sm:px-8 lg:px-16 bg-gray-50 font-Fira">
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
          <motion.p className="text-sm uppercase text-[#ec3237] tracking-widest font-bold">Upcoming Event</motion.p>
          <motion.h2 className="text-3xl font-bold text-gray-800">Church Night {''}
          <span className='text-[#ec3237]'>Vigil</span></motion.h2>

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
  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
    {/* Video Section */}
    <motion.video
      autoPlay
      muted
      loop
      className="w-full h-auto max-h-[400px] md:max-h-[500px] object-cover rounded-lg shadow-lg"
    >
      {/* Video content */}
    </motion.video>

    {/* Donation Info Section */}
    <motion.div className="flex justify-center items-center"
    ref={donateRef}
   whileHover={{
    scale: 1.1,
    transition: { duration: 0.2 }
  }}
    >
      <Paper className="w-full p-8 rounded-xl bg-white/10 backdrop-blur-lg shadow-xl" >
        <div className="text-center">
          <p className="text-[#ec3237] text-lg font-bold uppercase tracking-wide">
            Donate Now
          </p>
          <h2 className="text-2xl font-semibold mt-2">Support Our Mission</h2>
          <p className="text-gray-300 mt-3">
            Your generous support enables us to continue spreading God’s love and serving our community.
          </p>

          {/* Bank Details */}
          <div className="mt-6 border-t border-gray-600 pt-6">
            <p className="text-lg font-semibold text-gray-300">Account Information</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 text-gray-300">
              <div>
                <p className="font-medium">Bank Name</p>
                <p className="text-gray-400">[First Bank]</p>
              </div>
              <div>
                <p className="font-medium">Account Name</p>
                <p className="text-gray-400">[St Stephen's Military Church]</p>
              </div>
              <div className="col-span-2">
                <p className="font-medium">Account Number</p>
                <p className="text-gray-400">[3031412875]</p>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </motion.div>
  </div>
</motion.div>


        {/* Newsletter Section */}
       
      </motion.main>
    </>
  );
};

export default Home;
