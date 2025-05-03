import * as React from 'react';
import StarIcon from '@/assets/star.svg';

export interface DifficultyIndicatorProps {
  difficulty: number;
}

export default function DifficultyIndicator({ difficulty }: DifficultyIndicatorProps) {
  const StarIcons = Array.from({ length: difficulty }).map((_, index) => (
    <StarIcon key={`$star-${index}`} style={{ color: '#E9B24C', width: '1.6rem' }} />
  ));

  return <div style={{ display: 'flex', gap: '0.3rem' }}>{StarIcons}</div>;
}
