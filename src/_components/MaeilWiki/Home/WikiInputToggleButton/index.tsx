import WriteIcon from '@/_assets/icons/writeIcon.svg';
import {
  wikiWriteButtonWrapper,
  wikiWriteButtonContainer,
  wikiInput,
  closeButton,
  wikiWriteButton,
  writeIcon,
  wikiSubmitButton,
} from './wikiInputToggleButton.css';
import CloseWhiteIcon from '@/_assets/icons/closeWhite.svg';
import { withAuthClick } from '../../_hocs/withAuthClick';
import useModal from '@/_hooks/useModal';
import { ChangeEvent, useState } from 'react';
import WikiSubmitModal from './WikiSubmitModal';

interface WikiInputToggleButtonProps {
  isExpanded: boolean;
  onClick: () => void;
  onClose: () => void;
}

function WikiInputToggleButton({
  isExpanded = false,
  onClick,
  onClose,
}: WikiInputToggleButtonProps) {
  const [question, setQuestion] = useState('');

  const { isModalOpen, openModal, closeModal } = useModal();

  const onClickSubmit = () => {
    if (question.length === 0) {
      alert('질문을 작성해주세요.');
      return;
    }
    openModal();
  };

  return (
    <div className={wikiWriteButtonContainer}>
      <div className={wikiWriteButtonWrapper({ isExpanded })} onClick={onClick}>
        <button className={wikiWriteButton({ isExpanded })}>
          <WriteIcon className={writeIcon} />
          <span>질문 작성하기</span>
        </button>
        <>
          <input
            className={wikiInput({ isExpanded })}
            placeholder="질문을 입력하세요"
            value={question}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setQuestion(e.target.value);
            }}
          />
          <button className={wikiSubmitButton({ isExpanded })} onClick={onClickSubmit}>
            제출
          </button>
        </>
      </div>
      {isExpanded && (
        <button className={closeButton} onClick={onClose}>
          <CloseWhiteIcon />
        </button>
      )}
      <WikiSubmitModal isOpen={isModalOpen} onClose={closeModal} question={question} />
    </div>
  );
}

export default withAuthClick(WikiInputToggleButton);
