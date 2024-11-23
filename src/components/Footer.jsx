import React, {Suspense,useState,useEffect} from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Cat } from "./canvas";
import {bg1} from "../assets";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

const Footer = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 2200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
   
    <motion.div className='xl:mt-3 relative select-none   '>
      
    
     
        <img src={bg1} alt="" />
       
        <div className='absolute bottom-0 right-0 md:bottom-2 md:right-2 lg:bottom-4 lg:right-4  '>
        
        <div className="w-24 h-34 md:w-32 md:h-42 lg:w-48 lg:h-48 ">
       
        {scrolled && <Cat/> }
        
        </div>
         
        
        </div>
        </motion.div>
      
      
  )
}

export default Footer;