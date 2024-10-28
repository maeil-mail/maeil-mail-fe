import { style, styleVariants } from "@vanilla-extract/css";

export const dividerStyle = styleVariants({
  default: {
    border: `0.1px solid #e7e7e7`,
    maxWidth: "80rem",
    margin: "2.5rem auto",
  },
  none: {
    border: `none`,
    margin: "1rem auto",
  },
});
