'use client';

import * as React from 'react';
import Nav from '../Nav/Nav';
import { shareButton } from './questionPageNav.css';
import shareCurrentUrl from '@/_utils/shareCurrentUrl';
import recordGAEvent from '@/_utils/recordGAEvent';
import { GA_EVENT } from '@/_constants/googleAnalytics';

interface QuestionPageNavProps {
  isSharable?: boolean;
}

export default function QuestionPageNav({ isSharable }: QuestionPageNavProps) {
  const handleShareButton = () => {
    recordGAEvent(GA_EVENT.detailClickShare);

    try {
      shareCurrentUrl();
    } catch {}
  };

  return (
    <Nav
      RightSide={
        isSharable ? (
          <button className={shareButton} onClick={handleShareButton}>
            공유하기
          </button>
        ) : (
          <></>
        )
      }
    />
  );
}
