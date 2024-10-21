import { createContext } from 'react';
import { TabInfo } from '@/_types';

export interface TabsContextProps {
  selectedIndex: number;
  handleSelectedIndex: (index: number) => void;
  tabList: TabInfo[];
}

export const TabsContext = createContext<TabsContextProps | undefined>(undefined);
