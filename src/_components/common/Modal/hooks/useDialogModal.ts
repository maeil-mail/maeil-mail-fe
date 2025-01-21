import { usePreventScroll } from './usePreventScroll';
import { useEffect, useRef, useState, type RefObject } from 'react';

interface UseModalDialogReturn {
  dialogRef: RefObject<HTMLDialogElement>;
  targetContainer: HTMLElement | undefined;
  onClickDialog: (e: React.MouseEvent<HTMLDialogElement>) => void;
}

export const useDialogModal = (
  isOpen: boolean,
  onClickBackdrop?: () => void,
): UseModalDialogReturn => {
  usePreventScroll(isOpen);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const [targetContainer, setTargetContainer] = useState<HTMLElement>();

  useEffect(() => {
    setTargetContainer(document.getElementById('modal-root') as HTMLElement);
  }, []);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const onClickDialog = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      onClickBackdrop?.();
    }
  };

  return { dialogRef, targetContainer, onClickDialog };
};
