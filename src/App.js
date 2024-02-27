import "./App.css";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

function App() {
  const aboutRef = useRef();
  const projectRef = useRef();
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isProjectVisible, setIsProjectVisible] = useState(false);
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  });
  const [textVariants, setTextVariants] = useState("default");
  //cursor EventListener
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setCursor({
        x: e.clientX,
        y: e.clientY,
      });
    });
  }, []);

  const cursorVariants = {
    default: {
      x: cursor.x - 12,
      y: cursor.y - 12,
    },
    text: {
      height: 150,
      width: 150,
      x: cursor.x - 75,
      y: cursor.y - 75,
    },
  };

  const textEnter = () => setTextVariants("text");
  const textLeave = () => setTextVariants("default");

  //observes about, project component
  useEffect(() => {
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsAboutVisible(entry.isIntersecting);
      });
    });

    const projectObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsProjectVisible(entry.isIntersecting);
      });
    });

    aboutObserver.observe(aboutRef.current);
    projectObserver.observe(projectRef.current);
  }, []);

  return (
    <div className="container">
      <motion.div
        className="cursor"
        variants={cursorVariants}
        animate={textVariants}
      ></motion.div>
      <div className="App">
        <Hero textEnter={textEnter} textLeave={textLeave} />
        <About aboutRef={aboutRef} isAboutVisible={isAboutVisible} />
        <Projects projectRef={projectRef} isProjectVisible={isProjectVisible} />
        <Contact textEnter={textEnter} textLeave={textLeave}/>
      </div>
    </div>
  );
}

export default App;
