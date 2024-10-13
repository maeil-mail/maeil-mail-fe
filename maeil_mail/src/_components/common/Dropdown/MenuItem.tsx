import useDropdown from '@/_hooks/useDropdown';
import type { PropsWithChildren } from 'react';

interface MenuItemProps<T> extends PropsWithChildren {
  item: T;
  className?: string;
}

export default function MenuItem<T>({ item, children, className = '' }: MenuItemProps<T>) {
  const { setSelectedItem } = useDropdown();

  return (
    <button className={className} onClick={() => setSelectedItem(item)}>
      {children}
    </button>
  );
}
