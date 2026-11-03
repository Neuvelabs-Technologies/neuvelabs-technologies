export default function SectionHead({ label, title, as: Tag = "h2", children }) {
  return (
    <div className="section-head">
      <div className="section-head__text">
        {label ? <p className="label">{label}</p> : null}
        {title ? <Tag className="display">{title}</Tag> : null}
      </div>
      {children}
    </div>
  );
}
