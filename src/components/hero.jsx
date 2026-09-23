import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import WindowDots from "./windowDots";
import Chip from "./chip";
import Eyebrow from "./eyebrow";

const interests = [
  "Natural Language Processing",
  "Information Retrieval",
  "Semantic Search",
  "Representation Learning",
  "ML Systems",
];

// the whole page in five lines, each one jumps to its section
const overview = [
  { id: "publications", n: "01", title: "publications", line: "LDA query refinement · ICICSET 2025" },
  { id: "projects", n: "02", title: "projects", line: "Hybrid RAG engine · Watermarking · ML fundamentals · Kakshya" },
  { id: "education", n: "03", title: "education", line: "Software Engineering · Bachelor’s · 2025" },
  { id: "experience", n: "04", title: "experience", line: "Software Engineer · 2024–2026" },
  { id: "skills", n: "05", title: "skills", line: "Python · PyTorch · NLP · IR" },
];

const linkClass =
  "inline-flex items-center gap-2 border border-ink px-4 py-2 text-[14px] text-ink no-underline transition-colors duration-150 hover:bg-ink hover:text-white max500:px-3.5 max500:py-1.5 max500:text-[13px]";

const Hero = () => {
  return (
    <div className="px-[8%] pb-16 pt-[clamp(7rem,16vh,11rem)] font-mono text-ink max900:px-[6%] max900:pb-12 max900:pt-20">
      <div className="mx-auto flex w-full max-w-[1150px] flex-row-reverse items-center gap-24 max1100:gap-16 max900:flex-col max900:gap-10">
        <motion.div
          className="w-[32%] shrink-0 overflow-hidden border border-rule bg-surface max900:w-[min(260px,72%)] max900:flex-none max600:w-[140px] max600:rounded-full max600:border-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex h-7 items-center gap-1.5 pl-3 max600:hidden">
            <WindowDots />
            <span className="ml-1 text-[11px] text-white/40">dhiraj.jpg</span>
          </div>
          <img
            className="block aspect-[8/9] w-full object-cover object-center max600:aspect-square"
            src={`${process.env.PUBLIC_URL}/images/dzz.jpg`}
            alt="Dhiraj Poudel"
          ></img>
        </motion.div>

        <motion.div
          className="flex-1 max900:text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-[2.7rem] font-bold leading-tight max900:text-[2.4rem] max500:text-[1.9rem]">
            Dhiraj Poudel
          </h1>
          <div className="mt-3 text-[1rem] max500:text-[0.9rem]">
            Aspiring NLP Researcher · Software Engineering graduate
          </div>
          <p className="mt-6 max-w-[40rem] text-[15px] leading-[1.65] max900:mx-auto max500:text-[0.88rem]">
            I work on natural language processing and information retrieval,
            mostly the parts where systems have to figure out what something
            means, not just what it says. A lot of what’s here started as me
            building things from scratch to actually understand how they work,
            before reaching for the libraries that do it faster. First paper
            published at ICICSET 2025.
          </p>

          <div className="mt-6">
            <Eyebrow>research interests</Eyebrow>
          </div>
          <div className="flex flex-wrap gap-2 max900:justify-center">
            {interests.map((interest) => (
              <Chip key={interest}>{interest}</Chip>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3 max900:justify-center">
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
        className="mx-auto mt-16 w-full max-w-[1150px] border-t border-rule max900:mt-12 max600:hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {overview.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group flex items-baseline gap-4 border-b border-rule py-3 text-ink no-underline last:border-b-0"
          >
            <span className="w-6 shrink-0 text-[13px] text-muted">{item.n}</span>
            <span className="w-32 shrink-0 font-bold transition-colors duration-150 group-hover:text-accent max900:w-28">
              {item.title}/
            </span>
            <span className="truncate text-[13px] text-muted">{item.line}</span>
          </a>
        ))}
      </motion.nav>
    </div>
  );
};

export default Hero;
