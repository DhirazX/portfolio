import Section from "./section";
import Entry from "./entry";

const Experience = () => (
  <Section title="Experience" index="04">
    <Entry
      eyebrow="May 2024 to Aug 2026"
      title="Software Engineer"
      subtitle="Dlplatforms Pvt. Ltd. (dl.surf)"
      tags={["NSFW Classification", "Content Moderation", "REST API Design", "CI/CD · Jenkins", "React / Next.js", "TypeScript"]}
      description="At this job, I worked on machine learning in production. I added an NSFW image classifier and a profanity filter, to automatically moderate content. I also worked on the backend. I redesigned the API responses, so the frontend does not need to make extra requests. All of my code goes through a CI/CD pipeline with Git, GitHub, and Jenkins. I also build features using React, Next.js, and TypeScript, including state management and the user interface."
    />
    <Entry
      eyebrow="May 2023 to May 2024"
      title="Freelance Developer"
      subtitle="Client projects"
      tags={["React.js", "Tailwind CSS"]}
      description="Before this job, I worked as a freelancer. I talked to clients to understand what they needed, then turned that into a working product. I used React and Tailwind CSS. I did everything myself: design, building the site, testing it, and putting it online. I also made changes based on feedback. I did this for more than 3 client projects, and learned how to work on my own and solve problems without much help."
    />
  </Section>
);

export default Experience;
