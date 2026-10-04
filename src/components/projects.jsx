import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Section from "./section";
import Entry from "./entry";

const github = (repo) => ({
  href: `https://github.com/DhirazX/${repo}`,
  label: `DhirazX/${repo}`,
  before: <FaGithub />,
  after: <FaArrowUpRightFromSquare />,
});

const Projects = () => (
  <Section title="Projects" index="02">
    <Entry
      eyebrow="Retrieval system"
      title="Hybrid RAG and Information Retrieval Engine"
      link={github("hybrid-rag-retrieval-engine")}
      description="A retrieval system I built entirely in Python, no LangChain or framework abstractions. It combines BM25 keyword search with dense vector search over sentence-transformer embeddings, then merges both result sets with Reciprocal Rank Fusion before handing the best matches to Gemini. I also built a synthetic policy dataset with metadata filters, to check the system doesn't leak information it isn't supposed to have access to."
      tags={["Python", "BM25", "Sentence-Transformers", "NumPy", "RRF", "Gemini API"]}
    />
    <Entry
      eyebrow="Paper reimplementation"
      title="LLM Watermarking for Text Summarization"
      link={github("watermarking-llm-summaries")}
      description="I reimplemented a token-level watermarking algorithm (from Kirchenbauer et al., 2023) and applied it to a BART summarizer, to see if you could reliably prove a piece of text came from an LLM. The trick is biasing which words the model can pick from during generation, then running a statistical detector on the output afterward. It worked well — watermarked summaries scored ~4.1 on the detection test versus ~0 for normal text, while barely hurting summary quality."
      tags={["Python", "PyTorch", "Transformers", "BART", "ROUGE", "Statistical Detection"]}
    />
    <Entry
      eyebrow="From first principles"
      title="ML Fundamentals"
      link={github("ML-fundamentals")}
      description="Before reaching for PyTorch or scikit-learn, I wanted to actually understand what they're doing underneath. So I implemented linear regression, word embeddings, and a full neural network with backpropagation using nothing but NumPy, down to the matrix math. The neural net ended up hitting 89.3% accuracy on MNIST, which felt like proof the fundamentals had actually sunk in."
      tags={["Python", "NumPy", "Neural Networks", "Backpropagation", "Word Embeddings", "MNIST"]}
    />
    <Entry
      eyebrow="Hackathon winner"
      title="Kakshya"
      link={github("kakshya")}
      description="Built this in 6 hours at eSewa Webthon 2080, a hackathon organized by Instinct Nepal — and it won first place. It's an AI note-taking app for classroom lectures: it records, summarizes, and sorts them into categorized notes so you can skim the key points later instead of rewatching everything."
      tags={["HTML", "CSS", "JavaScript", "Django"]}
    />
  </Section>
);

export default Projects;
