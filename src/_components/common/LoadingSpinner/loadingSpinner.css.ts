import { primary } from "@/_styles/vars.css";
import { style, keyframes } from "@vanilla-extract/css";

const spinAnimation = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const container = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

export const loader = style({
  border: `4px solid ${primary}`,
  borderLeftColor: "transparent",
  borderRadius: "50%",
  width: "4rem",
  height: "4rem",
  animation: `${spinAnimation} 1s linear infinite`,
});
