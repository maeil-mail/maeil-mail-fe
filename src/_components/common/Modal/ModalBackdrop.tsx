import { useCallback, useContext } from 'react';
import type { PropsWithChildren, KeyboardEvent, MouseEvent } from 'react';
import { ModalContext } from '@/_contexts/ModalContext';
import ScrollPreventer from './ScrollPreventer';
import { backDrop } from './modal.css';

interface ModalBackdropProps extends PropsWithChildren {
  opacity?: string;
  zIndex?: number;
}

export default function ModalBackdrop({
  children,
  opacity = 'rgba(255, 255, 255, 0.1)',
  zIndex = 100,
}: ModalBackdropProps) {
  const { isOpen, onClose, open } = useContext(ModalContext);

  const backdropRef = useCallback((node: HTMLDivElement) => {
    node?.focus();
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape' && onClose) {
      onClose(event);
    }
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && onClose) {
      onClose(event);
    }
  };

  return open ? (
    <ScrollPreventer isOpen={isOpen}>
      <div
        data-testid="modal-backdrop"
        className={backDrop}
        onClick={handleBackdropClick}
        onKeyDown={handleKeyDown}
        style={{
          background: opacity,
          zIndex: zIndex,
        }}
        role="button"
        tabIndex={0}
        ref={backdropRef}
      >
        {children}
      </div>
    </ScrollPreventer>
  ) : null;
}
