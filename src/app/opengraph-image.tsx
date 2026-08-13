import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social preview card, generated at build time so it always matches the config. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090d",
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 20% 0%, rgba(129,140,248,0.22), transparent), radial-gradient(ellipse 60% 60% at 100% 100%, rgba(34,211,238,0.14), transparent)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#4f46e5",
              color: "#ffffff",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            {siteConfig.initials}
          </div>
          <div style={{ color: "#9aa1b1", fontSize: 26, letterSpacing: 2 }}>PORTFOLIO</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#e9ebf0", fontSize: 82, fontWeight: 700, lineHeight: 1.05 }}>
            {siteConfig.name}
          </div>
          <div style={{ color: "#818cf8", fontSize: 46, fontWeight: 600, marginTop: 8 }}>
            {siteConfig.role}
          </div>
          <div
            style={{
              color: "#9aa1b1",
              fontSize: 28,
              lineHeight: 1.4,
              marginTop: 28,
              maxWidth: 900,
            }}
          >
            {siteConfig.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            color: "#6f7688",
            fontSize: 24,
            borderTop: "1px solid #22262f",
            paddingTop: 28,
          }}
        >
          <span>github.com/{siteConfig.githubUsername}</span>
          <span>·</span>
          <span>{siteConfig.email}</span>
        </div>
      </div>
    ),
    size,
  );
}
