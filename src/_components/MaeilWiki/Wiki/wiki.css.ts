import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// WikiPage
export const wikiPage = style({
  background: '#FCFCFC',
  color: '#2b2b2b',
  lineHeight: 1.5,
});

export const wikiPageContent = style({
  maxWidth: '114rem',
  margin: '0 auto',
  padding: '4.5rem 2rem 8.4rem 2rem',
  minHeight: '50vh',
});

export const wikiMainContent = style({ display: 'flex', flexDirection: 'column', gap: '4rem' });

// WikiQuestion
export const wikiQuestionHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
});

export const wikiQuestionTitle = style({ display: 'flex', flexDirection: 'column', gap: '1rem' });

export const wikiQuestionDetail = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  border: '1px solid #D2D2D2',
  borderRadius: '1rem',
  padding: '2.6rem 3.2rem',
  background: 'white',

  '@media': {
    '(max-width: 800px)': {
      padding: '1.5rem',
    },
  },
});

export const wikiQuestionInfo = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
});

export const wikiCreatedAt = style({
  width: 'fit-content',
  fontSize: '1.4rem',
  color: '#666666',
  display: 'flex',
  gap: '0.4rem',
  alignItems: 'center',

  '@media': {
    '(max-width: 800px)': {
      fontSize: '1.3rem',
    },
  },
});

export const wikiQuestion = style({
  fontSize: '2.6rem',
  color: '#2b2b2b',
  fontWeight: 500,
});

export const wikiCategory = recipe({
  base: {
    color: '#59636e',
    padding: '0.2rem 0.8rem',
    fontSize: '1.4rem',
    borderRadius: '0.3rem',
    width: 'fit-content',
    fontWeight: 500,
  },

  variants: {
    category: {
      backend: {
        color: '#C6743A',
        background: '#FFF3EB',
      },
      frontend: {
        color: '#0070A8',
        background: '#EBF8FF',
      },
      etc: {
        color: '#7C7C7C',
        background: '#F1F1F1',
      },
    },
  },
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
  boxShadow: '0 0 0 1px #1f232826',

  '@media': {
    '(max-width: 800px)': {
      width: '2.4rem',
      height: '2.4rem',
    },
  },
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

export const profileName = style({
  width: 'fit-content',
  fontSize: '1.6rem',
  fontWeight: 500,

  '@media': {
    '(max-width: 800px)': {
      fontSize: '1.3rem',
      overflow: 'hidden',
      maxWidth: '9rem',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
});

export const ownerMark = style({
  border: '1px solid #d2d2d2',
  fontSize: '1.4rem',
  padding: '0.2rem 1rem',
  borderRadius: 999,

  '@media': {
    '(max-width: 800px)': {
      fontSize: '1.1rem',
      padding: '0.2rem 0.7rem',
    },
  },
});

export const deleteButton = style({ cursor: 'pointer', fontWeight: 500 });

// WikiCommentList
export const wikiCommentListSection = style({
  fontSize: '1.6rem',
  marginBottom: '4rem',
});

export const wikiCommentListTitle = style({
  marginBottom: '2rem',
  fontSize: '1.8rem',
  fontWeight: 500,
});

export const wikiCommentList = style({ gap: '2rem', display: 'flex', flexDirection: 'column' });

export const wikiCommentItem = style({
  border: '1px solid #D2D2D2',
  padding: '3rem 3.2rem',
  borderRadius: '1rem',
  display: 'flex',
  gap: '2rem',
  flexDirection: 'column',

  '@media': {
    '(max-width: 800px)': {
      padding: '1.5rem',
    },
  },
});

export const wikiCommentInfo = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const wikiCommentMainInto = style({ display: 'flex', alignItems: 'center', gap: '1rem' });

export const wikiCommentSubInfo = style({ display: 'flex', gap: '0.4rem' });

export const wikiCommentCreatedAt = style({
  fontSize: '1.4rem',
  color: '#666666',
  '@media': {
    '(max-width: 800px)': {
      fontSize: '1.3rem',
    },
  },
});

export const wikiCommentDeleteButton = style({
  cursor: 'pointer',
  fontSize: '1.4rem',
  color: '#666666',
  fontWeight: 500,

  '@media': {
    '(max-width: 800px)': {
      fontSize: '1.3rem',
    },
  },
});

export const wikiCommentLikeButton = style({
  width: 'fit-content',
  border: '1px solid #D2D2D2',
  padding: '0.4rem 1rem',
  borderRadius: 999,
  fontSize: '1.4rem',
  color: '#666666',
  fontWeight: 550,
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

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

  '@media': {
    '(max-width: 800px)': {
      width: '2.4rem',
      height: '2.4rem',
    },
  },
};

export const wikiCommentOwnerProfileImage = style(baseWikiCommentOwnerProfileImage);

export const anonymousCommentOwnerProfileImage = style({
  ...baseWikiCommentOwnerProfileImage,
  background: 'gray',
});

export const wikiCommentOwnerName = style({
  width: 'fit-content',
  fontSize: '1.6rem',
  fontWeight: 500,

  '@media': {
    '(max-width: 800px)': {
      fontSize: '1.3rem',
      overflow: 'hidden',
      maxWidth: '9rem',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
});

export const wikiCommentOwnerProfileLink = style({
  width: 'fit-content',
});

// WikiCommentInput
export const wikiCommentInputSection = style({
  fontSize: '1.6rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  marginTop: '4rem',

  '@media': {
    '(max-width: 800px)': {
      marginTop: '2rem',
    },
  },
});

export const wikiAddCommentTitle = style({
  fontSize: '1.8rem',
  fontWeight: 500,
});

export const wikiCommentEditorContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.3rem',
  position: 'relative',
});

export const editorAuthOverlay = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 2,
  cursor: 'pointer',
});

export const isAnonymousWrapper = style({ display: 'flex', justifyContent: 'space-between' });

export const isAnonymousLabel = style({
  display: 'flex',
  alignItems: 'center',
  height: 'fit-content',
  gap: '0.3rem',
  cursor: 'pointer',
  color: '#666666',

  '@media': {
    '(max-width: 800px)': {
      fontSize: '1.3rem',
    },
  },
});

export const isAnonymousCheckbox = style({
  width: '2.2rem',
  height: '2.2rem',
  accentColor: '#00a86b',
  cursor: 'pointer',

  '@media': {
    '(max-width: 800px)': {
      width: '1.6rem',
      height: '1.6rem',
    },
  },
});

export const commentSubmitButtonWrapper = style({
  width: '6.6rem',

  '@media': {
    '(max-width: 800px)': {},
  },
});

export const wikiCommentInputButton = style({});
