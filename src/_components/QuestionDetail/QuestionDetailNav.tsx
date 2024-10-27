"use client";

import * as React from "react";
import Nav from "../common/Nav/Nav";
import { shareButton } from "./questionDetail.css";
import shareCurrentUrl from "@/_utils/shareCurrentUrl";

export default function QuestionDetailNav() {
  return (
    <Nav
      RightSide={
        <button className={shareButton} onClick={shareCurrentUrl}>
          공유하기
        </button>
      }
    />
  );
}
