import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Section, { accents } from "./section";
import Entry from "./entry";

const Projects = ({ projectEnter, projectLeave }) => {
  const github = (repo) => ({
    href: `https://github.com/DhirazX/${repo}`,
    label: `DhirazX/${repo}`,
    before: <FaGithub />,
    after: <FaArrowUpRightFromSquare />,
    onEnter: projectEnter,
    onLeave: projectLeave,
  });

  return (
    <Section title="Projects" index="02" accent={accents.projects}>
      <Entry
        eyebrow="Built from scratch"
        title="Hybrid RAG and Information Retrieval Engine from Scratch"
        link={github("RAG-from-scratch")}
        bullets={[
          "Built a **hybrid retrieval system** in pure Python, without high-level framework abstractions.",
          "Implemented **lexical search with BM25Okapi** for length-normalized keyword ranking, and **dense semantic search** with sentence-transformers and NumPy matrix dot products.",
          "Fused the candidate lists with **Reciprocal Rank Fusion (RRF)** before passing prompts to the Google Gemini API.",
          "Constructed a **synthetic corporate policy dataset** with custom YAML metadata headers to evaluate metadata pre-filtering and prevent parametric memory leakage.",
        ]}
        tags={["Python", "BM25", "Sentence-Transformers", "NumPy", "RRF", "Gemini API"]}
      />
      <Entry
        eyebrow="Built from scratch"
        title="ML from Scratch"
        link={github("ML-from-scratch")}
        bullets={[
          "Implemented **core machine learning algorithms from first principles** to understand the underlying mathematics.",
          "Built **linear regression** and **count-based word embeddings** without high-level ML libraries.",
          "Designed **neural networks** with forward and backward propagation from scratch, reaching **89.3% test accuracy on MNIST**.",
          "Focused on numerical computation, optimization and model evaluation.",
        ]}
        tags={["Python", "NumPy", "Neural Networks", "Backpropagation", "Word Embeddings", "MNIST"]}
      />
    </Section>
  );
};

export default Projects;
