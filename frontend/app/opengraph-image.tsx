import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rooted Wellness | Nervous System Regulation for Sustainable Performance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0F1F1A 0%, #1F3A2E 50%, #2F6B4F 100%)",
          color: "#FAF7F0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              background: "#0F1F1A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(216,183,106,0.25)",
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                background:
                  "linear-gradient(135deg, #D8B76A 0%, #C98863 100%)",
              }}
            />
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Rooted Wellness
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              padding: "8px 16px",
              borderRadius: 999,
              border: "1px solid rgba(216,183,106,0.35)",
              background: "rgba(31,58,46,0.6)",
              color: "#D8B76A",
              fontSize: 18,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            The Nervous System Performance Company
          </div>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            Rooted in your worth.
            <br />
            <span
              style={{
                background:
                  "linear-gradient(90deg, #D8B76A, #F2DDA6, #D8B76A)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Aligned, abundant, at peace.
            </span>
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(250,247,240,0.78)",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            A 30-day, neuroscience-informed reset for high-performing
            professionals. Burnout is not failure. It is biology.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "rgba(250,247,240,0.7)",
          }}
        >
          <div>rootedwellness.com</div>
          <div>30-Day High Performance Reset</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
