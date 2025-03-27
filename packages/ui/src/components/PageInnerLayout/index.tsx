import * as React from 'react';
import { pageInnerLayout } from './pageInnerLayout.css';

export function PageInnerLayout({ children }: React.PropsWithChildren) {
  return <div className={pageInnerLayout}>{children}</div>;
}
