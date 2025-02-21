'use client';

import Button from '@/_components/common/Button/Button';
import Modal from '@/_components/common/Modal';
import * as React from 'react';
import { postWiki } from '../../_apis/wiki';
import { WIKI_CATEGORY, WIKI_CATEGORY_KO } from '../../_constants/wikiCategory';
import { WikiCategory } from '../../_types/wikiCategory';
import { useMutation } from '@tanstack/react-query';
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
import CloseIcon from '@/_assets/images/maeilWiki/closeIcon.svg';

export interface WikiSubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// TODO: 디자인 고도화 진행 시 구성이나 구조가 변경될 가능성이 커서 코드 정리를 하지 않았습니다.
export default function WikiSubmitModal({ isOpen, onClose }: WikiSubmitModalProps) {
  const [question, setQuestion] = React.useState('');
  const [questionDetail, setQuestionDetail] = React.useState('');
  const [category, setCategory] = React.useState<WikiCategory>(WIKI_CATEGORY.backend);
  const [isAnonymous, setIsAnonymous] = React.useState(false);

  const { mutate } = useMutation({
    mutationFn: postWiki,
    onSuccess: () => {
      window.alert('질문이 등록되었습니다!');
      window.location.reload();
    },
  });

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
            placeholder="HTTP에 대해 설명해주세요."
            value={question}
            onChange={onChangeQuestion}
          />
        </section>

        <section className={inputSection}>
          <label className={inputLabel}>
            보충 설명
            <span className={subText}>(선택)</span>
          </label>
          <textarea
            className={questionDetailTextarea}
            spellCheck="false"
            placeholder="설명 시 HTTP 통신의 구체적인 흐름을 포함하여 설명해주세요."
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
                {WIKI_CATEGORY_KO[WIKI_CATEGORY.backend]}
                <input
                  className={categoryRadio}
                  id={WIKI_CATEGORY.backend}
                  name="wikiCategory"
                  type="radio"
                  value={WIKI_CATEGORY.backend}
                  checked={category === WIKI_CATEGORY.backend}
                  onChange={onChangeCategory}
                />
              </label>
              <label className={categoryLabel} htmlFor={WIKI_CATEGORY.frontend}>
                {WIKI_CATEGORY_KO[WIKI_CATEGORY.frontend]}
                <input
                  className={categoryRadio}
                  id={WIKI_CATEGORY.frontend}
                  name="wikiCategory"
                  type="radio"
                  value={WIKI_CATEGORY.frontend}
                  checked={category === WIKI_CATEGORY.frontend}
                  onChange={onChangeCategory}
                />
              </label>

              <label className={categoryLabel} htmlFor={WIKI_CATEGORY.etc}>
                {WIKI_CATEGORY_KO[WIKI_CATEGORY.etc]}
                <input
                  className={categoryRadio}
                  id={WIKI_CATEGORY.etc}
                  name="wikiCategory"
                  type="radio"
                  value={WIKI_CATEGORY.etc}
                  checked={category === WIKI_CATEGORY.etc}
                  onChange={onChangeCategory}
                />
              </label>
            </div>
          </div>

          <label className={isAnonymousLabel} htmlFor="isAnonymous">
            익명
            <input
              className={isAnonymousCheckbox}
              id="isAnonymous"
              type="checkbox"
              checked={isAnonymous}
              onChange={() => {
                setIsAnonymous((prev) => !prev);
              }}
            />
          </label>
        </section>
      </section>
      <Button
        disabled={question.length === 0}
        variant="primary"
        onClick={() => {
          mutate({ isAnonymous, question, category, questionDetail });
        }}
      >
        제출
      </Button>
    </Modal>
  );
}
