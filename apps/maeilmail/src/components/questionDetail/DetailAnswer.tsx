'use client';

import { recordGAEvent } from '@/common/utils/recordGAEvent';
import { GA_EVENT } from '@/common/constants/gaEvent';
import { shareCurrentUrl } from './utils/shareCurrentUrl';
import ShareIcon from '@/assets/icons/share.svg';
import IdeaIcon from '@/assets/icons/idea.svg';
import {
  buttonWrapper,
  ideaIcon,
  primaryButton,
  separator,
  shareIcon,
  subButton,
} from './questionDetail.css';
import { MAEIL_MAIL_GOOGLE_FORM_URL } from '@/common/constants/externalUrl';
import { MDPreview } from '@maeil/ui';

interface DetailAnswerProps {
  content: string;
}

export default function DetailAnswer({ content }: DetailAnswerProps) {
  const handleShareButton = () => {
    recordGAEvent(GA_EVENT.detailClickShare);

    try {
      shareCurrentUrl();
    } catch {
      //
    }
  };

  return (
    <>
      <MDPreview source={content} />
      <div className={separator}></div>
      <div className={buttonWrapper}>
        <div className={primaryButton} onClick={handleShareButton}>
          <ShareIcon className={shareIcon} />
          공유하기
        </div>
        <a href={MAEIL_MAIL_GOOGLE_FORM_URL.mailContent}>
          <div className={subButton}>
            <IdeaIcon className={ideaIcon} />
            컨텐츠 피드백
          </div>
        </a>
      </div>
    </>
  );
}
