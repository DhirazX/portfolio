const Chip = ({ icon: Icon, children }) => (
  <div className="inline-flex items-center gap-1 bg-gray-100 px-2 py-0.5 text-[12px] text-ink max500:text-[11px]">
    {Icon && <Icon />}
    {children}
  </div>
);

export default Chip;
