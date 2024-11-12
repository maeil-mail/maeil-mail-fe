import type { PropsWithChildren } from 'react';
import { listWrapper } from './tabs.css';

export default function TabListWrapper({ children }: PropsWithChildren) {
  return <div className={listWrapper}>{children}</div>;
}
