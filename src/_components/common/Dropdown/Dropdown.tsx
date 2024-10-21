import { DropdownContext } from '@/_contexts/DropdownContext';
import { PropsWithChildren, useState } from 'react';
import useOutSideClick from '@/_hooks/useOutsideClick';
import Menu from './Menu';
import Toggle from './Toggle';
import MenuItem from './MenuItem';

interface DropdownProps<T> extends PropsWithChildren {
  onItemSelect: (item: T) => void;
  className?: string;
}

export default function Dropdown<T>({ children, onItemSelect, className = '' }: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<T | null>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleItemSelect = (item: T) => {
    setSelectedItem(item);
    onItemSelect(item);
    setIsOpen(false);
  };

  const ref = useOutSideClick<HTMLDivElement>({
    onOutsideClick: () => setIsOpen(false),
    onInsideClick: () => {},
  });

  const value = {
    isOpen,
    toggleDropdown,
    selectedItem,
    setSelectedItem: handleItemSelect,
  };

  return (
    <DropdownContext.Provider value={value}>
      <div ref={ref} className={className}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

Dropdown.Toggle = Toggle;
Dropdown.Menu = Menu;
Dropdown.MenuItem = MenuItem;
