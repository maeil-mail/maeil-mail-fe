'use client';

import { useState } from 'react';
import MDPreview from './MDPreview';
import './markdown.css';
import { mdEditorContainer, mdOptionButton, mdOptionTabBar, mdPreview } from './markdown.css';
import MDEditor from './MDEditor';

export default function MDLiveEditor({
  text,
  onChange,
}: {
  text: string;
  onChange: (text: string) => void;
}) {
  const [isPreview, setIsPreview] = useState(false);

  const onClickWrite = () => setIsPreview(false);

  const onClickPreview = () => setIsPreview(true);

  return (
    <div className={mdEditorContainer}>
      <div className={mdOptionTabBar}>
        <button className={mdOptionButton} onClick={onClickWrite}>
          Write
        </button>
        <button className={mdOptionButton} onClick={onClickPreview}>
          Preview
        </button>
      </div>
      {isPreview ? (
        <MDPreview className={mdPreview} source={text || '입력된 답변이 없습니다.'} />
      ) : (
        <MDEditor markdown={text} onChange={onChange} />
      )}
    </div>
  );
}
