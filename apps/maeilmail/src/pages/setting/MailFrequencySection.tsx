import * as React from 'react';
import { Radio } from '@maeil/ui';
import { MAIL_FREQUENCY } from '@/common/constants/setting';
import type { MailFrequency } from '@/common/types/mail';
import {
  caption,
  label,
  optionDescription,
  optionItem,
  optionList,
  optionTitle,
  separator,
} from './setting.css';

type OnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => void;

export interface MailFrequencySectionProps {
  value: MailFrequency;
  onChange: OnInputChange;
}

export default function MailFrequencySection({ value, onChange }: MailFrequencySectionProps) {
  return (
    <section>
      <h1 className={optionTitle}>메일 수신 빈도</h1>
      <div className={separator}></div>
      <div className={optionList}>
        <MailFrequencyOptionItem
          id="mail-frequency-daily"
          value={MAIL_FREQUENCY.daily}
          currentValue={value}
          onChange={onChange}
          description={{
            label: '주 5회 - 하루에 한 번 메일을 보내드려요!',
            caption: '면접과 기술에 대한 감을 유지하고 싶은 분께 추천해요.',
          }}
        />
        <MailFrequencyOptionItem
          id="mail-frequency-weekly"
          value={MAIL_FREQUENCY.weekly}
          currentValue={value}
          onChange={onChange}
          description={{
            label: '주 1회 - 월요일에 한 번 모아서 보내드려요!',
            caption: '부담 없이 기술 정보를 접하고 싶은 분께 추천해요.',
          }}
        />
      </div>
    </section>
  );
}

interface MailFrequencyOptionItemProps {
  id: string;
  value: MailFrequency;
  currentValue: MailFrequency;
  onChange: OnInputChange;
  description: {
    label: string;
    caption: string;
  };
}

function MailFrequencyOptionItem({
  id,
  value,
  currentValue,
  onChange,
  description,
}: MailFrequencyOptionItemProps) {
  return (
    <div className={optionItem}>
      <Radio
        id={id}
        name="mail-frequency"
        value={value}
        checked={currentValue === value}
        onChange={onChange}
      />
      <div className={optionDescription}>
        <label className={label} htmlFor={id}>
          {description.label}
        </label>
        <p className={caption}>{description.caption}</p>
      </div>
    </div>
  );
}
