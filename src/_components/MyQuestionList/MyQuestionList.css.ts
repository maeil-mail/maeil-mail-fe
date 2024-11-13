import { style, styleVariants } from '@vanilla-extract/css';

// question list

export const questionListContainer = style({
  padding: '4rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.7rem',
});

export const emptyCase = style({
  width: 'fit-content',
  fontSize: '1.6rem',
  margin: '5rem 0',
});

// QuestionItem

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
  transition: 'transform 0.2s ease, box-shadow 0.2s ease', // 기본 상태에 적용되는 트랜지션
  ':hover': {
    transform: 'translateY(-0.5px)', // 호버 시 위로 살짝 이동
    boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.13)', // 호버 시 그림자 효과 추가
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
  width: '1.5rem',
});

export const questionTitle = style({ lineHeight: '2.5rem' });
