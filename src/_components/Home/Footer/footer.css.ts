import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  padding: "5rem 1.6rem 7.5rem 1.6rem",
  display: "flex",
  justifyContent: "center",
  fontSize: "1.2rem",
  color: "#9BA1A5",
});

export const innerWrapper = style({
  display: "flex",
  width: "80%",
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

export const contactText = style({});
