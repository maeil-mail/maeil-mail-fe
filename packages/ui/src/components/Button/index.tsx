import { ButtonHTMLAttributes } from 'react';
import type { PropsWithChildren } from 'react';

import { buttonStyle, baseButtonStyle, disabledButton } from './button.css';
import { LoadingSpinner } from '../LoadingSpinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof buttonStyle;
  isPending?: boolean;
}

export function Button({
  variant,
  children,
  className,
  isPending = false,
  disabled,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const classNames = `${className ?? ''} ${buttonStyle[variant]} ${baseButtonStyle} ${
    disabled || isPending ? disabledButton : ''
  }`;

  return (
    <button type="button" {...props} className={classNames} disabled={disabled || isPending}>
      {isPending && <LoadingSpinner />}
      {children}
    </button>
  );
}
