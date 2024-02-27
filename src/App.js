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
  const [cursor, setcursor] = useState({
    x: 0,
    y: 0,
  });

  //cursor EventListener
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setcursor({
        x: e.clientX,
        y: e.clientY,
      });
    });
  }, []);

  const cursorVariants = {
    default: {
      x: cursor.x-12,
      y: cursor.y-12,
    },
  };

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
        animate="default"
      ></motion.div>
      <div className="App">
        <Hero />
        <About aboutRef={aboutRef} isAboutVisible={isAboutVisible} />
        <Projects projectRef={projectRef} isProjectVisible={isProjectVisible} />
        <Contact />
      </div>
    </div>
  );
}

export default App;
