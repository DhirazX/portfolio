import Section, { accents } from "./section";
import Entry from "./entry";
import Chip from "./chip";

const coursework = [
  "Data Structures and Algorithms",
  "Artificial Intelligence",
  "Natural Language Processing",
  "Cloud Computing",
  "Software Engineering",
  "Enterprise Systems",
];

const Education = () => (
  <Section title="Education" index="03" accent={accents.education}>
    <Entry
      eyebrow="2021 — 2025"
      title="Bachelor’s in Software Engineering"
      subtitle="Nepal College of Information and Technology"
    >
      <div className="text-[13px] uppercase tracking-[0.12em] text-[#555]">
        Relevant coursework
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {coursework.map((course) => (
          <Chip key={course}>{course}</Chip>
        ))}
      </div>
    </Entry>
  </Section>
);

export default Education;
