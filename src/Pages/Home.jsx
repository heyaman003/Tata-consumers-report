import React, { useRef } from "react";
import "./Home.css";
import { motion,useScroll,useTransform } from "framer-motion";
import { popIn, slideIn } from "../Components/Header/Nav/anim";
import TextAnimation from '../Components/Animationcontent/TextAnimation';
const Home = () => {
  const targetRef=useRef(null);

  const {scrollYProgress}=useScroll(()=>{
    console.log(scrollYProgress);
  },{target:targetRef,
    offset:["start end","end start"],
    
  })
  const scale=useTransform(scrollYProgress,[0,0.3,0.4],[1,1.3,1.5]);
  const opacity=useTransform(scrollYProgress,[0,0.45],[1,0]);
  return (
    <div className="home-conatiner">
      <div
        className="text-content-home"
      >
        <motion.span initial={{x:"-20px",opacity:"0.7",filter:"blur(20px)"}} animate={{x:0,opacity:1,filter:"blur(0px)"}} transition={{duration:0.5,delay:0.1,ease:"easeInOut"}}>Expanding</motion.span>
        <motion.span initial={{x:"-20px",opacity:"0.7",filter:"blur(20px)"}} animate={{x:0,opacity:1,filter:"blur(0px)"}} transition={{duration:0.5,delay:0.2,ease:"easeInOut"}}>Horizons.</motion.span>
        <motion.span initial={{x:"-20px",opacity:"0.7",filter:"blur(20px)"}} animate={{x:0,opacity:1,filter:"blur(0px)"}} transition={{duration:0.5,delay:0.3,ease:"easeInOut"}}>For Better </motion.span>
      <div  className="report-year-desc">
        <TextAnimation text={'Integrated Annual Report 2023-24'}/>
      </div>
      </div>
      <motion.img 
      ref={targetRef}
      style={{scale,opacity,zIndex:100}}
        variants={popIn}
        initial="initial"
        animate="enter"
        exit="exit"
        src="/Home/HomeCover.jpg"
        alt=""
      />
    </div>
  );
};

export default Home;
