'use client';

import * as React from 'react';
import { Member, Wiki } from '../_types/wiki';
import { WIKI_CATEGORY_KO } from '../_constants/wikiCategory';
import {
  anonymousProfileImage,
  profileImage,
  profileLink,
  profileName,
  wikiCategory,
  wikiCreatedAt,
  wikiOwnerProfile,
  wikiQuestion,
  wikiQuestionHeader,
  wikiQuestionInfo,
} from './wiki.css';
import MDPreview from '../Markdown/MDPreview';
import { useDeleteWiki } from './_hooks/useDeleteWiki';

export interface WikiQuestionProps {
  wiki: Wiki;
}

export default function WikiQuestion({ wiki }: WikiQuestionProps) {
  const { mutate: deleteWiki } = useDeleteWiki(wiki.id);

  const onClickDeleteWiki = () => {
    if (confirm('질문을 삭제하시겠습니까?')) {
      deleteWiki();
    }
  };

  return (
    <header className={wikiQuestionHeader}>
      <div className={wikiQuestionInfo}>
        <WikiOwnerProfile owner={wiki.owner} />
        <p className={wikiCreatedAt}>{wiki.createdAt}</p>
      </div>
      <div>
        <h1 className={wikiQuestion}>Q. {wiki.question}</h1>
        <p className={wikiCategory}>[분야: {WIKI_CATEGORY_KO[wiki.category]}]</p>
      </div>
      {wiki.questionDetail && <MDPreview source={wiki.questionDetail} />}
      <button onClick={onClickDeleteWiki}>삭제</button>
    </header>
  );
}

function WikiOwnerProfile({ owner }: { owner: Member }) {
  if (!owner.name) {
    return (
      <div className={wikiOwnerProfile}>
        <div className={anonymousProfileImage} />
        <p className={profileName}>익명</p>
      </div>
    );
  }

  return (
    <a href={owner.github} className={profileLink} target="_blank" rel="noopener noreferrer">
      <div className={wikiOwnerProfile}>
        <img className={profileImage} src={owner.profileImage} />
        <p className={profileName}>{owner.name}</p>
      </div>
    </a>
  );
}
