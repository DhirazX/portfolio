import Section from "./section";
import Entry from "./entry";

const Experience = () => (
  <Section title="Experience" index="04">
    <Entry
      eyebrow="May 2024 to Aug 2026"
      title="Software Engineer"
      subtitle="Dlplatforms Pvt. Ltd. (dl.surf)"
      tags={["React / Next.js", "TypeScript", "REST API Design", "NSFW Classification", "Content Moderation", "CI/CD · Jenkins"]}
      description="At this job, I build real features using React, Next.js, and TypeScript. I work on both the user interface and things like state management and API design. I also worked on content moderation. I added an NSFW image classifier and a profanity filter. I also improved the API responses, so the frontend does not have to make extra requests. All of this goes through a CI/CD pipeline with Git, GitHub, and Jenkins."
    />
    <Entry
      eyebrow="May 2023 to May 2024"
      title="Freelance Web Developer"
      subtitle="Client projects"
      tags={["React.js", "Tailwind CSS"]}
      description="Before this job, I worked as a freelancer. I built websites for clients using React and Tailwind CSS. I did everything myself: design, building the site, putting it online, and making changes the client asked for. I did this for more than 3 client projects."
    />
  </Section>
);

export default Experience;
