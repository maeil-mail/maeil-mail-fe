import { contentWrapper } from './wrapper.css';
import type { PropsWithChildren } from 'react';

export default function ContentWrapper({ children }: PropsWithChildren) {
  return <div className={contentWrapper}>{children}</div>;
}
