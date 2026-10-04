const Section = ({ title, index, children }) => (
  <section
    id={title.toLowerCase()}
    className="border-t border-rule px-[8%] py-16 font-mono text-ink max900:px-[6%] max900:py-12"
  >
    <div className="mx-auto w-full max-w-[1150px]">
      <h2 className="mb-10 flex items-baseline gap-3 text-[1.3rem] font-semibold leading-none text-muted/70 max600:text-[1.1rem]">
        <span className="text-[0.85rem] font-normal">{index}</span>
        {title.toLowerCase()}/
      </h2>
      <div className="flex flex-col gap-12 max900:gap-10">{children}</div>
    </div>
  </section>
);

export default Section;
