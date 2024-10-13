import { useEffect, useRef } from 'react';

interface OutSideClickOptions {
  onOutsideClick: () => void;
  onInsideClick: () => void;
}

function useOutSideClick<T extends HTMLElement>({
  onOutsideClick,
  onInsideClick,
}: OutSideClickOptions) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current) {
        if (ref.current.contains(event.target as Node)) {
          event.stopPropagation();
          onInsideClick();
        } else {
          onOutsideClick();
        }
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [onInsideClick, onOutsideClick]);

  return ref;
}

export default useOutSideClick;
