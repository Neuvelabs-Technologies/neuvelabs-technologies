// Three slanted bars taken from the angle of the Neuve Labs mark.
export default function Decor({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 132 44" aria-hidden="true" focusable="false">
      <polygon points="0,44 22,0 36,0 14,44" fill="var(--blue)" />
      <polygon points="48,44 70,0 84,0 62,44" fill="var(--cyan)" />
      <polygon points="96,44 118,0 132,0 110,44" fill="var(--orange)" />
    </svg>
  );
}
