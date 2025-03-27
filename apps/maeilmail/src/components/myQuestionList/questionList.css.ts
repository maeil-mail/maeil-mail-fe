import { keyframes, style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// MyQuestionHeader
export const questionHeaderContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginBottom: '2.5rem',
});

export const questionHeaderTitle = style({
  color: '#00A86B',
  fontWeight: 600,
  fontSize: '1.6rem',
});

export const questionHeaderSubTitle = style({
  fontWeight: 600,
  fontSize: '2.3rem',
  color: '#2b2b2b',
  textDecoration: 'none',
});

// MyQuestionList
export const questionListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.7rem',
});

export const emptyCase = style({
  width: 'fit-content',
  fontSize: '1.6rem',
  margin: '5rem 0',
});

// MyQuestionItem
export const questionItemContainer = style({
  fontSize: '1.6rem',
  color: '#2b2b2b',
  width: '100%',
  backgroundColor: '#F5F6F8',
  borderRadius: 6,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.4rem 1rem',
  boxShadow: '1px 1px 3px 0px rgb(0, 0, 0, 0.1)',
  cursor: 'pointer',
  gap: '1.5rem',
});

export const animatedHover = style({
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  ':hover': {
    transform: 'translateY(-0.5px)',
    boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.13)',
  },
});

export const questionItemContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
});

const baseCategoryTag = {
  padding: '0.4rem 1.4rem',
  fontSize: '1.4rem',
  borderRadius: 15,
  fontWeight: 700,
};

export const categoryTag = styleVariants({
  frontend: { ...baseCategoryTag, backgroundColor: '#E3EEFF', color: '#0D5BFC' },
  backend: { ...baseCategoryTag, backgroundColor: '#FDF2E3', color: '#A66D1F' },
});

export const rightArrow = style({
  width: '1rem',
  minWidth: '1rem',
});

export const questionTitle = style({ lineHeight: '2.5rem' });

// MyQuestionListSkeleton
export const myQuestionListSkeletonContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.7rem',
  paddingBottom: '7rem',
});

const shimmer = keyframes({
  '0%': {
    backgroundPosition: '200% 0',
  },
  '100%': {
    backgroundPosition: '-200% 0',
  },
});

export const myQuestionItemSkeleton = style({
  display: 'inline-block',
  backgroundImage: 'linear-gradient(90deg, #f5f6f8 25%, #fafafa 50%, #f5f6f8 75%)',
  backgroundColor: '#f5f6f8',
  backgroundSize: '200% 100%',
  animation: `${shimmer} 2s infinite`,
  borderRadius: '6px',
  width: '100%',
  height: '5.3rem',
});

// QuestionCategoryTabs
export const questionCategoryTabs = style({
  fontSize: '1.6rem',
  display: 'flex',
  gap: '1.5rem',
  marginBottom: '2.5rem',
});

export const questionCategoryTab = recipe({
  base: {
    cursor: 'pointer',
  },
  variants: {
    isSelected: {
      true: {
        color: '#00a86b',
        fontWeight: 600,
      },
      false: {
        color: '#adb5bd',
        fontWeight: 400,
      },
    },
  },
});
