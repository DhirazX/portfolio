import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import WindowDots from "./windowDots";
import Chip from "./chip";
import { accents } from "./section";

const interests = [
  "Natural Language Processing",
  "Information Retrieval",
  "Semantic Search",
  "Representation Learning",
  "ML Systems",
];

// the whole page in five lines, each one jumps to its section
const overview = [
  { id: "publications", n: "01", title: "Publications", lines: ["LDA query refinement", "ICICSET 2025"] },
  { id: "projects", n: "02", title: "Projects", lines: ["Hybrid RAG engine", "LLM watermarking", "ML from scratch"] },
  { id: "education", n: "03", title: "Education", lines: ["Software Engineering", "Bachelor’s · 2025"] },
  { id: "experience", n: "04", title: "Experience", lines: ["Software Engineer", "2024–2026"] },
  { id: "skills", n: "05", title: "Skills", lines: ["Python · PyTorch", "NLP · IR"] },
];

const linkClass =
  "inline-flex items-center gap-2 rounded-[3px] border border-black px-[18px] py-2.5 font-mono text-[15px] text-black no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white max500:px-3.5 max500:py-2 max500:text-[14px]";

const Hero = ({ textEnter, textLeave }) => {
  return (
    <div className="flex flex-col items-center overflow-hidden px-[8%] pb-16 pt-[clamp(9rem,20vh,13rem)] font-oswald text-black max900:px-[6%] max900:pb-12 max900:pt-24">
      <div className="flex w-full max-w-[1150px] flex-row-reverse items-center gap-24 max1100:gap-16 max900:flex-col max900:gap-12">
        <motion.div
          className="flex-[0_0_32%] overflow-hidden rounded-[20px_20px_10px_10px] border border-line bg-surface shadow-[14px_14px_0_black] transition-shadow duration-300 hover:shadow-[18px_18px_0_black] max900:w-[min(280px,72%)] max900:flex-none max900:shadow-[10px_10px_0_black] max600:w-[150px] max600:rounded-full max600:border-0 max600:shadow-[6px_6px_0_black]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ x: -4, y: -4, transition: { duration: 0.2 } }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex h-[34px] items-center pl-[5%] max600:hidden">
            <WindowDots />
            <span className="ml-2.5 font-mono text-[12px] text-white/45">
              dhiraj.jpg
            </span>
          </div>
          <img
            className="block aspect-[8/9] w-full object-cover object-center max600:aspect-square"
            src={`${process.env.PUBLIC_URL}/images/dzz.jpg`}
            alt="Dhiraj Poudel"
          ></img>
        </motion.div>

        <motion.div
          className="flex-1 text-left max900:text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <h1
            className="cursor-pointer text-[length:clamp(3rem,6vw,5rem)] font-bold uppercase leading-[0.95] max500:text-[length:12.5vw]"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Dhiraj Poudel
          </h1>
          <div className="mt-6 font-mono text-[1.15rem] max500:text-[0.9rem]">
            Aspiring NLP Researcher · Software Engineering graduate
          </div>
          <p className="mt-[1.2rem] max-w-[40rem] font-mono text-[16px] leading-[1.6] max900:mx-auto max500:text-[0.9rem]">
            I work on natural language processing and information retrieval,
            mostly the parts where systems have to figure out what something
            means, not just what it says. A lot of what’s here started as me
            building things from scratch to actually understand how they work,
            before reaching for the libraries that do it faster. First paper
            published at ICICSET 2025.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 max900:justify-center">
            {interests.map((interest) => (
              <Chip key={interest}>{interest}</Chip>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 max900:justify-center">
            <a
              className={linkClass}
              href="https://github.com/DhirazX"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>
            <a
              className={linkClass}
              href="https://www.linkedin.com/in/dhiraj-poudel-8353a6244/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a className={linkClass} href="mailto:dhiraj.201612@ncit.edu.np">
              <FaEnvelope /> Email
            </a>
          </div>
        </motion.div>
      </div>

      <motion.nav
        aria-label="Page sections"
        className="mt-24 grid w-full max-w-[1150px] grid-cols-5 gap-6 max900:mt-16 max900:grid-cols-2 max600:hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {overview.map((item) => (
          <a
            className="group block"
            href={`#${item.id}`}
            key={item.id}
            style={{ "--accent": accents[item.id] }}
          >
            <span className="block text-[2.6rem] font-semibold leading-none text-transparent transition-colors duration-300 [-webkit-text-stroke:1px_var(--accent)] group-hover:text-[var(--accent)]">
              {item.n}
            </span>
            <span className="mt-2 block text-[1.4rem] font-semibold uppercase leading-tight">
              {item.title}
            </span>
            <span className="mt-1 block font-mono text-[13px] leading-[1.4] text-[#555]">
              {item.lines.map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </span>
          </a>
        ))}
      </motion.nav>
    </div>
  );
};

export default Hero;
