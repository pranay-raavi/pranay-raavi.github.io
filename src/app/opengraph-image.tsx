import { ImageResponse } from "next/og";

export const alt = "Raavi Pranay — Software Developer · Full-Stack · AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(1000px 500px at 15% -10%, #0e2a3a 0%, transparent 55%), radial-gradient(900px 500px at 100% 120%, #1b1d4d 0%, transparent 55%), #07080c",
          color: "#e7ecf5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 24,
            color: "#38bdf8",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              border: "1px solid #1d2233",
              background: "#0f1119",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 700,
              color: "#22d3ee",
            }}
          >
            RP
          </div>
          Portfolio
        </div>

        <div
          style={{
            marginTop: 34,
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            background: "linear-gradient(100deg, #e7ecf5, #7dd3fc 55%, #818cf8)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Raavi Pranay
        </div>

        <div style={{ marginTop: 22, fontSize: 42, fontWeight: 700, color: "#7dd3fc", display: "flex" }}>
          Software Developer
        </div>
        <div style={{ marginTop: 6, fontSize: 28, fontWeight: 500, color: "#9aa6bd", display: "flex" }}>
          Full-Stack Engineer · AI Applications Engineer
        </div>

        <div style={{ marginTop: 40, display: "flex", gap: 14, flexWrap: "wrap" }}>
          {["Next.js", "React.js", "FastAPI", "MongoDB", "REST APIs", "RAG"].map(
            (t) => (
              <div
                key={t}
                style={{
                  fontSize: 26,
                  padding: "10px 22px",
                  borderRadius: 12,
                  border: "1px solid #1d2233",
                  background: "#0f1119",
                  color: "#9aa6bd",
                }}
              >
                {t}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
