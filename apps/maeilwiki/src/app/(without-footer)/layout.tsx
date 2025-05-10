import * as React from 'react';
import { withoutFooterContent } from '../layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div className={withoutFooterContent}>{children}</div>;
}
