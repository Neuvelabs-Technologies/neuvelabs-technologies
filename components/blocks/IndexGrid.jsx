// Numbered two- or three-column list. items: [{ title, description }]
export default function IndexGrid({ items, columns = 2 }) {
  return (
    <ol className={`index-grid${columns === 3 ? " index-grid--3" : ""}`} role="list">
      {items.map((item, i) => (
        <li key={item.title} className="index-item">
          <span className="index-item__num meta" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="index-item__title">{item.title}</h3>
          {item.description ? <p className="index-item__body">{item.description}</p> : null}
        </li>
      ))}
    </ol>
  );
}
