import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "./components.css";

const Projects = ({ projectRef, isProjectVisible }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0", "-150%"]);
  let y;
  window.innerWidth > 900 && console.log(window.innerWidth);
  return (
    <div>
      <div className="projects-wrapper" ref={targetRef}>
        <div className="projects">
          <div
            className={`project-section-title hiddenLeft ${
              isProjectVisible && `show`
            }`}
            ref={projectRef}
          >
            Projects
          </div>

          <motion.div
            className="cards"
            style={window.innerWidth > 900 && { x }}
          >
            <div
              className={`project-group  hiddenDown ${
                isProjectVisible && `show`
              }`}
            >
              <div className="project-info-card ">
                <div className="project-name kakshya-title">कक्षा.</div>
                <div className="project-info">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Illum assumenda quos suscipit impedit earum quisquam
                  asperiores inventore delectus! Eos iure alias optio officiis
                  vero vel error rem ab voluptate quod?
                </div>
              </div>
              <div className="card">
                <div className="card-outer">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
                <div className="card-inner">
                  <img src={require("../images/Kakshya.png")}></img>
                </div>
              </div>
            </div>
            <div
              className={`project-group  hiddenDown ${
                isProjectVisible && `show`
              }`}
            >
              <div className="project-info-card ">
                <div className="project-name">EasyCanteen</div>
                <div className="project-info">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Illum assumenda quos suscipit impedit earum quisquam
                  asperiores inventore delectus! Eos iure alias optio officiis
                  vero vel error rem ab voluptate quod?
                </div>
              </div>
              <div className="card">
                <div className="card-outer">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
                <div className="card-inner">
                  <img src={require("../images/easyCanteen.png")}></img>
                </div>
              </div>
            </div>
            <div
              className={`project-group  hiddenDown ${
                isProjectVisible && `show`
              }`}
            >
              <div className="project-info-card ">
                <div className="project-name">EasyCanteen</div>
                <div className="project-info">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Illum assumenda quos suscipit impedit earum quisquam
                  asperiores inventore delectus! Eos iure alias optio officiis
                  vero vel error rem ab voluptate quod?
                </div>
              </div>
              <div className="card">
                <div className="card-outer">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
                <div className="card-inner">
                  <img src={require("../images/easyCanteen.png")}></img>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
