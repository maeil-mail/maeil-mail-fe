import { contentWrapper, minVH } from './wrapper.css';
import type { PropsWithChildren } from 'react';

interface MainPageWrapperProps extends PropsWithChildren {}

export default function MainPageWrapper({ children }: MainPageWrapperProps) {
  return <div className={`${contentWrapper} ${minVH}`}>{children}</div>;
}
