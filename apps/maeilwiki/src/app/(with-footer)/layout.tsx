import {
  MAEIL_WIKI_GOOGLE_FORM_URL,
  MAEIL_WIKI_INTRODUCTION_URL,
} from '@/common/constants/externalUrl';
import { Footer } from '@maeil/ui';
import * as React from 'react';
import { withFooterContent } from '../layout.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={withFooterContent}>{children}</div>
      <Footer
        serviceName="매일위키"
        introduceUrl={MAEIL_WIKI_INTRODUCTION_URL}
        feedbackUrl={MAEIL_WIKI_GOOGLE_FORM_URL.service}
      />
    </>
  );
}
