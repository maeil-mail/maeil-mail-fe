import { useEffect } from "react";
import type { PropsWithChildren } from "react";
import { noScroll } from "./scrollPreventer.css";

interface PreventScrollObserverProps extends PropsWithChildren {
  isOpen?: boolean;
}

export default function ScrollPreventer({
  isOpen = true,
  children,
}: PreventScrollObserverProps) {
  useEffect(() => {
    const preventTouchMove = (event: TouchEvent) => event.preventDefault();

    if (isOpen) {
      document.body.classList.add(noScroll);
      document.addEventListener("touchmove", preventTouchMove, {
        passive: false,
      });
    } else {
      document.body.classList.remove(noScroll);
      document.removeEventListener("touchmove", preventTouchMove);
    }

    return () => {
      document.body.classList.remove(noScroll);
      document.removeEventListener("touchmove", preventTouchMove);
    };
  }, [isOpen]);

  return <>{children}</>;
}
