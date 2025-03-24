import { buttonContent, wikiWriteButtonContainer, writeIcon } from './wikiWriteButton.css';
import WithAuthClick from '@/common/components/withAuthClick';
import WriteIcon from '@/assets/writeIcon.svg';
import { recordGAEvent } from '@/common/utils/recordGAEvent';
import { GA_EVENT } from '@/common/constants/gaEvent';

interface WikiWriteButtonProps {
  onClick: () => void;
}

function WikiWriteButton({ onClick }: WikiWriteButtonProps) {
  return (
    <button
      className={wikiWriteButtonContainer}
      onClick={() => {
        recordGAEvent(GA_EVENT.homeClickWriteButton);
        onClick();
      }}
    >
      <div className={buttonContent}>
        <WriteIcon className={writeIcon} />
        <span>질문 작성하기</span>
      </div>
    </button>
  );
}

export default WithAuthClick(WikiWriteButton);
