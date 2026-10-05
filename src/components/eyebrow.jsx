const tones = {
  default: { mark: "text-accent", text: "text-muted", weight: "" },
  // for status flags like "in progress". the one deliberate use of a status color on the site
  warning: { mark: "text-amber-600", text: "text-amber-600", weight: "font-bold" },
};

const Eyebrow = ({ children, tone = "default" }) => {
  const c = tones[tone] ?? tones.default;
  return (
    <div className={`mb-3 text-[14px] ${c.text} ${c.weight}`}>
      <span className={c.mark}>{"//"}</span> {children}
    </div>
  );
};

export default Eyebrow;
