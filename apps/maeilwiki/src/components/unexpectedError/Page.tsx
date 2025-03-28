'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

import { Txt, Button } from '@maeil/ui';
import { PAGE_ROUTES } from '@/common/constants/pageRoutes';
import { FE_GITHUB_ISSUE_URL } from '@/common/constants/externalUrl';
import DeveloperEmoji from '@/assets/developerEmoji.svg';

import {
  buttonLink,
  buttonSection,
  container,
  content,
  developerEmoji,
  title,
} from './unexpectedError.css';

interface UnexpectedErrorPageProps {
  Nav?: ReactNode;
  error?: Error;
  feedbackUrl: string;
}

export default function UnexpectedErrorPage({ Nav, feedbackUrl }: UnexpectedErrorPageProps) {
  return (
    <div>
      {Nav}
      <div className={`${container}`}>
        <h1 className={title}>예기치 못한 오류가 발생했어요</h1>
        <section className={content}>
          <DeveloperEmoji className={developerEmoji} />
          <Txt variant="medium">
            불편을 드려 죄송합니다.{' '}
            <a href={FE_GITHUB_ISSUE_URL} rel="noopener noreferrer">
              Github Issue
            </a>
            나{' '}
            <a href={feedbackUrl} rel="noopener noreferrer">
              구글 폼
            </a>
            으로 지금 발생한 문제를 제보해 주시면, 빠르게 해결한 후 다시 안내 드리겠습니다!
          </Txt>
        </section>
        <section className={buttonSection}>
          <a className={buttonLink} href={feedbackUrl} rel="noopener noreferrer">
            <Button variant="border">피드백하기</Button>
          </a>
          <Link className={buttonLink} href={PAGE_ROUTES.main}>
            <Button variant="primary">홈으로</Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
