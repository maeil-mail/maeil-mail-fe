'use client';

import { useState } from 'react';
import MDPreview from './MDPreview';
import './markdown.css';
import {
  editorContainer,
  mdEditorContainer,
  mdOptionTab,
  mdOptionTabBar,
  mdPreview,
  tabBottomBorder,
} from './markdown.css';
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
        <button
          className={mdOptionTab({ isSelected: !isPreview, mode: 'write' })}
          onClick={onClickWrite}
        >
          글쓰기
        </button>
        <button
          className={mdOptionTab({ isSelected: isPreview, mode: 'preview' })}
          onClick={onClickPreview}
        >
          미리보기
        </button>
        <div className={tabBottomBorder}></div>
      </div>
      <div className={editorContainer}>
        {isPreview ? (
          <MDPreview className={mdPreview} source={text || '입력된 답변이 없습니다.'} />
        ) : (
          <MDEditor markdown={text} onChange={onChange} />
        )}
      </div>
    </div>
  );
}
