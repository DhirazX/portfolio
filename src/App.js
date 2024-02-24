import "./App.css";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { useEffect, useState, useRef } from "react";

function App() {
  const aboutRef = useRef();
  const projectRef = useRef();
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isProjectVisible, setIsProjectVisible] = useState(false);

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
    <div className="App">
      <Hero />
      <About aboutRef={aboutRef} isAboutVisible={isAboutVisible} />
      <Projects projectRef={projectRef} isProjectVisible={isProjectVisible} />
      <Contact />
    </div>
  );
}

export default App;
