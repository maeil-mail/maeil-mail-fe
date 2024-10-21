import { useContext } from 'react';
import { ERROR_MESSAGE } from '@/_constants/messages';
import { TabsContext } from '@/_contexts/TabsContext';
import type { TabsContextProps } from '@/_contexts/TabsContext';

export const useTabs = (): TabsContextProps => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error(ERROR_MESSAGE.not_defined_context);
  }
  return context;
};
