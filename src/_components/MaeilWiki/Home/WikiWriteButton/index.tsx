import { buttonContent, wikiWriteButtonContainer, writeIcon } from './wikiWriteButton.css';
import { withAuthClick } from '../../_hocs/withAuthClick';
import WriteIcon from '@/_assets/images/maeilWiki/writeIcon.svg';
import recordGAEvent from '@/_utils/recordGAEvent';
import { GA_EVENT } from '../../_constants/GA_EVENT';

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

export default withAuthClick(WikiWriteButton);
