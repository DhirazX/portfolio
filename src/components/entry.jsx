import { motion } from "framer-motion";
import { reveal } from "./section";
import Chip from "./chip";
import Eyebrow from "./eyebrow";

// **double asterisks** mark the phrase a skimmer's eye should land on
const emphasize = (text) =>
  text
    .split("**")
    .map((part, i) => (i % 2 ? <b className="font-bold" key={i}>{part}</b> : part));

const Entry = ({ eyebrow, title, subtitle, tags, link, bullets, children }) => (
  <motion.div
    className="flex justify-between gap-12 font-mono max900:flex-col max900:gap-5"
    {...reveal(60)}
  >
    <div className="w-[42%] max900:w-full">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h3 className="font-oswald text-[2rem] font-semibold leading-[1.15] max600:text-[1.6rem]">
        {title}
      </h3>
      {subtitle && (
        <div className="mt-3 text-[14px] italic leading-[1.5] text-[#555] max500:text-[13px]">
          {subtitle}
        </div>
      )}
      {tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
      )}
      {link && (
        <a
          className="mt-5 inline-flex items-center gap-2 rounded-[3px] border border-black px-[18px] py-2.5 text-[15px] text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white max500:px-3.5 max500:py-2 max500:text-[14px]"
          href={link.href}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={link.onEnter}
          onMouseLeave={link.onLeave}
        >
          {link.before} {link.label} {link.after}
        </a>
      )}
    </div>

    <div className="w-[52%] max900:w-full">
      {bullets ? (
        <ul className="list-disc space-y-2.5 pl-5 text-[16px] leading-[1.6] max500:text-[0.9rem]">
          {bullets.map((b) => (
            <li key={b}>{emphasize(b)}</li>
          ))}
        </ul>
      ) : (
        children
      )}
    </div>
  </motion.div>
);

export default Entry;
