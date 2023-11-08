import React, { useRef } from 'react'
import "./parallax.scss"
import {motion,useScroll, useTransform} from "framer-motion"

const parallax = ({type}) => {
  const ref=useRef()
  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["start start","end start"]
  });
  const yText=useTransform(scrollYProgress,[0,1],["0%","500%"]);
  const yBg=useTransform(scrollYProgress,[0,1],["0%","100%"]);
  return (
    <div className='parallax'
    ref={ref}>
      <motion.h1 style={{y:yText}} >{type==="services" ?"What We Do?" : "What We Did"}</motion.h1>
      <motion.div className='mountain' style={{
        backgroundImage:
      `url(${type==="services" ? "/mountaindark.png" :"/mountainlight.png" })`}}></motion.div>
      <motion.div style={{y:yBg}} className='planets'></motion.div>
      <motion.div style={{x:yBg}} className='stars'></motion.div>
    </div>
  )
}

export default parallax
