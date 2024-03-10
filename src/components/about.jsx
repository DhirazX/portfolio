import React from "react";
import "./components.css";

const About = ({ aboutRef, isAboutVisible, aboutImgEnter, aboutImgLeave }) => {
  return (
    <div className="about">
      <div className="about-img">
        <img
          src={require("../images/welcomecc.png")}
          className={`myimg hiddenLeft ${isAboutVisible && `show`}`}
          onMouseEnter={aboutImgEnter}
          onMouseLeave={aboutImgLeave}
        />
      </div>
      <div className="about-content" ref={aboutRef}>
        <div className={`about-title hiddenRight ${isAboutVisible && `show`}`}>
          About
        </div>
        <div className={`about-text hiddenRight ${isAboutVisible && `show`}`}>
          I am Dhiraj Poudel, a software engineering student with a passion for
          creativity in digital spaces. I specialize in bringing ideas to life
          through captivating visuals and thoughtful typography. I am constantly
          exploring new ways to blend technology with artistry to create
          engaging and meaningful experiences.
        </div>
      </div>
    </div>
  );
};

export default About;
