import Chip from "./chip";
import Eyebrow from "./eyebrow";

const Entry = ({ eyebrow, title, subtitle, tags, link, description, children }) => (
  <div className="font-mono">
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h3 className="text-[1.4rem] font-bold leading-[1.25] max600:text-[1.2rem]">
      {title}
    </h3>
    {subtitle && (
      <div className="mt-2 text-[15px] italic leading-[1.5] text-muted max500:text-[14px]">
        {subtitle}
      </div>
    )}
    {description ? (
      <p className="mt-3 text-[16px] leading-[1.6] max500:text-[0.95rem]">
        {description}
      </p>
    ) : (
      <div className="mt-3">{children}</div>
    )}
    {tags && (
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>
    )}
    {link && (
      <a
        className="mt-4 inline-flex items-center gap-2 border border-ink px-4 py-2 text-[15px] text-ink no-underline transition-colors duration-150 hover:bg-ink hover:text-white max500:px-3.5 max500:py-1.5 max500:text-[14px]"
        href={link.href}
        target="_blank"
        rel="noreferrer"
      >
        {link.before} {link.label} {link.after}
      </a>
    )}
  </div>
);

export default Entry;
