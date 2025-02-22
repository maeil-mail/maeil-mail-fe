'use client';

import '@mdxeditor/editor/style.css';
import recordGAEvent from '@/_utils/recordGAEvent';
import { GA_EVENT } from '@/_constants/googleAnalytics';
import shareCurrentUrl from './_utils/shareCurrentUrl';
import ShareIcon from '@/_assets/icons/share.svg';
import IdeaIcon from '@/_assets/icons/idea.svg';
import {
  buttonWrapper,
  ideaIcon,
  primaryButton,
  separator,
  shareIcon,
  subButton,
} from './questionDetail.css';
import { MAEIL_MAIL_GOOGLE_FORM_URL } from '@/_constants/externalUrl';
import MDPreview from '../MaeilWiki/Markdown/MDPreview';

interface DetailAnswerProps {
  content: string;
}

export default function DetailAnswer({ content }: DetailAnswerProps) {
  const handleShareButton = () => {
    recordGAEvent(GA_EVENT.detailClickShare);

    try {
      shareCurrentUrl();
    } catch {}
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
