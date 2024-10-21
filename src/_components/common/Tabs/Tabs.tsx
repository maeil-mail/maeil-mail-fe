import { TabsContext } from '@/_contexts/TabsContext';
import { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { TabInfo } from '@/_types';
import TabListWrapper from './TabListWrapper';
import TabHeader from './TabHeader';
import TabCurrentContent from './TabCurrentContent';

interface TabsProps extends PropsWithChildren {
  tabList: TabInfo[];
}

export default function Tabs({ children, tabList }: TabsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelectedIndex = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <TabsContext.Provider value={{ selectedIndex, handleSelectedIndex, tabList }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

Tabs.ListWrapper = TabListWrapper;
Tabs.TabHeader = TabHeader;
Tabs.CurrentContent = TabCurrentContent;
