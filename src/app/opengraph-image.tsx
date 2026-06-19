import { ImageResponse } from "next/og";

export const alt = "Raavi Pranay — AI Engineer · Frontend Developer · Software Developer";
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
            "radial-gradient(900px 500px at 12% -10%, #0e2a55 0%, transparent 55%), radial-gradient(900px 500px at 100% 120%, #0c3c5e 0%, transparent 55%), #060912",
          color: "#ecf0f8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 24,
            color: "#60a5fa",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #1e40af 0%, #0ea5e9 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 800,
              color: "#ffffff",
            }}
          >
            RP
          </div>
          Portfolio
        </div>

        <div
          style={{
            marginTop: 34,
            fontSize: 80,
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: "-2px",
            background: "linear-gradient(100deg, #ecf0f8 0%, #60a5fa 50%, #0ea5e9 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Raavi Pranay
        </div>

        <div style={{ marginTop: 22, fontSize: 44, fontWeight: 700, color: "#60a5fa", display: "flex" }}>
          AI Engineer
        </div>
        <div style={{ marginTop: 6, fontSize: 28, fontWeight: 500, color: "#8593b0", display: "flex" }}>
          Frontend Developer · Software Developer
        </div>

        <div style={{ marginTop: 40, display: "flex", gap: 14, flexWrap: "wrap" }}>
          {["Next.js", "React.js", "FastAPI", "MongoDB", "RAG", "Semantic Search"].map(
            (t) => (
              <div
                key={t}
                style={{
                  fontSize: 26,
                  padding: "10px 22px",
                  borderRadius: 12,
                  border: "1px solid #2a3658",
                  background: "rgba(59, 130, 246, 0.08)",
                  color: "#8593b0",
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
