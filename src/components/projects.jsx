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
      title="vectorgrad"
      link={github("vectorgrad")}
      description="An automatic differentiation engine built from scratch, in the style of Karpathy's micrograd. So far, I have built the scalar version: a Value class that tracks operations and computes gradients with backpropagation, plus a small neural network (neuron, layer, MLP) on top of it. I tested the gradients and the network output against PyTorch using pytest. Next, I am building a tensor version backed by NumPy, with matrix multiplication and broadcasting, so it works on whole arrays instead of single numbers."
      tags={["Python", "SQLite", "BM25"]}
    />
    <Entry
      eyebrow="Search tool"
      title="shellsense"
      link={github("shellsense")}
      description="A search tool for the terminal. You type what you want to do, like 'extract a tar file', and it gives you the right command. This saves you from reading man pages. I parsed the tldr-pages data and saved it in a SQLite database, one example per row. The search uses BM25 to rank the examples against your query, and an interactive command line interface lets you search and get results right away."
      tags={["Python", "SQLite", "BM25"]}
    />
    <Entry
      eyebrow="Retrieval system"
      title="Hybrid RAG and Information Retrieval Engine"
      link={github("hybrid-rag-retrieval-engine")}
      description="A search system I built in Python, without using LangChain or other big frameworks. It uses two methods to find results: BM25, which looks for matching keywords, and dense vector search, which looks for similar meaning. I combine both results using a method called Reciprocal Rank Fusion. Then I send the best results to Gemini to get an answer. I also made a test dataset with fake company documents, to check that the system does not share information it should not share."
      tags={[
        "Python",
        "BM25",
        "Sentence-Transformers",
        "NumPy",
        "RRF",
        "Gemini API",
      ]}
    />
    <Entry
      eyebrow="Paper reimplementation"
      title="LLM Watermarking for Text Summarization"
      link={github("watermarking-llm-summaries")}
      description="I built a watermarking method from a research paper by Kirchenbauer and others (2023), and used it on a BART summarizer. The goal is to prove that text was written by an AI model. It works by changing which words the model is allowed to use while it writes. Then a detector checks the text later to see if it has the watermark. It worked well. Watermarked summaries scored about 4.1 on the test, while normal text scored about 0. The summaries were still good quality."
      tags={[
        "Python",
        "PyTorch",
        "Transformers",
        "BART",
        "ROUGE",
        "Statistical Detection",
      ]}
    />
    <Entry
      eyebrow="From first principles"
      title="ML Fundamentals"
      link={github("ML-fundamentals")}
      description="Before using tools like PyTorch or scikit-learn, I wanted to understand how they work. So I built linear regression, word embeddings, and a full neural network using only NumPy. I wrote all the math by hand, including backpropagation. The neural network reached 89.3% accuracy on MNIST. This showed me that I really understood the basics."
      tags={[
        "Python",
        "NumPy",
        "Neural Networks",
        "Backpropagation",
        "Word Embeddings",
        "MNIST",
      ]}
    />
  </Section>
);

export default Projects;
