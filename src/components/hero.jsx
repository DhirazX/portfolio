import React from "react";
import "./components.css";
import { motion } from "framer-motion";

const Hero = ({ textEnter, textLeave }) => {
  return (
    <div className="hero-wrapper grid">
      <div className="hero">
        <div className="intro-text">
          <motion.div className="it1">Hey, I am Dhiraj Poudel</motion.div>
          {/* <motion.div className="it2">Dhiraj Poudel</motion.div> */}
        </div>
        <div className="hero-text">
          <motion.div
            className="ht1"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            A front end
          </motion.div>
          <motion.div
            className="ht2"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Web Developer
          </motion.div>
        </div>
        <div className="outro-text">
          Passionate About Creating Unforgettable Experiences
          {/* <div className="ot1">Passionate</div>
          <div className="ot2">About</div>
          <div className="ot3">Creating</div>
          <div className="ot4">Unforgettable</div>
          <div className="ot5">Experiences</div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
