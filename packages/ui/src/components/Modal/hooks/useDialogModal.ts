import { usePreventScroll } from './usePreventScroll';
import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from 'react';

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

  useLayoutEffect(() => {
    setTargetContainer(document.getElementById('modal-root') as HTMLElement);
  }, []);

  useLayoutEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        dialogRef.current?.showModal();
      });
    } else {
      dialogRef.current?.close();
    }

    return () => {
      dialogRef.current?.close();
    };
  }, [isOpen]);

  const onClickDialog = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      onClickBackdrop?.();
    }
  };

  return { dialogRef, targetContainer, onClickDialog };
};
