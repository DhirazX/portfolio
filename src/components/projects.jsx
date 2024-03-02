import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "./components.css";

const Projects = ({
  projectRef,
  isProjectVisible,
  projectEnter,
  projectLeave,
}) => {
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
            style={window.innerWidth > 1100 && { x }}
          >
            <div
              className={`project-group  hiddenDown ${
                isProjectVisible && `show`
              }`}
            >
              <div className="award-banner">Esewa Webthon #1</div>
              <div className="award-banner-after"></div>
              <div className="project-info-card ">
                <div className="project-name kakshya-title">Kakshya</div>
                <div className="project-info">
                  <p style={{ marginBottom: "10px" }}>
                    Made Within 6 hrs, Kakshya helped us win esewa webthon 2080
                    organized by Instinct Nepal.
                  </p>
                  <p>
                    Kakshya is a web application that uses AI to take smart
                    notes. It can record classroom lectures, summarize content,
                    and save key points. Users can also categorize their classes
                    and recordings for easy access.
                  </p>
                  <div className="tech-stack">
                    <div className="tech-language">Html</div>
                    <div className="tech-language">CSS</div>
                    <div className="tech-language">Javascript</div>
                    <div className="tech-language">Django</div>
                  </div>
                </div>
                {/* <div className="redirect-btns">
                  <button>THISIS</button>
                </div> */}
              </div>
              <div
                className="card"
                onMouseEnter={projectEnter}
                onMouseLeave={projectLeave}
              >
                <div className="card-outer">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
                <div className="card-inner">
                  <img
                    src={require("../images/kakshyaadvert2.png")}
                    alt="Kakshya-Banner"
                  ></img>
                </div>
              </div>
            </div>
            <div
              className={`project-group  hiddenDown ${
                isProjectVisible && `show`
              }`}
            >
              <div className="project-info-card ">
                <div className="project-name ocr-title">
                  <span className="ocr-title-green">OCR</span>Compiler
                </div>
                <div className="project-info">
                  OCR Compiler is a web application designed to streamline the
                  process of working with handwritten code. Leveraging the power
                  of Optical Character Recognition (OCR) technology, this
                  project aims to bridge the gap between analog and digital
                  programming by enabling users to scan handwritten code,
                  convert it to editable text, prettify the code, and ultimately
                  compile it.
                </div>
                <div className="tech-stack">
                  <div className="tech-language">ReactJS</div>
                  <div className="tech-language">CSS</div>
                  <div className="tech-language">Python</div>
                  <div className="tech-language">Tesseract</div>
                </div>
              </div>
              <div
                className="card"
                onMouseEnter={projectEnter}
                onMouseLeave={projectLeave}
              >
                <div className="card-outer">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
                <div className="card-inner">
                  <img
                    src={require("../images/ocrcompiler2.png")}
                    alt="ocrcompiler-banner"
                  ></img>
                </div>
              </div>
            </div>
            <div
              className={`project-group  hiddenDown ${
                isProjectVisible && `show`
              }`}
            >
              <div className="project-info-card ">
                <div className="project-name easycanteen-title">Easy<span className="easycanteen-title-green">Canteen</span></div>
                <div className="project-info">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Illum assumenda quos suscipit impedit earum quisquam
                  asperiores inventore delectus! Eos iure alias optio officiis
                  vero vel error rem ab voluptate quod?
                </div>
              </div>
              <div
                className="card"
                onMouseEnter={projectEnter}
                onMouseLeave={projectLeave}
              >
                <div className="card-outer">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
                <div className="card-inner">
                  <img
                    src={require("../images/easycanteenadvert.png")}
                    alt="easycanteen-banner"
                  ></img>
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
