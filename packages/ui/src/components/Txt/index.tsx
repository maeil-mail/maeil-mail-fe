import { textStyle, baseTxtStyle, centerAlign } from './txt.css';
import type { PropsWithChildren } from 'react';

interface TxtProps extends PropsWithChildren {
  variant: keyof typeof textStyle;
  center?: boolean;
  className?: string;
}

export function Txt({ variant, children, center = false, className }: TxtProps) {
  const classNames = ` ${textStyle[variant]} ${baseTxtStyle} ${center ? centerAlign : ''} ${className ?? ''}`;

  return <p className={classNames}>{children}</p>;
}
