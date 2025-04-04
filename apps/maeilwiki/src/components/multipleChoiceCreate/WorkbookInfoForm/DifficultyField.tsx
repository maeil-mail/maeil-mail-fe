import React from 'react';
import { Difficulty } from '../hooks/useWorkbookInfo';
import { fieldLabel, starIcon, starList, workbookDifficulty } from './workbookInfoForm.css';
import StarIcon from '@/assets/star.svg';

export default function DifficultyField({
  difficulty,
  updateDifficulty,
}: {
  difficulty?: Difficulty;
  updateDifficulty: (value: string) => void;
}) {
  const [hoveredIndex, setHoveredIndex] = React.useState(-1);

  const resetHoveredIndex = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className={workbookDifficulty}>
      <label className={fieldLabel}>난이도</label>
      <div className={starList}>
        {Array.from({ length: 5 }).map((_, index) => {
          const curDifficulty = index + 1;

          const onClickStar = () => {
            updateDifficulty(String(curDifficulty));
          };

          return (
            <StarIcon
              key={`star-${index + 1}`}
              className={starIcon({
                isFilled: difficulty && difficulty >= curDifficulty,
                isHovered: hoveredIndex >= index,
              })}
              onClick={onClickStar}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={resetHoveredIndex}
            />
          );
        })}
      </div>
    </div>
  );
}
