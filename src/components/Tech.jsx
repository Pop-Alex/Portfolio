import React from 'react'
import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";
import { technologies } from "../constants";
import { styles } from '../styles';
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const Tech = () => {
  return (
    <motion.div variants={textVariant()} className='flex flex-col  justify-center gap-10'>
      <h2 className={`${styles.sectionHeadText} `}>Things i know.</h2>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      
    {technologies.map((technology) => (
      <>
      <div className='w-28 h-28' key={technology.name}>
        
        <BallCanvas icon={technology.icon} name={technology.name} />

      </div>
              </>
    ))}
  </div>
  </motion.div>
  )
}


export default SectionWrapper(Tech, "");