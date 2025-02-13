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

export interface WikiQuestionProps {
  wiki: Wiki;
}

export default function WikiQuestion({ wiki }: WikiQuestionProps) {
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
      {wiki.questionDetail && <div>{wiki.questionDetail}</div>}
    </header>
  );
}

function WikiOwnerProfile({ owner }: { owner?: Member }) {
  if (!owner) {
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
