import { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { noScroll } from './scrollPreventer.css';

interface PreventScrollObserverProps extends PropsWithChildren {
  isOpen?: boolean;
}

export default function ScrollPreventer({ isOpen = true, children }: PreventScrollObserverProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(noScroll);
    } else {
      document.body.classList.remove(noScroll);
    }

    return () => {
      document.body.classList.remove(noScroll);
    };
  }, [isOpen]);

  return <>{children}</>;
}
