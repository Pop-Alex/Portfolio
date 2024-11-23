import React from 'react'
import { motion } from "framer-motion";
import { styles } from "../styles";
import {  StarsCanvas } from "./canvas";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc'
const Hero = () => {
  return (
   <section  className='relative h-screen w-full mx-auto'>
      
    <div
        className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        
        <StarsCanvas/>
        
        <motion.div variants={textVariant()} className='flex flex-col justify-center items-center mt-5'>
          
          <div className='w-1 sm:h-80 h-40 yellow-gradient' />
          </motion.div>
          <motion.div variants={textVariant()}>
          <h1 className={`${styles.heroHeadText} text-white`}>Hello</h1>
          <h1 className={`${styles.heroSubText} text-white`}>My name is Alex </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            
          </p>
          </motion.div>
        </div>
        
   </section>
   
  )
}

export default SectionWrapper(Hero, "");