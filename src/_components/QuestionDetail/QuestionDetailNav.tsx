"use client";

import * as React from "react";
import Nav from "../common/Nav/Nav";
import { shareButton } from "./questionDetail.css";
import shareCurrentUrl from "@/_utils/shareCurrentUrl";
import recordGAEvent from "@/_utils/recordGAEvent";
import { GA_EVENT } from "@/_constants/googleAnalytics";

export default function QuestionDetailNav() {
  const handleShareButton = () => {
    recordGAEvent(GA_EVENT.detailClickShare);

    try {
      shareCurrentUrl();
    } catch {}
  };

  return (
    <Nav
      RightSide={
        <button className={shareButton} onClick={handleShareButton}>
          공유하기
        </button>
      }
    />
  );
}
