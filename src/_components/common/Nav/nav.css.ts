import { style, styleVariants } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "6.45rem",
  padding: "1.4rem 2rem",
  background: "rgba(255, 255, 255, 0.6)",
  backdropFilter: "saturate(180%) blur(3px)",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const positionStyle = styleVariants({
  default: { position: "relative", borderBottom: "1px solid #E7E7E7" },
  sticky: { position: "sticky", top: 0 },
});

export const innerWrapper = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "110rem",
  width: "100%",
});

export const logo = style({
  height: "2.8rem",

  cursor: "pointer",
});
