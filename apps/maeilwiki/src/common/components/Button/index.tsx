import * as React from 'react';
import { buttonSize, buttonTheme } from './button.css';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large';
  theme: 'primary' | 'light' | 'disabled';
  children: React.ReactNode;
}

export default function Button({ size, theme, children, ...attributes }: ButtonProps) {
  return (
    <button className={`${buttonSize({ size })} ${buttonTheme({ theme })}`} {...attributes}>
      {children}
    </button>
  );
}
