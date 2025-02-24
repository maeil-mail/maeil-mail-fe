'use client';

import * as React from 'react';
import { Member, Wiki } from '../_types/wiki';
import { WIKI_CATEGORY_KO } from '../_constants/wikiCategory';
import {
  anonymousProfileImage,
  deleteButton,
  ownerMark,
  profileImage,
  profileLink,
  profileName,
  wikiCategory,
  wikiCreatedAt,
  wikiOwnerProfile,
  wikiQuestion,
  wikiQuestionDetail,
  wikiQuestionHeader,
  wikiQuestionInfo,
  wikiQuestionTitle,
} from './wiki.css';
import MDPreview from '../Markdown/MDPreview';
import { useDeleteWiki } from './_hooks/useDeleteWiki';
import { calculateElapsedTime } from '../_utils/calculateElapsedTime';
import { useAuthContext } from '../_store/authContext';
import GenericAvatar from '@/_assets/images/maeilWiki/genericAvatar.svg';

export interface WikiQuestionProps {
  wiki: Wiki;
}

export default function WikiQuestion({ wiki }: WikiQuestionProps) {
  const { mutate: deleteWiki } = useDeleteWiki(wiki.id);

  const { user } = useAuthContext();
  const isOwner = user?.id === wiki.owner.id;

  const onClickDeleteWiki = () => {
    if (!isOwner) {
      return;
    }

    if (confirm('질문을 삭제하시겠습니까?')) {
      deleteWiki();
    }
  };

  const { category, question, owner, createdAt, questionDetail, comments } = wiki;

  const hasComments = comments.length > 0;

  return (
    <header className={wikiQuestionHeader}>
      <div className={wikiQuestionTitle}>
        <p className={wikiCategory({ category })}>{WIKI_CATEGORY_KO[category]}</p>
        <h1 className={wikiQuestion}>{question}</h1>
      </div>
      <div className={wikiQuestionDetail}>
        <div className={wikiQuestionInfo}>
          <WikiOwnerProfile owner={owner} />
          <span className={ownerMark}>작성자</span>
          <div className={wikiCreatedAt}>
            <div>{calculateElapsedTime(createdAt)}</div>
            {isOwner && !hasComments && (
              <>
                <div>•</div>
                <div role="button" onClick={onClickDeleteWiki} className={deleteButton}>
                  삭제
                </div>
              </>
            )}
          </div>
        </div>
        {questionDetail && <MDPreview source={questionDetail} />}
      </div>
    </header>
  );
}

function WikiOwnerProfile({ owner }: { owner: Member }) {
  if (!owner.name) {
    return (
      <div className={wikiOwnerProfile}>
        <GenericAvatar className={anonymousProfileImage} />
        <p className={profileName}>익명</p>
      </div>
    );
  }

  return (
    <a href={owner.github} className={profileLink} rel="noopener noreferrer">
      <div className={wikiOwnerProfile}>
        <img className={profileImage} src={owner.profileImage} />
        <p className={profileName}>{owner.name}</p>
      </div>
    </a>
  );
}
