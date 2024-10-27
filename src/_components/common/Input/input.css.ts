import { style, styleVariants } from "@vanilla-extract/css";
import { text1 } from "@/_styles/vars.css";

export const container = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
});

export const sizeStyle = styleVariants({
  full: { width: "100%" },
  large: { width: "70%" },
  medium: { width: "50%" },
  small: { width: "30%" },
});

export const inputStyle = styleVariants({
  default: {
    background: "none",
    color: text1,
    padding: "1rem",
    fontSize: "1.8rem",
    minHeight: "3rem",
    borderRadius: "1rem",
  },
  primary: {
    backgroundColor: "rgba(0, 168, 107, 0.08)",
    color: text1,
    padding: "1.2rem",
    fontSize: "1.6rem",
    minHeight: "3rem",
    borderRadius: "1rem",
    border: "0.5px solid rgba(135, 135, 135, 0.27)",

    selectors: {
      "&::placeholder": {
        color: "rgba(153, 153, 153, 0.55)",
      },
    },
  },
  underLine: {
    border: "none",
    padding: "1rem",
    fontSize: "1.8rem",
    borderBottom: "0.1rem solid #fff",
    background: "none",
    color: text1,
    textAlign: "center",
  },
});

export const baseInputStyle = style({
  ":focus": {
    outline: "none",
  },
  margin: "0 auto",
});

export const dangerStyle = style({
  borderBottom: "0.01rem solid red !important",
  color: "red !important",
});

export const errorText = style({
  position: "absolute",
  bottom: "-2.2rem",
  left: "1rem",
  color: "red",
  textAlign: "center",
  marginTop: "1rem",
  fontSize: "1.4rem",
});
