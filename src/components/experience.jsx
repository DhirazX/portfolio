import Section from "./section";
import Entry from "./entry";

const Experience = () => (
  <Section title="Experience" index="04">
    <Entry
      eyebrow="May 2024 — Aug 2026"
      title="Software Engineer"
      subtitle="Dlplatforms Pvt. Ltd. (dl.surf)"
      tags={["React / Next.js", "TypeScript", "REST API Design", "NSFW Classification", "Content Moderation", "CI/CD · Jenkins"]}
      bullets={[
        "Developed **scalable web applications** with React.js, Next.js and TypeScript, focused on modular architecture and state management.",
        "Integrated an open-source **NSFW classification model** and custom **profanity filtering** algorithms for automated content moderation.",
        "Redesigned **API response schemas** to cut redundant round trips between the frontend and the REST backend.",
        "Worked in **continuous integration, code reviews and automated deployment** pipelines with Git, GitHub and Jenkins.",
      ]}
    />
    <Entry
      eyebrow="May 2023 — May 2024"
      title="Freelance Web Developer"
      subtitle="Client projects"
      tags={["React.js", "Tailwind CSS"]}
      bullets={[
        "Delivered **custom web applications** for client requirements using React.js and Tailwind CSS.",
        "Owned **end-to-end delivery** for **3+ client projects**: design, build, deployment and revisions.",
      ]}
    />
  </Section>
);

export default Experience;
