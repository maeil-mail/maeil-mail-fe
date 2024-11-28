'use client';

import { patchMailFrequency } from '@/_apis/subscription';
import Button from '@/_components/common/Button/Button';
import Nav from '@/_components/common/Nav/Nav';
import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';
import { MAIL_FREQUENCY } from '@/_constants/setting';
import { MailFrequency } from '@/_types/setting';
import * as React from 'react';

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

  const onSave = async () => {
    const payload = {
      email,
      token,
      frequency: mailFrequency,
    };

    await patchMailFrequency(payload);
    console.log(payload);
  };

  return (
    <div>
      <Nav />
      <PageInnerLayout>
        <h1 style={{ color: '#2b2b2b', fontSize: '2.5rem' }}>설정</h1>
        <h2 style={{ fontSize: '2rem', marginTop: '2rem' }}>📮 수신 주기</h2>
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <input
              type="radio"
              id="mail-frequency-daily"
              name="mail-frequency"
              value={MAIL_FREQUENCY.daily}
              checked={mailFrequency === MAIL_FREQUENCY.daily}
              onChange={onMailFrequencyChange}
            />
            <label htmlFor="mail-frequency-daily" style={{ fontSize: '1.7rem' }}>
              daily: 하루에 한 번 질문을 보내드려요!
              <p style={{ fontSize: '1.3rem', color: 'gray', marginLeft: '1rem' }}>
                *면접과 기술에 대한 감을 유지하고 싶은 분께 추천해요.
              </p>
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="mail-frequency-weekly"
              name="mail-frequency"
              value={MAIL_FREQUENCY.weekly}
              checked={mailFrequency === MAIL_FREQUENCY.weekly}
              onChange={onMailFrequencyChange}
            />
            <label htmlFor="mail-frequency-weekly" style={{ fontSize: '1.7rem' }}>
              weekly: 질문을 모아 월요일에 한 번만 보내드려요!
            </label>
            <p style={{ fontSize: '1.3rem', color: 'gray', marginLeft: '1rem' }}>
              *매일 한 통은 부담스럽지만, 주기적으로 기술 인풋을 접하고 싶은 분께 추천해요.
            </p>
          </div>
        </div>
        <Button
          variant="primary"
          onClick={onSave}
          style={{ borderRadius: 200, width: '10rem', margin: '5rem auto', display: 'block' }}
        >
          설정하기
        </Button>
      </PageInnerLayout>
    </div>
  );
}
