import WriteIcon from '@/_assets/icons/writeIcon.svg';
import { wikiWriteButton, writeIcon } from './wikiListTabBar.css';
import { withAuthClick } from '../../_hocs/withAuthClick';

interface WikiWriteButtonProps {
  onClick: () => void;
}

function WikiWriteButton({ onClick }: WikiWriteButtonProps) {
  return (
    <button className={wikiWriteButton} onClick={onClick}>
      <WriteIcon className={writeIcon} />
      <span>작성하기</span>
    </button>
  );
}

export default withAuthClick(WikiWriteButton);
