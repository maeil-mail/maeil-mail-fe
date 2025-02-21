import React from 'react';
import CommentIcon from '@/_assets/images/maeilWiki/commentLight.svg';
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
} from './wikiList.css';
import { WikiListItem } from '../../_types/wiki';
import { WIKI_CATEGORY_KO } from '../../_constants/wikiCategory';
import { calculateElapsedTime } from '../../_utils/calculateElapsedTime';

export default function WikiItem({ wiki }: { wiki: WikiListItem }) {
  const { question, owner, commentCount, category, createdAt } = wiki;

  return (
    <li className={wikiItem}>
      <div className={wikiInfo}>
        <div className={wikiSubInfo}>
          <div className={wikiCategory({ category })}>{WIKI_CATEGORY_KO[category]}</div>
          <div className={ownerName}>
            {owner.name || '익명'} | {calculateElapsedTime(createdAt)}
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
