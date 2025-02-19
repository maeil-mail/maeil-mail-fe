import { style } from '@vanilla-extract/css';

// WikiQuestion
export const wikiQuestionHeader = style({
  border: '1px solid #c5c5c5',
  borderRadius: '0.6rem',
  padding: '2rem 2rem 3rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
});

export const wikiQuestionInfo = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
});

export const wikiCreatedAt = style({
  width: 'fit-content',
  fontSize: '1.3rem',
  color: '#59636e',
});

export const wikiQuestion = style({
  fontSize: '2.3rem',
  color: '#2b2b2b',
});

export const wikiCategory = style({
  color: '#59636e',
  marginTop: '1rem',
});

export const wikiOwnerProfile = style({
  display: 'flex',
  gap: '1rem',
  width: 'fit-content',
  alignItems: 'center',
});

const baseProfileImage = {
  width: '3.2rem',
  height: '3.2rem',
  borderRadius: 999,
};

export const profileImage = style(baseProfileImage);

export const anonymousProfileImage = style({
  ...baseProfileImage,
  background: 'gray',
});

export const profileLink = style({
  width: 'fit-content',
  display: 'block',
});

export const profileName = style({ width: 'fit-content', fontSize: '1.3rem' });

// WikiCommentList
export const wikiCommentListSection = style({
  marginTop: '5rem',
  fontSize: '1.6rem',
});

export const wikiCommentListTitle = style({ marginBottom: '2rem' });

export const wikiCommentList = style({ gap: '1rem', display: 'flex', flexDirection: 'column' });

export const wikiCommentItem = style({
  border: '1px solid #c5c5c5',
  padding: '2rem',
  borderRadius: '0.6rem',
  display: 'flex',
  gap: '1.5rem',
  flexDirection: 'column',
});

export const wikiCommentInfo = style({ display: 'flex', gap: '1rem', alignItems: 'center' });

export const wikiCommentCreatedAt = style({ fontSize: '1.3rem', color: '#59636e' });

export const wikiCommentLikeButton = style({ width: 'fit-content' });

export const wikiCommentOwnerProfile = style({
  display: 'flex',
  gap: '1rem',
  width: 'fit-content',
  alignItems: 'center',
});

const baseWikiCommentOwnerProfileImage = {
  width: '3.2rem',
  height: '3.2rem',
  borderRadius: 999,
};

export const wikiCommentOwnerProfileImage = style(baseWikiCommentOwnerProfileImage);

export const anonymousCommentOwnerProfileImage = style({
  ...baseWikiCommentOwnerProfileImage,
  background: 'gray',
});

export const wikiCommentOwnerName = style({ width: 'fit-content' });

export const wikiCommentOwnerProfileLink = style({
  width: 'fit-content',
});

// WikiCommentInput
export const wikiCommentInputSection = style({
  marginTop: '5rem',
  fontSize: '1.6rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const wikiCommentInputButton = style({
  width: 'fit-content',
  padding: '1.2rem 5rem',
});
