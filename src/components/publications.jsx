import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Section from "./section";
import Entry from "./entry";

const Publications = () => (
  <Section title="Publications" index="01">
    <Entry
      eyebrow="2025 — Conference paper"
      title="Query Refinement using Latent Dirichlet Allocation"
      subtitle="Proceedings of the International Conference on Innovation in Computing, Science, Engineering and Technology (ICICSET), 2025"
      link={{
        href: "https://doi.org/10.65091/icicset.v2i1.15",
        label: "DOI: 10.65091/icicset.v2i1.15",
        after: <FaArrowUpRightFromSquare />,
      }}
      description="This paper asks whether topic modeling can make search smarter without the cost of a transformer. I built an unsupervised query refinement framework using Latent Dirichlet Allocation, tested it on ~47K medical QA pairs from MedQuAD, and compared it against LSI and BERT-based methods. It's genuinely good at broadening queries, but it struggles with deeper contextual meaning — which turned out to be the more interesting finding."
      tags={["LDA", "Topic Modeling", "Query Expansion", "MedQuAD", "LSI", "BERT"]}
    />
  </Section>
);

export default Publications;
