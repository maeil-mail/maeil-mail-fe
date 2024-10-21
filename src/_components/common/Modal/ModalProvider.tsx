import type { PropsWithChildren } from 'react';
import { ModalContext } from '@/_contexts/ModalContext';
import type { ModalContextProps } from '@/_contexts/ModalContext';

export const ModalProvider = ({
  children,
  value,
}: PropsWithChildren<{ value: ModalContextProps }>) => {
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
