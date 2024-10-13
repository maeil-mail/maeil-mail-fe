import type { PropsWithChildren } from 'react';
import { mainWrapper } from './wrapper.css';

export default function MainWrapper({ children }: PropsWithChildren) {
  return <div className={mainWrapper}>{children}</div>;
}
