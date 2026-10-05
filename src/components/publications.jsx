import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Section from "./section";
import Entry from "./entry";

const Publications = () => (
  <Section title="Publications" index="01">
    <Entry
      eyebrow="2025, Conference paper"
      title="Query Refinement using Latent Dirichlet Allocation"
      subtitle="Proceedings of the International Conference on Innovation in Computing, Science, Engineering and Technology (ICICSET), 2025"
      link={{
        href: "https://doi.org/10.65091/icicset.v2i1.15",
        label: "DOI: 10.65091/icicset.v2i1.15",
        after: <FaArrowUpRightFromSquare />,
      }}
      description="This paper looks at whether topic modeling can help search engines work better. I used Latent Dirichlet Allocation (LDA) to build a system that improves search queries. I tested it on about 47,000 medical question and answer pairs from MedQuAD. I also compared it with LSI and BERT. The system is good at making queries broader, but it does not understand deep meaning as well."
      tags={["LDA", "Topic Modeling", "Query Expansion", "MedQuAD", "LSI", "BERT"]}
    />
  </Section>
);

export default Publications;
