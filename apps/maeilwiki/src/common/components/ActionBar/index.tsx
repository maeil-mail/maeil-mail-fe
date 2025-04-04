import * as React from 'react';
import { actionBarContainer, actionBarWrapper } from './actionBar.css';

export interface ActionBarProps {
  children: React.ReactNode;
}

export default function ActionBar({ children }: ActionBarProps) {
  return (
    <div className={actionBarContainer}>
      <div className={actionBarWrapper}>{children}</div>
    </div>
  );
}
