import { motion } from "framer-motion";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiPytorch,
  SiNumpy,
  SiNextdotjs,
  SiGit,
  SiDocker,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import Section, { reveal } from "./section";
import Eyebrow from "./eyebrow";

const machineLearning = [
  "Natural Language Processing",
  "Information Retrieval",
  "Hybrid RAG",
  "Dense Vector Embeddings",
  "Lexical Search (BM25)",
  "Neural Networks",
  "Topic Modeling (LDA)",
];

const programming = [
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "C/C++ (basics)", icon: SiCplusplus },
];

const tools = [
  { name: "PyTorch", icon: SiPytorch },
  { name: "NumPy", icon: SiNumpy },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
  { name: "REST APIs", icon: TbApi },
];

const IconGrid = ({ items }) => (
  <div className="grid grid-cols-[repeat(auto-fill,minmax(84px,1fr))] gap-x-3 gap-y-7">
    {items.map(({ name, icon: Icon }) => (
      <div className="group flex flex-col items-start gap-2" key={name}>
        <Icon className="text-[1.7rem] transition-colors duration-150 group-hover:text-accent" />
        <span className="text-[13px] leading-tight">{name}</span>
      </div>
    ))}
  </div>
);

const Skills = () => (
  <Section title="Skills" index="05">
    <motion.div {...reveal(30)}>
      <Eyebrow>Machine Learning &amp; AI</Eyebrow>
      <div className="text-[1.05rem] leading-[1.9] max600:text-[0.95rem]">
        {machineLearning.map((item, i) => (
          <span key={item}>
            <span className="transition-colors duration-150 hover:text-accent">
              {item}
            </span>
            {i < machineLearning.length - 1 && (
              <span className="mx-2 text-muted">/</span>
            )}
          </span>
        ))}
      </div>
    </motion.div>

    <motion.div
      className="flex justify-between gap-12 max900:flex-col max900:gap-10"
      {...reveal(30)}
    >
      <div className="w-[42%] max900:w-full">
        <Eyebrow>Programming</Eyebrow>
        <IconGrid items={programming} />
      </div>
      <div className="w-[52%] max900:w-full">
        <Eyebrow>Tools &amp; Frameworks</Eyebrow>
        <IconGrid items={tools} />
      </div>
    </motion.div>
  </Section>
);

export default Skills;
