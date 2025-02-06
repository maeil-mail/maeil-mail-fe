'use client';

import Button from '@/_components/common/Button/Button';
import Modal from '@/_components/common/Modal';
import * as React from 'react';
import { postWiki } from '../../_apis/wiki';
import { WIKI_CATEGORY } from '../../_constants/wikiCategory';
import { WikiCategory } from '../../_types/wikiCategory';
import { useMutation } from '@tanstack/react-query';

export interface WikiSubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
  question: string;
}

// TODO: 디자인 고도화 진행 시 구성이나 구조가 변경될 가능성이 커서 코드 정리를 하지 않았습니다.
export default function WikiSubmitModal({ isOpen, question, onClose }: WikiSubmitModalProps) {
  const [category, setCategory] = React.useState<WikiCategory>(WIKI_CATEGORY.backend);
  const [isAnonymous, setIsAnonymous] = React.useState(false);
  const [hasQuestionDetail, setHasQuestionDetail] = React.useState(false);
  const [questionDetail, setQuestionDetail] = React.useState('');

  const { mutate } = useMutation({
    mutationFn: postWiki,
    onSuccess: () => alert('게시글 등록에 성공'),
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        style={{
          padding: '2.5rem',
          fontSize: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.4rem',
        }}
      >
        <div style={{ fontWeight: 600, width: '40vw' }}>질문 작성</div>
        <div style={{ fontWeight: 700, fontSize: '1.8rem' }}>Q. {question}</div>
        <div>
          <span>분야</span>
          <select
            value={category}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setCategory(e.target.value as WikiCategory);
            }}
          >
            <option value={WIKI_CATEGORY.backend}>백엔드</option>
            <option value={WIKI_CATEGORY.frontend}>프론트엔드</option>
            <option value={WIKI_CATEGORY.etc}>기타</option>
          </select>
        </div>
        <section>
          <div>
            <span>보충 설명</span>
            <input
              type="checkbox"
              checked={hasQuestionDetail}
              onChange={() => {
                setHasQuestionDetail((prev) => !prev);
              }}
            />
          </div>
          {hasQuestionDetail && (
            <textarea
              value={questionDetail}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setQuestionDetail(e.target.value);
              }}
              style={{
                marginTop: '0.7rem',
                width: '100%',
                resize: 'none',
                height: '6rem',
              }}
            />
          )}
        </section>
        <div>
          <span>익명</span>
          <input
            type="checkbox"
            checked={isAnonymous}
            onChange={() => {
              setIsAnonymous((prev) => !prev);
            }}
          />
        </div>
        <div></div>
        <Button
          variant="primary"
          onClick={() => {
            mutate({ isAnonymous, question, category, questionDetail });
          }}
        >
          제출
        </Button>
      </div>
    </Modal>
  );
}
