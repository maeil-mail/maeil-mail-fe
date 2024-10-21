'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Toast from './Toast';

const TOAST_DOM_ID = 'toast';

export default function ToastContainer() {
  const [toastRoot, setToastRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let root = document.getElementById(TOAST_DOM_ID);
    if (!root) {
      root = document.createElement('div');
      root.id = TOAST_DOM_ID;
      document.body.appendChild(root);
    }
    setToastRoot(root);
  }, []);

  if (!toastRoot) return null;

  return createPortal(<Toast />, toastRoot);
}
