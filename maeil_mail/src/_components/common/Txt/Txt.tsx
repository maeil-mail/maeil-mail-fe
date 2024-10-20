import { textStyle, baseTxtStyle, centerAlign } from './txt.css';
import type { PropsWithChildren } from 'react';
import { myStyle } from '@/_styles/vars.css';

interface TxtProps extends PropsWithChildren {
  variant: keyof typeof textStyle;
  center?: boolean;
  className?: string;
}

export default function Txt({ variant, children, center = false, className }: TxtProps) {
  const classNames = ` ${textStyle[variant]} ${myStyle} ${baseTxtStyle} ${center ? centerAlign : ''} ${className ?? ''}`;

  return <p className={classNames}>{children}</p>;
}
