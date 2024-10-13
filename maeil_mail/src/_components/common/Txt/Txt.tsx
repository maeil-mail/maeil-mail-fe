import { textStyle, baseTxtStyle, centerAlign } from './txt.css';
import type { PropsWithChildren } from 'react';
import { myStyle } from '@/_styles/vars.css';

interface TxtProps extends PropsWithChildren {
  variant: keyof typeof textStyle;
  center?: boolean;
}

export default function Txt({ variant, children, center = false }: TxtProps) {
  const classNames = ` ${textStyle[variant]} ${myStyle} ${baseTxtStyle} ${center ? centerAlign : ''}`;

  return <p className={classNames}>{children}</p>;
}
