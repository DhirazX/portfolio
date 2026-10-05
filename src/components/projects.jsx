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
      eyebrow="In progress"
      eyebrowTone="warning"
      title="shellsense"
      link={github("shellsense")}
      description="A search tool for the terminal. You type what you want to do, like 'extract a tar file', and it gives you the right command. This saves you from reading man pages. I just started this project. So far, I have parsed the tldr-pages data and saved it in a SQLite database, one example per row. Next, I need to build a BM25 search method and a way to test it. After that, I plan to add dense and hybrid search, so I can compare different methods using IR metrics like MRR and Recall@k. This is early work and will take time to finish."
      tags={["Python", "SQLite", "BM25", "Sentence-Transformers"]}
    />
    <Entry
      eyebrow="Retrieval system"
      title="Hybrid RAG and Information Retrieval Engine"
      link={github("hybrid-rag-retrieval-engine")}
      description="A search system I built in Python, without using LangChain or other big frameworks. It uses two methods to find results: BM25, which looks for matching keywords, and dense vector search, which looks for similar meaning. I combine both results using a method called Reciprocal Rank Fusion. Then I send the best results to Gemini to get an answer. I also made a test dataset with fake company documents, to check that the system does not share information it should not share."
      tags={["Python", "BM25", "Sentence-Transformers", "NumPy", "RRF", "Gemini API"]}
    />
    <Entry
      eyebrow="Paper reimplementation"
      title="LLM Watermarking for Text Summarization"
      link={github("watermarking-llm-summaries")}
      description="I built a watermarking method from a research paper by Kirchenbauer and others (2023), and used it on a BART summarizer. The goal is to prove that text was written by an AI model. It works by changing which words the model is allowed to use while it writes. Then a detector checks the text later to see if it has the watermark. It worked well. Watermarked summaries scored about 4.1 on the test, while normal text scored about 0. The summaries were still good quality."
      tags={["Python", "PyTorch", "Transformers", "BART", "ROUGE", "Statistical Detection"]}
    />
    <Entry
      eyebrow="From first principles"
      title="ML Fundamentals"
      link={github("ML-fundamentals")}
      description="Before using tools like PyTorch or scikit-learn, I wanted to understand how they work. So I built linear regression, word embeddings, and a full neural network using only NumPy. I wrote all the math by hand, including backpropagation. The neural network reached 89.3% accuracy on MNIST. This showed me that I really understood the basics."
      tags={["Python", "NumPy", "Neural Networks", "Backpropagation", "Word Embeddings", "MNIST"]}
    />
  </Section>
);

export default Projects;
