import Hero from "./components/hero";
import Publications from "./components/publications";
import Projects from "./components/projects";
import Education from "./components/education";
import Experience from "./components/experience";
import Skills from "./components/skills";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

function App() {
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
      // height: 0,
      // width: 0
    },
    text: {
      height: 150,
      width: 150,
      x: cursor.x - 75,
      y: cursor.y - 75,
    },
    project: {
      height: 110,
      width: 110,
      x: cursor.x - 110,
      y: cursor.y - 110,
    },
  };

  const textEnter = () => {
    setVariants("text");
  };
  const textLeave = () => setVariants("default");
  const projectEnter = () => {
    setVariants("project");
    setCursorText("View Code");
    cursorRef.current.style.mixBlendMode = "normal";
    cursorRef.current.style.backgroundColor = "black";
    cursorRef.current.style.border = "2px solid grey";
  };
  const projectLeave = () => {
    setVariants("default");
    setCursorText("");
    cursorRef.current.style.mixBlendMode = "difference";
    cursorRef.current.style.backgroundColor = "white";
    cursorRef.current.style.border = "0px";
  };

  return (
    <div>
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed z-[999999] flex h-6 w-6 items-center justify-center rounded-full bg-white font-oswald text-[20px] text-white mix-blend-difference max1100:hidden"
        variants={cursorVariants}
        animate={variants}
      >
        {cursorText}
      </motion.div>

      <div className="App bg-white bg-grid bg-[length:3.5rem_3.5rem] bg-center max600:bg-[length:2.5rem_2.5rem] max500:bg-grid-sm">
        <Hero textEnter={textEnter} textLeave={textLeave} />
        <Publications />
        <Projects projectEnter={projectEnter} projectLeave={projectLeave} />
        <Education />
        <Experience />
        <Skills />
      </div>
    </div>
  );
}

export default App;
