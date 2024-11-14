import * as React from 'react';
import { pageInnerLayout } from './pageInnerLayout.css';

export interface PageInnerLayoutProps {}

export default function PageInnerLayout({ children }: React.PropsWithChildren) {
  return <div className={pageInnerLayout}>{children}</div>;
}
