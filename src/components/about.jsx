import React from "react";
import "./components.css";

const About = ({ aboutRef, isAboutVisible }) => {
  return (
    <div className="about">
      <div className="about-img">
        <img
          src={require("../images/welcomecc.png")}
          className={`myimg hiddenLeft ${isAboutVisible && `show`}`}
        />
      </div>
      <div className="about-content" ref={aboutRef}>
        <div className={`about-title hiddenRight ${isAboutVisible && `show`}`}>
          About
        </div>
        <div className={`about-text hiddenRight ${isAboutVisible && `show`}`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          ratione perspiciatis quaerat, ullam eligendi nesciunt doloribus,
          officia numquam aspernatur harum labore nihil architecto commodi quo
          aliquid delectus nostrum modi amet.
        </div>
      </div>
    </div>
  );
};

export default About;