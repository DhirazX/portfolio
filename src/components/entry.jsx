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
    {...reveal(40)}
  >
    <div className="w-[42%] max900:w-full">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h3 className="text-[1.3rem] font-bold leading-[1.25] max600:text-[1.1rem]">
        {title}
      </h3>
      {subtitle && (
        <div className="mt-2 text-[14px] italic leading-[1.5] text-muted max500:text-[13px]">
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
          className="mt-5 inline-flex items-center gap-2 border border-ink px-4 py-2 text-[14px] text-ink no-underline transition-colors duration-150 hover:bg-ink hover:text-white max500:px-3.5 max500:py-1.5 max500:text-[13px]"
          href={link.href}
          target="_blank"
          rel="noreferrer"
        >
          {link.before} {link.label} {link.after}
        </a>
      )}
    </div>

    <div className="w-[52%] max900:w-full">
      {bullets ? (
        <ul className="space-y-2.5 text-[15px] leading-[1.6] max500:text-[0.9rem]">
          {bullets.map((b) => (
            <li className="flex gap-2.5" key={b}>
              <span className="text-muted">-</span>
              <span>{emphasize(b)}</span>
            </li>
          ))}
        </ul>
      ) : (
        children
      )}
    </div>
  </motion.div>
);

export default Entry;
