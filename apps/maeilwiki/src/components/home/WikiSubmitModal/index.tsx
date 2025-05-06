'use client';

import * as React from 'react';
import { Button, Modal } from '@maeil/ui';
import { WIKI_CATEGORY, WIKI_CATEGORY_KO } from '@/common/constants/wikiCategory';
import { WikiCategory } from '@/common/types/wiki';
import CloseIcon from '@/assets/closeIcon.svg';
import { usePostWiki } from '../hooks/usePostWiki';
import {
  asterisk,
  categoryInputs,
  categoryRadio,
  closeIcon,
  inputSection,
  inputLabel,
  metaInfoInputSection,
  modalContent,
  modalFormSection,
  modalTitle,
  questionDetailTextarea,
  questionInput,
  subText,
  categoryInputsWrapper,
  isAnonymousLabel,
  isAnonymousCheckbox,
  categoryLabel,
} from './wikiSubmitModal.css';

export interface WikiSubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WikiSubmitModal({ isOpen, onClose }: WikiSubmitModalProps) {
  const [question, setQuestion] = React.useState('');
  const [questionDetail, setQuestionDetail] = React.useState('');
  const [category, setCategory] = React.useState<WikiCategory>(WIKI_CATEGORY.backend);
  const [isAnonymous, setIsAnonymous] = React.useState(false);

  const { mutate, isPending } = usePostWiki();

  const onChangeQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const onChangeQuestionDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestionDetail(e.target.value);
  };

  const onChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value as WikiCategory);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} contentClassName={modalContent}>
      <h1 className={modalTitle}>질문 작성</h1>
      <section className={modalFormSection}>
        <CloseIcon className={closeIcon} onClick={onClose} />

        <section className={inputSection}>
          <label className={inputLabel}>
            질문명 <span className={asterisk}>*</span>
          </label>
          <input
            className={questionInput}
            placeholder="HTTP에 대해 설명해 주세요."
            value={question}
            onChange={onChangeQuestion}
          />
        </section>

        <section className={inputSection}>
          <label className={inputLabel}>
            설명
            <span className={subText}>(선택)</span>
          </label>
          <textarea
            className={questionDetailTextarea}
            spellCheck="false"
            placeholder="설명 시 HTTP 통신의 구체적인 흐름을 포함하여 설명해 주세요."
            onChange={onChangeQuestionDetail}
            value={questionDetail}
          />
        </section>

        <section className={metaInfoInputSection}>
          <div className={categoryInputs}>
            <label className={inputLabel}>
              분야 <span className={asterisk}>*</span>
            </label>
            <div className={categoryInputsWrapper}>
              <label className={categoryLabel} htmlFor={WIKI_CATEGORY.backend}>
                <input
                  className={categoryRadio}
                  id={WIKI_CATEGORY.backend}
                  name="wikiCategory"
                  type="radio"
                  value={WIKI_CATEGORY.backend}
                  checked={category === WIKI_CATEGORY.backend}
                  onChange={onChangeCategory}
                />
                {WIKI_CATEGORY_KO[WIKI_CATEGORY.backend]}
              </label>
              <label className={categoryLabel} htmlFor={WIKI_CATEGORY.frontend}>
                <input
                  className={categoryRadio}
                  id={WIKI_CATEGORY.frontend}
                  name="wikiCategory"
                  type="radio"
                  value={WIKI_CATEGORY.frontend}
                  checked={category === WIKI_CATEGORY.frontend}
                  onChange={onChangeCategory}
                />
                {WIKI_CATEGORY_KO[WIKI_CATEGORY.frontend]}
              </label>

              <label className={categoryLabel} htmlFor={WIKI_CATEGORY.etc}>
                <input
                  className={categoryRadio}
                  id={WIKI_CATEGORY.etc}
                  name="wikiCategory"
                  type="radio"
                  value={WIKI_CATEGORY.etc}
                  checked={category === WIKI_CATEGORY.etc}
                  onChange={onChangeCategory}
                />
                {WIKI_CATEGORY_KO[WIKI_CATEGORY.etc]}
              </label>
            </div>
          </div>

          <label className={isAnonymousLabel} htmlFor="isAnonymous">
            <input
              className={isAnonymousCheckbox}
              id="isAnonymous"
              type="checkbox"
              checked={isAnonymous}
              onChange={() => {
                setIsAnonymous((prev) => !prev);
              }}
            />
            익명
          </label>
        </section>
      </section>
      <Button
        disabled={question.length === 0}
        variant="primary"
        onClick={() => {
          mutate({ isAnonymous, question, category, questionDetail });
        }}
        isPending={isPending}
      >
        제출
      </Button>
    </Modal>
  );
}
