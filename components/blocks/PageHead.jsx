import Breadcrumbs from "./Breadcrumbs";

export default function PageHead({ label, title, lede, crumbs, children }) {
  return (
    <header className="page-head">
      <div className="container">
        <div className="page-head__inner">
          {crumbs ? <Breadcrumbs items={crumbs} /> : null}
          {label ? <p className="label">{label}</p> : null}
          <h1 className="display display--hero">{title}</h1>
          {lede ? <p className="lede">{lede}</p> : null}
          {children}
        </div>
      </div>
    </header>
  );
}
