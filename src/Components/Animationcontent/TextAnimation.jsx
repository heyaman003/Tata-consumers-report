import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TextAnimation = ({ text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      x: "-2px", 
    },
    visible: {
      opacity: 1,
      x: 0, 
    },
  };

  return (
    <motion.span ref={ref} variants={textVariants} initial="hidden" animate={controls} >
      {text.split("").map((letter, index) => (
        <motion.span key={index} variants={letterVariants} style={{ display: "inline-block" }}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextAnimation;
