import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Section, { accents } from "./section";
import Entry from "./entry";

const Publications = () => (
  <Section title="Publications" index="01" accent={accents.publications}>
    <Entry
      eyebrow="2025 — Conference paper"
      title="Query Refinement using Latent Dirichlet Allocation"
      subtitle="Proceedings of the International Conference on Innovation in Computing, Science, Engineering and Technology (ICICSET), 2025"
      link={{
        href: "https://doi.org/10.65091/icicset.v2i1.15",
        label: "DOI: 10.65091/icicset.v2i1.15",
        after: <FaArrowUpRightFromSquare />,
      }}
      bullets={[
        "Proposed an unsupervised query refinement framework that uses **Latent Dirichlet Allocation** to improve semantic search relevance, with coherence-based selection of the number of topics.",
        "Ran experiments on **MedQuAD (~47K medical QA pairs)** with full preprocessing and linguistic filtering.",
        "Compared against **LSI and BERT-based methods**, mapping the trade-off between probabilistic topic models and contextual embeddings.",
        "Showed topic modeling is **effective for query expansion**, and pinned down where it fails on contextual semantics.",
      ]}
      tags={["LDA", "Topic Modeling", "Query Expansion", "MedQuAD", "LSI", "BERT"]}
    />
  </Section>
);

export default Publications;
