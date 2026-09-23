const Chip = ({ icon: Icon, children }) => (
  <div className="inline-flex items-center gap-1.5 border border-rule px-2.5 py-1 text-[13px] text-ink transition-colors duration-150 hover:bg-black/[0.05] max500:text-[12px]">
    {Icon && <Icon />}
    {children}
  </div>
);

export default Chip;
