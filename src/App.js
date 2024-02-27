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
  const [cursorText, setCursorText] = useState("");
  const [variants, setVariants] = useState("default");
  const cursorRef = useRef();

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
    project: {
      height: 50,
      width: 150,
      x: cursor.x - 75,
      y: cursor.y - 75,
    },
  };

  const textEnter = () => {
    setVariants("text");
  };
  const textLeave = () => setVariants("default");
  const projectEnter = () => {
    setVariants("project");
    setCursorText("Visit Site");
    cursorRef.current.style.borderRadius = "50px";
    cursorRef.current.style.mixBlendMode = "normal";
    cursorRef.current.style.backgroundColor = "black";
    cursorRef.current.style.border = "2px solid grey";
  };
  const projectLeave = () => {
    setVariants("default");
    setCursorText("");
    cursorRef.current.style.borderRadius = "50%";
    cursorRef.current.style.mixBlendMode = "difference";
    cursorRef.current.style.backgroundColor = "white";
    cursorRef.current.style.border = "0px";
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
        ref={cursorRef}
        className="cursor"
        variants={cursorVariants}
        animate={variants}
      >
        {cursorText}
      </motion.div>
      <div className="App">
        <Hero textEnter={textEnter} textLeave={textLeave} />
        <About aboutRef={aboutRef} isAboutVisible={isAboutVisible} />
        <Projects
          projectRef={projectRef}
          isProjectVisible={isProjectVisible}
          projectEnter={projectEnter}
          projectLeave={projectLeave}
        />
        <Contact textEnter={textEnter} textLeave={textLeave} />
      </div>
    </div>
  );
}

export default App;
