import Hero from "./components/hero";
import Publications from "./components/publications";
import Projects from "./components/projects";
import Education from "./components/education";
import Experience from "./components/experience";
import Skills from "./components/skills";

function App() {
  return (
    <div className="bg-white">
      <div className="App">
        <Hero />
        <Publications />
        <Projects />
        <Education />
        <Experience />
        <Skills />
      </div>
    </div>
  );
}

export default App;
