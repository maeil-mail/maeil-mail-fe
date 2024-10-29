import { style } from "@vanilla-extract/css";
import { primary, text2 } from "@/_styles/vars.css";

export const container = style({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const contentWrapper = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

export const mainText = style({
  color: primary,
  fontSize: "26rem",
  "@media": {
    "screen and (max-width: 1280px)": {},
    "screen and (max-width: 1024px)": {},
    "screen and (max-width: 912px)": {},
    "screen and (max-width: 853px)": {},
    "screen and (max-width: 820px)": {},
    "screen and (max-width: 768px)": {},
    "screen and (max-width: 540px)": {
      fontSize: "19rem",
    },
    "screen and (max-width: 430px)": {
      fontSize: "18rem",
    },
    "screen and (max-width: 414px)": {},
    "screen and (max-width: 412px)": {},
    "screen and (max-width: 390px)": {},
    "screen and (max-width: 375px)": {
      fontSize: "16rem",
    },
    "screen and (max-width: 360px)": {},
    "screen and (max-width: 344px)": {
      fontSize: "14rem",
    },
  },
});

export const description = style({
  color: text2,
  fontSize: "2.5rem",
  "@media": {
    "screen and (max-width: 1280px)": {},
    "screen and (max-width: 1024px)": {},
    "screen and (max-width: 912px)": {},
    "screen and (max-width: 853px)": {},
    "screen and (max-width: 820px)": {},
    "screen and (max-width: 768px)": {},
    "screen and (max-width: 540px)": {},
    "screen and (max-width: 430px)": {},
    "screen and (max-width: 414px)": {
      fontSize: "2rem",
    },
    "screen and (max-width: 412px)": {},
    "screen and (max-width: 390px)": {},
    "screen and (max-width: 375px)": {},
    "screen and (max-width: 360px)": {},
    "screen and (max-width: 344px)": {
      fontSize: "1.7rem",
    },
  },
});

export const buttonWrapper = style({
  width: "100%",
  marginTop: "4rem",
});
