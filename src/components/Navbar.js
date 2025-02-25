import React, { useState, useEffect } from 'react';
import image6 from '../assets/img/WhatsApp_Image_2024-10-20_at_09.03.19_6578ea68-removebg-preview (1).png'
import logo from '../assets/img/nafrc-removebg-preview.png'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const logo1 = image6
    const logo2 = logo

    const [currentLogo , setCurrentLogo] = useState(logo1)

    useEffect(()=>{

        const interval = setInterval(()=>{

            setCurrentLogo((prevLogo)=> prevLogo === logo2 ? logo1 : logo2)
        },1000)

        return () => clearInterval(interval)
    },[])
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="font-Fira">
            <header className={`w-screen fixed top-0 z-20 transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
                <nav className="max-w-7xl mx-auto px-4 md:px-1 py-2 flex gap-[6.19%] items-center">
                    <div className="flex flex-shrink-0 w-[11.48vw] mr-[19.10vw] pl-3">
                        <img src={currentLogo} alt="logo" className="h-10 md:h-16 transition-all  duration-500 ease-in-out transform scale-110 opacity-100"/>
                        
                    </div>
                    <div className={`hidden lg:flex md:flex xl:flex gap-8 justify-end float-end relative md:right-16 lg:left-28 xl:left-28 ${isScrolled ? 'text-white' : 'text-gray-400'}`}>
                        <a href="/" className={`hover:text-[#ec3237] transition-colors text-base text-center font-bold not-italic ${isScrolled ? 'text-white' : 'text-gray-400'}`}>
                            Home
                        </a>
                        <a href="/about-us" className={`hover:text-[#ec3237] transition-colors text-base text-center font-bold not-italic ${isScrolled ? 'text-white' : 'text-gray-400'}`}>
                            About Us
                        </a>
                        <a href="/services" className={`hover:text-[#ec3237] transition-colors text-base text-center font-bold not-italic ${isScrolled ? 'text-white' : 'text-gray-400'}`}>
                            Services
                        </a>
                        <a href="/contact-us" className={`hover:text-[#ec3237] transition-colors text-base text-center font-bold not-italic ${isScrolled ? 'text-white' : 'text-gray-400'}`}>
                            Contact Us
                        </a>
                    </div>

                    {/* Hamburger Icon for small screens */}
                    <div className="md:hidden xl:hidden lg:hidden fixed right-0">
                        <button onClick={toggleOpen} className="focus:outline-none right-0">
                            <svg className="w-6 h-6" fill="none" stroke={isScrolled ? "black" : "white"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Dropdown menu for small screens */}
                {isOpen && (
                    <div className="md:hidden lg:hidden xl:hidden bg-white shadow-md">
                        <a href="/" className="block px-4 py-2 text-black hover:text-[#ec3237]">Home</a>
                        <a href="/about-us" className="block px-4 py-2 text-black hover:text-[#ec3237]">About Us</a>
                        <a href="/services" className="block px-4 py-2 text-black hover:text-[#ec3237]">Services</a>
                        <a href="/contact-us" className="block px-4 py-2 text-black hover:text-[#ec3237]">Contact Us</a>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Navbar;
