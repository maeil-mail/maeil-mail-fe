import { useTabs } from '@/_hooks/useTabs';
import { currentContentContainer } from './tabs.css';

export default function TabCurrentContent() {
  const { selectedIndex, tabList } = useTabs();

  return <div className={currentContentContainer}>{tabList[selectedIndex].content}</div>;
}
