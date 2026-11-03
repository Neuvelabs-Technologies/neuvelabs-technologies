import { ImageResponse } from "next/og";

export const alt = "Neuve Labs — AI and IT consultancy, UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Typographic social card in the site's palette.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#ffffff",
          color: "#26231f",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="56" height="56" viewBox="0 0 317 317">
            <path d="M316.5 158.25V32.75L289.75 0H158.25V316.5L316.5 158.25Z" fill="#00F0FF" />
            <path d="M17.77 17.77L0 26.75V316.5H158.25V158.25L17.77 17.77Z" fill="#2D5AF5" />
          </svg>
          <div style={{ fontSize: 30, fontFamily: "sans-serif", letterSpacing: 4 }}>NEUVE LABS</div>
        </div>
        <div style={{ display: "flex", fontSize: 66, lineHeight: 1.12, maxWidth: 980 }}>
          We build the software, data and AI systems that businesses run on.
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: "sans-serif", fontSize: 24, color: "#6b655c", borderTop: "2px solid #26231f", paddingTop: 24 }}>
          <div style={{ display: "flex" }}>AI and IT consultancy · Ras Al Khaimah, UAE</div>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ width: 44, height: 20, borderRadius: 999, background: "#2d5af5" }} />
            <div style={{ width: 44, height: 20, borderRadius: 999, background: "#00f0ff" }} />
            <div style={{ width: 44, height: 20, borderRadius: 999, background: "#f2643a" }} />
          </div>
        </div>
      </div>
    ),
    size
  );
}
