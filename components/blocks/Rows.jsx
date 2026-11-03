import Link from "next/link";
import { accentAt } from "@/lib/content/site";

// Full-width ruled link rows. items: [{ href, title, description? }]
export default function Rows({ items, detailed = false }) {
  return (
    <ul className="rows" role="list">
      {items.map((item, i) => (
        <li key={item.href} data-accent={item.accent || accentAt(i)}>
          <Link href={item.href} className={`row${detailed ? " row--detailed" : ""}`}>
            <span className="row__title">{item.title}</span>
            {detailed && item.description ? <span className="row__desc">{item.description}</span> : null}
            <span className="row__arrow arrow" aria-hidden="true">→</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
