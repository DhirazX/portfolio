const Chip = ({ icon: Icon, children }) => (
  <div className="inline-flex items-center gap-1.5 rounded-full bg-black/[0.07] px-3 py-[5px] font-mono text-[14px] transition-colors duration-300 hover:bg-black/[0.13] max500:text-[12px]">
    {Icon && <Icon />}
    {children}
  </div>
);

export default Chip;
