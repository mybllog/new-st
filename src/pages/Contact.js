import React from 'react';
import image1 from '../assets/img/churh3.jpg'
import Map from '../components/Map';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Phone } from '@mui/icons-material';
import { motion , MotionContext } from 'framer-motion';
import call from '../assets/img/phone-call_18182655.png'
import email from '../assets/img/invitation_2931204.png'
import map from '../assets/img/church-location_17875712.png'
const Contact = () => {
  const contactMethods = [
    {
      id: 1,
      icon: call, // Ensure imported correctly
      alt: "Call",
      info: "+234 703 223 9746",
    },
    {
      id: 2,
      icon: email, // Ensure imported correctly
      alt: "Email",
      info: "st.stephenprotestantchurch@gmail.com",
    },
    {
      id: 3,
      icon: map, // Ensure imported correctly
      alt: "Location",
      info: "Nigerian Armed Forces Resettlement Center, Oshodi",
    },
  ];
  
  return (
    <div className="w-full font-Fira ">
      {/* SEO Metadata */}
      <head>
        <title>Contact Us | St.stephen's church</title>
        <meta
          name="description"
          content="Get in touch with St.stephen church, support, or any inquiries. Contact us via email or call us."
        />
      </head>

      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
  <img
    src={image1}
    alt="Contact Manifold Computers"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
    <h1 className="font-bold text-3xl md:text-4xl">Contact Us</h1>
  </div>
</section>


      {/* Contact Info Section */}
     {/*<section className="flex flex-wrap md:flex-nowrap gap-6 my-8 mx-4 md:mx-28 text-center">
      <Paper className="p-6 flex-1 shadow-md text-center">
  <img 
    src="https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/344_salesman_flatline.png" 
    alt="Speak to Technology"
    className="mx-auto mb-4 w-24 h-24 object-contain"
  />
  <h2 className="font-bold text-lg mb-2">Speak to Sales</h2>
  <Button
    variant="contained"
    sx={{
      backgroundColor: '#9d174d', // Custom pink color
      '&:hover': {
        backgroundColor: '#7a1239', // Slightly darker pink on hover
      },
      color: 'white',
    }}
    className="my-2"
    onClick={() => window.location.href= "mailto:sales@manifoldcomputers.com"}
  >
    Book a Session
  </Button>
  <p className="text-sm text-gray-600">sales@manifoldcomputers.com</p>
</Paper>


  <Paper className="p-6 flex-1 shadow-md text-center">
  <img 
    src="https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/tech.png" 
    alt="Speak to Technology"
    className="mx-auto mb-4 w-24 h-24 object-contain"
  />
  <h2 className="font-bold text-lg mb-2">Speak to Technology</h2>
  <Button
    variant="contained"
    sx={{
      backgroundColor: '#9d174d', // Custom pink color
      '&:hover': {
        backgroundColor: '#7a1239', // Slightly darker pink on hover
      },
      color: 'white',
    }}
    className="my-2"
    onClick={() => window.location.href = 'mailto:technology@manifoldcomputers.com'}
  >
    Book a Session
  </Button>
  <p className="text-sm text-gray-600">technology@manifoldcomputers.com</p>
</Paper>

</section>/*}

 {/* Call to Action */}
 <section className="my-8 text-[#ec3237]  ">
  <p className=" font-poppins text-sm sm:text-base md:text-lg text-center">
    Contact us
  </p>
</section>


      {/* Contact Form */}
      <section className="m-8 mx-4 md:mx-28">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Reach Out to Our{" "}
          <span className="text-[#ec3237]">Church Support</span>
        </h1>
        <p className="text-gray-400 my-6">
          Contact us for support, information, or to get involved. We’re here to
          help and welcome you to our community.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
        {contactMethods.map((contact) => (
          <Paper
            key={contact.id}
            className="h-40 flex flex-col items-center justify-center p-4 rounded-lg shadow-md"
            sx={{
              background: "linear-gradient(#ec3237, #b99d32)",
            }}
          >
            <motion.img
              src={contact.icon}
              alt={contact.alt}
              className="w-16 sm:w-20 mb-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
            />
            <p className="text-xs font-medium text-white text-center">
              {contact.info}
            </p>
          </Paper>
        ))}
      </div>
    </section>

      {/* Map Section */}
      <section className="">
        <Map />
      </section>

     
    </div>
  );
};

export default Contact;
