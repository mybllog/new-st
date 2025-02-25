import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import Paper from '@mui/material/Paper';
import image1 from '../assets/img/altar2.jpg';
import { Lightbulb, Star, ChatRounded } from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson, faPeopleGroup} from '@fortawesome/free-solid-svg-icons';
import pastor1 from '../assets/img/ekuma1.jpg'
import pastor2 from '../assets/img/otowo.jpg'
import pastor3 from '../assets/img/venis.jpg'
import { NavLink } from 'react-router-dom';
import church1 from '../assets/img/chuch1.jpg';
import church2 from '../assets/img/church2.jpg';
import img4 from '../assets/img/ekuma.jpg'
import CenteredTabs from '../components/tabs';
import women from '../assets/img/womens.jpg'
import children from '../assets/img/childrens.jpg'
import ushers from '../assets/img/ushers.jpg'
import boybigrade from '../assets/img/boysgibrade.jpg'
import men from '../assets/img/menfellowship.jpg'
import boybigrade1 from '../assets/img/boysgibrade2.jpg'
import boybigrade2 from '../assets/img/boysgibrade3.jpg'
import boybigrade3 from '../assets/img/boysgibrade4.jpg'
import boybigrade4 from '../assets/img/boysgibrade5.jpg'
import boybigrade5 from '../assets/img/boysgibrade6.jpg'
import boybigrade6 from '../assets/img/boysgibrade7.jpg'
import boybigrade7 from '../assets/img/boysgibrade8.jpg'
import boybigrade8 from '../assets/img/boysgibrade10.jpg'


const Ministry = () => {
 // const [activeText, setActiveText] = useState(null);

  const ministries = [
    {
      id: 1,
      image: women,
      title: 'Women group',
      link:null
      
    },
    {
      id: 2,
      image: children,
      title:'children group',
      link:null
      
    
    },

    {
        id:3,
        image: ushers,
        title :'Ushers group',
        link:null
    },

    {
        id:4,
        image: boybigrade,
        title :"boybigrade",
        link:'/boys'
    },
    {
      id:5,
      image: men,
      title :"Men Fellowship",
      link:null
  }
  ];

  
 /* const pastors = [
    { title: "FG (REV) EE EKUMA", image: pastor1 },
    { title: "PD OTOWO", image: pastor2 },
    { title: "V ENIS", image: pastor3 },
  ]*/
  /*const handleTextToggle = (id) => {
    setActiveText(activeText === id ? null : id);
  };*/

  return (
    <div className="w-full font-Fira">
      {/* SEO Metadata */}
      <Helmet>
        <title>Ministry | St Stephen's </title>
        <meta
          name="description"
          content="Learn about Fullworks Limited, an ISO 9001:2015 certified IT System Integration Company delivering digital transformation solutions across Africa."
        />
        <meta name="keywords" content="Fullworks, IT Solutions, System Integration, Team, About Company" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full bg-black text-white text-center font-Fira">
  <img
    src={image1}
    alt="Hero section showcasing Manifold Computers"
    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[30rem] object-cover"
  />
  <p className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
   Ministry
  </p>
</section>


<section className=' p-5'>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
        {ministries.map((ministrie, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: index * 0.2, ease: "easeOut"}}
            className=' ease-in-out duration-75'
           
          >
       {ministrie.link ? (
    
         <NavLink to={ministrie.link}>
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
                src={ministrie.image}
                alt={ministrie.title}
                className="absolute inset-0 w-full h-full object-cover bg-black opacity-95  brightness-70 rounded-br-[100px] "
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 p-6 text-start "
              >
                <p className="text-lg md:text-xl  text-black  font-bold">
                  {ministrie.title}
                </p>
              </motion.div>
            </Paper>
         </NavLink>
    
       ):(
        <>
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
                src={ministrie.image}
                alt={ministrie.title}
                className="absolute inset-0 w-full h-full object-cover bg-black opacity-95  brightness-70 rounded-br-[100px] "
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 p-6 text-start "
              >
                <p className="text-lg md:text-xl  text-black  font-bold">
                  {ministrie.title}
                </p>
              </motion.div>
            </Paper>
        </>
       )}
           
          </motion.div>
        ))}
      </div>

</section>
    
    </div>
  );
};

export default Ministry;
