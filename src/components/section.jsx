import { motion } from "framer-motion";

export const reveal = (y) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8 },
});

// one accent per section: muted, earthy tones; deliberately no red / yellow / bright green (status colors)
export const accents = {
  publications: "#75609e",
  projects: "#3a6ea5",
  education: "#a06f3b",
  experience: "#2f8078",
  skills: "#8c5a80",
};

const Section = ({ title, index, accent, children }) => (
  <section
    id={title.toLowerCase()}
    className="px-[8%] py-20 font-oswald text-black max900:px-[6%] max900:py-14"
    style={{ "--accent": accent }}
  >
    <div className="mx-auto w-full max-w-[1150px]">
      <motion.h2
        className="mb-14 flex items-center gap-5 text-left text-[3.4rem] font-semibold uppercase leading-none text-[var(--accent)] max600:mb-12 max600:text-[2.4rem]"
        {...reveal(30)}
      >
        {title}
        <span className="mt-2 h-px flex-1 bg-black/25"></span>
        <span
          className="text-transparent [-webkit-text-stroke:1px_var(--accent)]"
          aria-hidden="true"
        >
          {index}
        </span>
      </motion.h2>
      <div className="flex flex-col gap-12 max900:gap-10">{children}</div>
    </div>
  </section>
);

export default Section;
