import { baseSubTxtStyle, subTextStyle } from './subTxt.css';
import type { PropsWithChildren } from 'react';

interface SubTxtProps extends PropsWithChildren {
  variant: keyof typeof subTextStyle;
}

export default function SubTxt({ variant, children }: SubTxtProps) {
  const classNames = ` ${subTextStyle[variant]} ${baseSubTxtStyle}`;

  return <p className={classNames}>{children}</p>;
}
