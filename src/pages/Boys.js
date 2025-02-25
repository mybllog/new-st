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
import boybigrade1 from '../assets/img/boysgibrade2.jpg'
import boybigrade2 from '../assets/img/boysgibrade3.jpg'
import boybigrade3 from '../assets/img/boysgibrade4.jpg'
import boybigrade4 from '../assets/img/boysgibrade5.jpg'
import boybigrade5 from '../assets/img/boysgibrade6.jpg'
import boybigrade6 from '../assets/img/boysgibrade7.jpg'
import boybigrade7 from '../assets/img/boysgibrade8.jpg'
import boybigrade8 from '../assets/img/boysgibrade10.jpg'


const Boys = () => {
 // const [activeText, setActiveText] = useState(null);

  const BoysBriadge = [
    {
      id: 1,
      image: boybigrade,
      
    },
    {
      id: 2,
      image: boybigrade1,
      
    
    },

    {
        id:3,
        image: boybigrade2,
    },

    {
        id:4,
        image: boybigrade3,
    },
    {
        id:5,
        image: boybigrade4,
    },
    {
        id:6,
        image: boybigrade5,
    },
    {
        id:7,
        image: boybigrade6,
    },
    {
        id:8,
        image: boybigrade7,
    },
    {
        id:9,
        image: boybigrade8,
    },

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
          content="Gallery of church bigrade"
        />
        <meta name="keywords" content="Boys, Bigrade , gallery, St.Stephen's" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full bg-black text-white text-center font-Fira">
  <img
    src={image1}
    alt="Hero section showcasing Manifold Computers"
    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[30rem] object-cover"
  />
  <p className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
   Boys Brigade Gallery
  </p>
</section>


<section className=' p-5'>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
        {BoysBriadge.map((BoysBriadg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: index * 0.2, ease: "easeOut"}}
            className=' ease-in-out duration-75'
           
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
                src={BoysBriadg.image}
                alt='boys bridage'
                className="absolute inset-0 w-full h-full object-cover bg-black opacity-95 brightness-110 rounded-br-[100px] "
              />
            
            </Paper>
          </motion.div>
        ))}
      </div>

</section>
    
    </div>
  );
};

export default Boys;
