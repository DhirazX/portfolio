import React from "react";
import "./components.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero">
        <div className="intro-text">
          <motion.div className="it1">Hi, I am</motion.div>
          <motion.div className="it2">Dhiraj Poudel</motion.div>
        </div>
        <div className="hero-text">
          <div className="ht1">
            <motion.div className="ht1-1">A front end</motion.div>
            <div className="ht1-2"></div>
          </div>
          <div className="ht2">
            <div className="ht2-2"> </div>
            <motion.div className="ht2-1">Web Developer</motion.div>
          </div>
        </div>
        <div className="outro-text">
          <div className="ot1">Passionate</div>
          <div className="ot2">About</div>
          <div className="ot3">Creating</div>
          <div className="ot4">Unforgettable</div>
          <div className="ot5">Experiences</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
