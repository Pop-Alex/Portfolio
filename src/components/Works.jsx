import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from '../hoc'
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard=({index,name,description,image,source_code_link})=>{
return(
  <motion.div variants={fadeIn("up","spring",index * 0.5, 0.75)}>
    <Tilt
    options={{
      max:45,
      scale:1,
      speed:450
    }}
    className="bg-amber-300 p-5 rounded-2xl w-full sm:w-[360px]">

      <div className="relative w-full h-[230px]">
     
             
            
        <img  onClick={() => window.open(source_code_link, "")} src={image} alt={name} className="w-full h-full object-cover rounded-2xl object-contain cursor-pointer" />
      
      <div className='absolute bottom-0 right-0 flex justify-end m-3  card-img_hover'>
        
            
          </div>
          </div>
      <div className='mt-5'>
          <h3 className='text-black font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-black text-[14px]'>{description}</p>
        </div>
    </Tilt>
  </motion.div>
  
)
}
const Works = () => {
  return (
    <>
       <motion.div variants={textVariant()}>
       
        <h2 className={`font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-white`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("","",0.1,1)} 
        className="mt-3 text-[17px] text-white">
          Each project showcases my skills and experience.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project,index)=>
        <ProjectCard key={`project-${index}`} {...project} index={index}/>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");