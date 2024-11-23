import React from 'react'
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const About = () => {
  return (
   <>
    <motion.div variants={textVariant()}>
        <p className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-white">Introduction</p>
        
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-white text-[17px] max-w-3xl leading-[40px]'
      >
      
       I am an energetic,ambitious person who has developed a mature and
 responsible approach to any task that i understand.With each passing
 day i am trying to be better,learn and improve my skiils
      </motion.p>
      </>
  )
}

export default SectionWrapper(About, "about");