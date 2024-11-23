import {
    
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    threejs,
    poza,
    weather,
    cameraWeb,
    weather2,
    burger,
    search
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
    
  ];
  
  
  
  
  const projects = [
    {
      name: "Simple Weather App",
      description:
"Made a simple weather app for fun",      
      image: weather,
      source_code_link: "https://pop-alex.github.io/Weather2/",
    },

    {
      name: "Web camera",
      description:
"Video camera presentation website.",      
      image:cameraWeb,
      source_code_link: "https://pop-alex-github-io.vercel.app/",
    },
    {
      name: "Weather App",
      description:
"Weather app with a map",     
      image: weather2,
      source_code_link: "https://weather3-1agb.vercel.app/",
    },
    {
      name: "Restaurant site",
      description:
"A mini restaurant website",     
      image: burger,
      source_code_link: "https://web-restaurant-rust.vercel.app/",
    },
    {
      name: "Mini search site",
      description:
"One of my first projects",     
      image: search,
      source_code_link: "https://task-gules-seven-58.vercel.app/",
    },
  ];
  
  export {  technologies, projects };