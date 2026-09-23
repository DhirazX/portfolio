import Section from "./section";
import Entry from "./entry";
import Eyebrow from "./eyebrow";
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
  <Section title="Education" index="03">
    <Entry
      eyebrow="2021 — 2025"
      title="Bachelor’s in Software Engineering"
      subtitle="Nepal College of Information and Technology"
    >
      <Eyebrow>relevant coursework</Eyebrow>
      <div className="flex flex-wrap gap-2">
        {coursework.map((course) => (
          <Chip key={course}>{course}</Chip>
        ))}
      </div>
    </Entry>
  </Section>
);

export default Education;
