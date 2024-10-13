import useDropdown from '@/_hooks/useDropdown';
import type { PropsWithChildren } from 'react';
import DownArrow from '../Icon/DownArrow';
import UpArrow from '../Icon/UpArrow';

interface ToggleProps extends PropsWithChildren {
  className?: string;
}

export default function Toggle({ children, className = '' }: ToggleProps) {
  const { isOpen, toggleDropdown } = useDropdown();

  return (
    <button className={className} onClick={toggleDropdown}>
      {children}
      {isOpen ? <UpArrow width={10} height={10} /> : <DownArrow width={10} height={10} />}
    </button>
  );
}
