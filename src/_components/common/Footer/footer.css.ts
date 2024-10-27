import { text2 } from "@/_styles/vars.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  padding: "5rem 1.6rem 5rem 1.6rem",
  display: "flex",
  justifyContent: "center",
  fontSize: "1.2rem",
  color: text2,
  backgroundColor: "#f9f9f9",
  fontWeight: 400,
});

export const innerWrapper = style({
  display: "flex",
  width: "80%",
  maxWidth: "110rem",
  justifyContent: "space-between",
  gap: "2rem",

  "@media": {
    "screen and (max-width: 820px)": {
      width: "90%",
      flexDirection: "column",
    },
  },
});

export const side = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  wordBreak: "keep-all",
});
