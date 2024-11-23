import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { bg1 } from "../assets";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden `}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.65]  p-9 "
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          
          <h3 className={styles.sectionHeadText + "w-30 w-full md:text-[19px] sm:text-[10px] "}>alexandru.razvan99@yahoo.com</h3>
         
          <div className="flex  gap-5 p-2 text-3xl">
    
            <a onClick={() => window.open("https://www.linkedin.com/in/pop-razvan/","_blank")} className="cursor-pointer">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
