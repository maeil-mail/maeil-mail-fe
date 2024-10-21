import { baseSubTxtStyle, subTextStyle } from './subTxt.css';
import type { PropsWithChildren } from 'react';
import { myStyle } from '@/_styles/vars.css';

interface SubTxtProps extends PropsWithChildren {
  variant: keyof typeof subTextStyle;
}

export default function SubTxt({ variant, children }: SubTxtProps) {
  const classNames = ` ${subTextStyle[variant]} ${myStyle} ${baseSubTxtStyle}`;

  return <p className={classNames}>{children}</p>;
}
