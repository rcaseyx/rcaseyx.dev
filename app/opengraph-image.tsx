import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ryan Casey";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 80px",
          backgroundColor: "#0B2B26",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 300,
            color: "#F0ECE4",
            lineHeight: 1,
            marginBottom: 24,
            letterSpacing: "-1px",
          }}
        >
          Ryan Casey
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#9AADA8",
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          Senior Software Engineer · rcaseyx.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
