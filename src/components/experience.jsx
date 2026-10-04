import Section from "./section";
import Entry from "./entry";

const Experience = () => (
  <Section title="Experience" index="04">
    <Entry
      eyebrow="May 2024 — Aug 2026"
      title="Software Engineer"
      subtitle="Dlplatforms Pvt. Ltd. (dl.surf)"
      tags={["React / Next.js", "TypeScript", "REST API Design", "NSFW Classification", "Content Moderation", "CI/CD · Jenkins"]}
      description="My day-to-day here is building production features in React, Next.js, and TypeScript — the kind of work where you're thinking about state management and API design as much as the UI. I also worked on the content moderation side, wiring up an NSFW classifier and a custom profanity filter, and spent time cleaning up API response schemas so the frontend wasn't making redundant round trips. All of it runs through a normal CI/CD pipeline with Git, GitHub, and Jenkins."
    />
    <Entry
      eyebrow="May 2023 — May 2024"
      title="Freelance Web Developer"
      subtitle="Client projects"
      tags={["React.js", "Tailwind CSS"]}
      description="Before this, I was freelancing: building websites for clients from scratch with React and Tailwind CSS. I handled everything end to end — design, build, deployment, and the inevitable round of revisions — across 3+ client projects."
    />
  </Section>
);

export default Experience;
