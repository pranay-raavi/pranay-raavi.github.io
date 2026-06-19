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
            "radial-gradient(900px 500px at 12% -10%, #4a1d6d 0%, transparent 55%), radial-gradient(900px 500px at 100% 120%, #7a1f6b 0%, transparent 55%), #0a0712",
          color: "#f4f1ff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 24,
            color: "#c084fc",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #a855f7 0%, #d946ef 100%)",
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
            background: "linear-gradient(100deg, #f4f1ff 0%, #c084fc 50%, #d946ef 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Raavi Pranay
        </div>

        <div style={{ marginTop: 22, fontSize: 44, fontWeight: 700, color: "#c084fc", display: "flex" }}>
          AI Engineer
        </div>
        <div style={{ marginTop: 6, fontSize: 28, fontWeight: 500, color: "#b5a8d0", display: "flex" }}>
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
                  border: "1px solid #3a3050",
                  background: "rgba(168, 85, 247, 0.08)",
                  color: "#b5a8d0",
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
