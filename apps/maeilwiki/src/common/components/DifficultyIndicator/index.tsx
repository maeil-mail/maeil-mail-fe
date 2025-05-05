import * as React from 'react';
import StarIcon from '@/assets/star.svg';
import { starIcon, starIconList } from './difficultyIndicator.css';

export interface DifficultyIndicatorProps {
  difficulty: number;
}

export default function DifficultyIndicator({ difficulty }: DifficultyIndicatorProps) {
  const StarIcons = Array.from({ length: difficulty }).map((_, index) => (
    <StarIcon key={`$star-${index}`} className={starIcon} />
  ));

  return <div className={starIconList}>{StarIcons}</div>;
}
