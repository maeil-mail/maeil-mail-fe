import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { usePreventScroll } from '@/common/hooks/usePreventScroll';
import CloseIcon from '@/assets/closeIcon.svg';
import { closeButton, closeButtonWrapper, menuNav, overlay, sidebar } from './sidebar.css';

interface SidebarProps {
  MenusElement: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ MenusElement, isOpen, onClose }: SidebarProps) {
  usePreventScroll(isOpen);

  return createPortal(
    <>
      <div className={overlay({ isOpen })} onClick={onClose} />
      <aside className={sidebar({ isOpen })}>
        <button className={closeButtonWrapper} onClick={onClose}>
          <CloseIcon className={closeButton} />
        </button>
        <nav className={menuNav}>{MenusElement}</nav>
      </aside>
    </>,
    document.getElementById('modal-root') as HTMLElement,
  );
}
