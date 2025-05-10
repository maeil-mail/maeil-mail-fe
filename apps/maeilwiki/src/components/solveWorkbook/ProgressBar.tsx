import React from 'react';
import {
  progressBarContainer,
  progressBarDisplayTime,
  progressRateDisplay,
  progressRateFilled,
} from './solveWorkbook.css';

interface ProgressBarProps {
  displayTime: string;
  progressRate: number;
}

export default function ProgressBar({ displayTime, progressRate }: ProgressBarProps) {
  return (
    <div className={progressBarContainer}>
      <span className={progressBarDisplayTime}>{displayTime}</span>
      <div className={progressRateDisplay}>
        <div className={progressRateFilled} style={{ width: `${100 - progressRate * 100}%` }}></div>
      </div>
    </div>
  );
}
