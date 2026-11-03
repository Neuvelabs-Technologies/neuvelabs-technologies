import { clients } from "@/lib/content/site";

function Group({ hidden = false }) {
  return (
    <ul className="marquee__group" role="list" aria-hidden={hidden || undefined}>
      {clients.map((c) => (
        <li key={c.name} className="marquee__logo">
          <a
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={hidden ? -1 : undefined}
            aria-label={c.name}
          >
            {/* Plain img: logos are small, mixed formats, and already optimized. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.logo} alt={hidden ? "" : c.name} loading="lazy" data-darken={c.darken || undefined} />
          </a>
        </li>
      ))}
    </ul>
  );
}

// Second copy makes the loop seamless; it is hidden from assistive tech.
export default function ClientMarquee() {
  return (
    <div className="marquee">
      <div className="marquee__track">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
