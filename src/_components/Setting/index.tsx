'use client';

import { patchMailFrequency } from '@/_apis/subscription';
import Button from '@/_components/common/Button/Button';
import Nav from '@/_components/common/Nav/Nav';
import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';
import { MAIL_FREQUENCY } from '@/_constants/setting';
import { MailFrequency } from '@/_types';
import * as React from 'react';
import MailFrequencySection from './MailFrequencySection';
import { settingButton, settingContainer, settingContent, settingTitle } from './setting.css';

export default function Setting({
  email,
  token,
  currentMailFrequency,
}: {
  email: string;
  token: string;
  currentMailFrequency: MailFrequency;
}) {
  const [mailFrequency, setMailFrequency] = React.useState<MailFrequency>(currentMailFrequency);

  const onMailFrequencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (Object.keys(MAIL_FREQUENCY).includes(value)) {
      setMailFrequency(value as MailFrequency);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      email,
      token,
      frequency: mailFrequency,
    };

    await patchMailFrequency(payload);
    alert('설정이 완료되었습니다.');
  };

  return (
    <div className={settingContainer}>
      <Nav />
      <PageInnerLayout>
        <div className={settingContent}>
          <form onSubmit={onSubmit}>
            <MailFrequencySection value={mailFrequency} onChange={onMailFrequencyChange} />
            <Button className={settingButton} variant="primary">
              설정하기
            </Button>
          </form>
        </div>
      </PageInnerLayout>
    </div>
  );
}
