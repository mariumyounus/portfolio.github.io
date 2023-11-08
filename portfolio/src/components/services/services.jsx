import React from 'react'
import {motion} from "framer-motion"
import "./services.scss"
const variants={
  initial:{
    x:-500,
    y:100,
    opacity:0,
  },
  animate:{
    x:0,
    y:0,
    opacity:1,
    transition: {
      duration:1,
      staggerChildren:0.1,
    },

  },
};
const Services = () => {
 

  
  return (
    <motion.div className='services' variants={variants} initial="initial"  whileInView={"animate"}>
   <motion.div className='textContainer' variants={variants} >
    <p>I focus on helping your brand grow 
    <br/>and move forward</p>
    <hr/>
   </motion.div>
   <motion.div className='titleContainer' variants={variants}>
    <div className='title'>
        <img src="office.jpg"  alt=""></img>
        <h1>
        <motion.b whileHover={{color:"teal"}}>Unique</motion.b> ideas</h1>
    </div>
    <div className='title'>
        <h1><motion.b whileHover={{color:"teal"}}>For Your</motion.b>Business.
        </h1>
        <motion.button whileHover={{backgroundColor:"teal"}}>What We Do?</motion.button>
    </div>
   </motion.div>
   <motion.div className='listContainer' variants={variants}>
    <motion.div className='box'
     whileHover={{ background: "lightgray", color: "black" }}>
        <h2>Branding</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
       </p>
       <motion.button whileHover={{backgroundColor:"teal"}}>Go</motion.button>
       
    </motion.div>
    <motion.div className='box'
     whileHover={{ background: "lightgray", color: "black" }}>
        <h2>Branding</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
       </p>
       <motion.button whileHover={{backgroundColor:"teal"}}>Go</motion.button>
       
    </motion.div>
    <motion.div className='box'
     whileHover={{ background: "lightgray", color: "black" }}>
        <h2>Branding</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
       </p>
       <motion.button whileHover={{backgroundColor:"teal"}}>Go</motion.button>
       
    </motion.div>
    <motion.div className='box'
     whileHover={{ background: "lightgray", color: "black" }}>
        <h2>Branding</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
       </p>
       <motion.button whileHover={{backgroundColor:"teal"}}>Go</motion.button>
       
    </motion.div>
    
   </motion.div>
  
   
    </motion.div>
  )
}

export default Services
