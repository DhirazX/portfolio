import { motion } from "framer-motion";

export const reveal = (y) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
});

const Section = ({ title, index, children }) => (
  <section
    id={title.toLowerCase()}
    className="border-t border-rule px-[8%] py-16 font-mono text-ink max900:px-[6%] max900:py-12"
  >
    <div className="mx-auto w-full max-w-[1150px]">
      <motion.h2
        className="mb-10 flex items-baseline gap-3 text-[1.8rem] font-bold leading-none max600:text-[1.4rem]"
        {...reveal(20)}
      >
        <span className="text-[1rem] font-normal text-muted">{index}</span>
        {title.toLowerCase()}/
      </motion.h2>
      <div className="flex flex-col gap-12 max900:gap-10">{children}</div>
    </div>
  </section>
);

export default Section;
