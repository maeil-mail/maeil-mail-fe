import React from 'react';
import CommentIcon from '@/assets/commentLight.svg';
import {
  commentIcon,
  commentCountInfo,
  ownerName,
  wikiCategory,
  wikiItem,
  wikiQuestion,
  wikiQuestionText,
  wikiSubInfo,
  wikiInfo,
  wikiMetaInfo,
} from './wikiList.css';
import { WikiListItem } from '@/common/types/wiki';
import { WIKI_CATEGORY_KO } from '@/common/constants/wikiCategory';
import { calculateElapsedTime } from '@/common/utils/calculateElapsedTime';

export default function WikiItem({ wiki }: { wiki: WikiListItem }) {
  const { question, owner, commentCount, category, createdAt } = wiki;

  return (
    <li className={wikiItem}>
      <div className={wikiInfo}>
        <div className={wikiSubInfo}>
          <div className={wikiCategory({ category })}>{WIKI_CATEGORY_KO[category]}</div>
          <div className={wikiMetaInfo}>
            <span className={ownerName}>{owner.name || '익명'} </span>
            <span>|</span>
            <span suppressHydrationWarning>{calculateElapsedTime(createdAt)}</span>
          </div>
        </div>
        {commentCount > 0 && (
          <div className={commentCountInfo}>
            <CommentIcon className={commentIcon} /> {commentCount}
          </div>
        )}
      </div>
      <div className={wikiQuestion}>
        <p className={wikiQuestionText}>{question}</p>
      </div>
    </li>
  );
}
