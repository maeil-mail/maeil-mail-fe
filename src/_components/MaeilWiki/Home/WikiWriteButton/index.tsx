import WriteIcon from '@/_assets/icons/writeIcon.svg';
import {
  wikiWriteButtonWrapper,
  wikiWriteButtonContainer,
  wikiInput,
  closeButton,
  wikiWriteButton,
  writeIcon,
} from './wikiWriteButton.css';
import CloseWhiteIcon from '@/_assets/icons/closeWhite.svg';

interface WikiWriteButtonProps {
  isExpanded: boolean;
  onWrite: () => void;
  onClose: () => void;
}

export default function WikiWriteButton({
  isExpanded = false,
  onWrite,
  onClose,
}: WikiWriteButtonProps) {
  return (
    <div className={wikiWriteButtonContainer}>
      <button className={wikiWriteButtonWrapper({ isExpanded })} onClick={onWrite}>
        <div className={wikiWriteButton({ isExpanded })}>
          <WriteIcon className={writeIcon} />
          <span>질문 작성하기</span>
        </div>
        <input className={wikiInput({ isExpanded })} placeholder="질문을 입력하세요" />
      </button>
      {isExpanded && (
        <button className={closeButton} onClick={onClose}>
          <CloseWhiteIcon />
        </button>
      )}
    </div>
  );
}
