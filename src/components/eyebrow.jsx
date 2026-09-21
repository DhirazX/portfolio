const Eyebrow = ({ children }) => (
  <div className="mb-3 flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.12em] text-[#555]">
    <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]"></span>
    {children}
  </div>
);

export default Eyebrow;
