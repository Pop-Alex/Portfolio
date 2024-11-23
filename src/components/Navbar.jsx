import { useEffect,useState } from "react"
import {Link} from 'react-router-dom'

import {styles} from '../styles'
import {navLinks} from "../constants"
import {close} from '../assets'

import { fadeIn, textVariant } from "../utils/motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion,AnimatePresence } from "framer-motion";

const Navbar = () => {
  const  [active,setActive] =useState('');
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   
    <motion.nav  className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20   ` }
    initial={{ opacity: 1, y: -5 }}
    animate={scrolled ? { backgroundColor: 'rgb(255, 213, 79)',opacity: 1, y: 0 } : { backgroundColor: 'transparent' }}
    transition={{ duration: 0.5,ease: 'easeInOut' }}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

     
        <Link to='/' 
        className={`${
          scrolled ? "text-black" : "text-white"
        } flex items-center gap-2  text-xl`}
        onClick={()=>{
          setActive("");
          window.scrollTo(0,0);
        }}>
          Alex Pop
        </Link>
       


        <motion.ul initial={{
                            opacity: 0,
                            y: 60, scale: 0.5
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            
                            transition: {
                                type:"tween",
                                duration:0.2,
                                delay:0.5,
                            }
                        }}
                         className={` list-none hidden sm:flex flex-row gap-10  `}>
          {navLinks.map((link)=>(
          <li
          key={link.id}
          className={`
          
          
            `}
          onClick={()=>setActive(link.title)}>
            <a className={`${
          scrolled ? "text-black" : "text-white"
        } hover:text-white text-[18px] font-medium cursor-pointer drop-shadow-2xl  `} href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
        </motion.ul>


       
       
        <motion.div initial={{
                            opacity: 0,
                            y: 60, scale: 0.5
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            
                            transition: {
                                type: "spring",
                                stiffness: 300
                            }
                        }}
                        exit={{
                            opacity: 0, scale: 0.5,
                            transition: { duration: 0.6 }
                        }}
        
        className="sm:hidden flex flex-1 justify-end items-center">
          <h1 className="w-[28px] h-[28px] text-[28px]" onClick={()=>setToggle(!toggle)}><GiHamburgerMenu /></h1>
          
          


            {toggle && ( <motion.div initial={{
                            opacity: 0,
                            y: 60, scale: 0.5
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            
                            transition: {
                                type: "spring",
                                stiffness: 300
                            }
                        }}
                        exit={{
                            opacity: 0, scale: 0.5,
                            transition: { duration: 0.6 }
                        }}
                            
                            className={`${!toggle ? "hidden" : "flex"} p-6 bg-amber-300 absolute top-20
          right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}>
           
             <motion.div  >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
            {navLinks.map((link)=>(
          <li
          key={link.id}
          className={`${active === link.title ? "text-black" : "text-white"} 
          
          
          hover:text-black text-[18px] font-medium cursor-pointer drop-shadow-2xl    `}
          onClick={()=>{setToggle(!toggle);
            setActive(link.title)}}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
            </ul>
            </motion.div>
            
            </motion.div>   )}                  
          
          
          </motion.div>
       
      
       
      </div>
    </motion.nav>

   
  )
}

export default Navbar