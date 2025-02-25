import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import Paper from '@mui/material/Paper';
import image1 from '../assets/img/altar2.jpg';
import { Lightbulb, Star, ChatRounded } from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson, faPeopleGroup} from '@fortawesome/free-solid-svg-icons';
import pastor1 from '../assets/img/ekuma1.jpg'
import pastor2 from '../assets/img/otowo.jpg'
import pastor3 from '../assets/img/venis.jpg'
import altar from '../assets/img/pastoraltar.jpg'
import { NavLink } from 'react-router-dom';
import church1 from '../assets/img/chuch1.jpg';
import church2 from '../assets/img/church2.jpg';
import img4 from '../assets/img/ekuma.jpg'
import churchback from '../assets/img/churchback.jpg'
import CenteredTabs from '../components/tabs';
const About = () => {
  const [activeText, setActiveText] = useState(null);

   const settings = {
    //dots: true,
    infinite: true,
    speed: 600,
    fade:true,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  const images=[
    {
      image:image1,
      alt:'church',
      text1:'About Us'
    },
    {
      image:altar,
      alt:'altar',
      text1:'About Us'
    },
    {
      image:churchback,
      alt:'church',
      text1:'About Us'
    }
  ]
  const services = [
    {
      id: 1,
      img: 'https://store.manifoldcomputers.com/Gbemiga_Delano-1.png',
      name: 'Gbemiga Delano',
      title: 'MD, Chief Executive Officer',
      description: `Gbemiga Delano is the founder, CEO, and visionary of Manifold Computers. A consummate business entrepreneur with over 30 years corporate management experience at the forefront of the delivery of Technology and Enterprise solutions.`,
    },
    {
      id: 2,
      img: 'https://store.manifoldcomputers.com/uju%20-1-.jpg',
      name: 'Uju Nwaobi-onyekwere',
      title: 'Chief Financial Officer',
      description: `Uju Nwaobi-Onyekwere brings over 8 years of dedicated service to Manifold as the Chief Financial Officer...`,
    },
  ];

  const service = [
    { id: 1, title: "Special Event" },
    { id: 2, title: "Online Service" },
    { id: 3, title: "Pastoral Service" },
  ];
  
  const pastors = [
    { title: "FG (REV) EE EKUMA", image: pastor1 },
    { title: "PD OTOWO", image: pastor2 },
    { title: "V ENIS", image: pastor3 },
  ];
  const handleTextToggle = (id) => {
    setActiveText(activeText === id ? null : id);
  };

  return (
    <div className="w-full font-Fira">
      {/* SEO Metadata */}
      <Helmet>
        <title>About Us | St stephen's protestant church</title>
        <meta
          name="description"
          content="Learn about St stephen's church of God, join us and worship"
        />
        <meta name="keywords" content="Church, About, Saint, Stephen's" />
      </Helmet>

      {/* Hero Section */}
      <section className=" text-white text-center font-Fira w-full overflow-hidden">
    <Slider {...settings} className="w-full max-w-[100%]">
      {images.map((item, index) => (
        <article key={index} className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[30rem]">
        <img
  src={item.image}
  alt={item.alt}
  className="w-full h-full object-cover brightness-110 contrast-125 saturate-110 filter"
  loading="lazy"
/>
          <div
            className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white text-center p-4"
            role="region"
            aria-label={`Slide ${index + 1}`}
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-white">
              About Us
            </p>
          </div>
        </article>
      ))}
    </Slider>
  </section>





      {/* Introduction */}
      <motion.section
  className="flex flex-col md:flex-row w-full py-16 md:py-20 px-6 md:px-12"
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
      className="text-2xl md:text-xl font-bold text-gray-800 mb-4"
    >
      ABOUT US
    </h2>

    <h1 className="font-bold text-4xl text-black mb-4">
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

   
  </div>
</motion.section>

      {/* Key Values */}

     {/* <section className='border w-11/12 mx-auto px-4 sm:px-6  bg-[#ec3237] rounded-br-[100px] py-8 my-9'>
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

{/* Red Background Section */}
<section
      className="px-6 py-12 bg-[#ec3237] ease-linear"
      aria-labelledby="services-heading"
      style={{
    background: `
      linear-gradient(90deg, #ec3237 25%, #d42a2f 15%, #d42a2f 65%, #ec3237 65%, #ec3237),
      linear-gradient(-90deg, #ec3237 25%, #d42a2f 15%, #d42a2f 65%, #ec3237 65%, #ec3237)
    `,
    backgroundSize: '20% 20%', // Adjust diamond size here
    backgroundColor: '#ec3237', // Fallback background color
  }}
    >
      {/* Header Section */}
      <div className="text-center mb-12 space-y-4">
  <p className="text-sm md:text-sm text-white uppercase tracking-widest font-semibold">
    Vision & Mission
  </p>
  
  <h1 
    id="services-heading" 
    className="font-extrabold text-2xl md:text-4xl text-black leading-snug"
  >
    Building a Faithful Community Through Love,{" "}
    <span className="text-white">Service, Worship, and Fellowship.</span>
  </h1>
  
  {/* Centered Tabs Component */}
  <div className="mt-6">
    <CenteredTabs />
  </div>
</div>


      {/* Cards Section */}
      {/*<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {service.map((servic) => (
          <Paper
            key={servic.id}
            className="p-6 rounded-br-[40px]"
            sx={{
              backgroundColor: "#fff",
              minHeight: "300px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p className="text-gray-800 text-lg md:text-xl font-medium">
              {servic.title}
            </p>
          </Paper>
        ))}
      </div>
  */}
    </section>
      {/* Management Section */}
     { /*<section className="px-4 py-8">
        <h2 className="text-center text-2xl font-bold mb-8">Executive Management</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <Paper
              key={service.id}
              className="relative overflow-hidden group cursor-pointer"
              onClick={() => handleTextToggle(service.id)}
              component="article"
            >
              <img
                src={service.img}
                alt={`Portrait of ${service.name}`}
                className="w-full h-64 object-cover"
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center transition-opacity duration-300 ${
                  activeText === service.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                <h3 className="text-lg font-bold mb-2">{service.name}</h3>
                <p className="text-md mb-2">{service.title}</p>
                {activeText === service.id && (
                  <p className="text-sm text-center px-4">{service.description}</p>
                )}
              </div>
            </Paper>
          ))}
        </div>
      </section>*/}

      
<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12 px-6 md:px-12 lg:px-10">
<div className="flex justify-center items-center">
    <img
      src={img4}
      alt="altar"
      className="object-cover w-full h-full max-w-md md:max-w-lg lg:max-w-xl rounded-br-[120px]"
    />
  </div>
  <div className="flex flex-col justify-center items-start">
    <h2 className="text-[#ec3237] text-sm font-bold">pastors message</h2>
    <h1 className="leading-10 my-8 font-extrabold text-3xl md:text-4xl uppercase">
   
    Walking in  <span className="text-[#ec3237]">Dominion</span>
    </h1>
    <p className="my-6 text-black font-bold text-base md:text-lg">
    Genesis 1:26-28; Luke 10:19
    </p>
    <div className="flex items-center space-x-4 my-6">
      <div className="border border-[#ec3237] h-20 w-0"></div>
      <p className="text-sm md:text-base w-full">
      our mission to serve the NAF Community through pastoral care, robust Biblical guidance, build the spiritual and moral resilience of personnel in order to fulfil Airpower tasks demanded by National Defense and security imperatives.
      </p>
    </div>
    
    <div className=' mt-4 p-2'>
      <p>FG (REV) EE EKUMA</p>
      <p>Chaplain</p>
    </div>
  </div>

 
</section>
<section
      className="px-6 py-16 bg-[#ec3237] text-white text-center"
      aria-labelledby="testimonials-heading"
    >
      {/* Header Section */}
      <div className="max-w-3xl mx-auto">
        <p className="text-sm md:text-base uppercase tracking-wide font-semibold">
          Chaplain
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-snug my-6">
        Meet Our Chaplains{" "}
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {pastors.map((pastor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          >
            <Paper
              className="relative rounded-br-[200px] overflow-hidden shadow-lg"
              sx={{
                backgroundColor: "#fff",
                height: "auto",
                minHeight: "300px",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <img
                src={pastor.image}
                alt={pastor.title}
                className="absolute inset-0 w-full h-full rounded-br-[200px] object-cover"
              />
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 bg-black bg-opacity-50 p-4  top-60  backdrop-blur-sm "
              >
                <p className="text-lg md:text-xl font-medium text-white">
                  {pastor.title}
                </p>
              </motion.div>
            </Paper>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default About;
