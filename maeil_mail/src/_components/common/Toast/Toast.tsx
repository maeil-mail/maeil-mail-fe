import { useEffect, useState } from 'react';
import eventEmitter from '@/_utils/eventEmitter';
import classNames from 'classnames';
import {
  toastContainer,
  toast,
  toastDefault,
  toastWarning,
  toastError,
  toastSuccess,
  toastEntering,
  toastEntered,
  toastExiting,
  progressBar,
} from './toast.css';

interface ToastMessage {
  id: number;
  message: string;
  type: 'default' | 'warning' | 'error' | 'success';
  duration: number;
}

export default function Toast() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [exitingToasts, setExitingToasts] = useState<number[]>([]);
  const [enteringToasts, setEnteringToasts] = useState<number[]>([]);

  useEffect(() => {
    const handleNewToast = ({ message, type, duration }: ToastMessage) => {
      const id = Date.now();
      setToasts((prevToasts) => [...prevToasts, { id, message, type, duration }]);
      setEnteringToasts((prev) => [...prev, id]);

      setTimeout(() => {
        setEnteringToasts((prev) => prev.filter((toastId) => toastId !== id));
      }, 0);

      setTimeout(() => {
        setExitingToasts((prev) => [...prev, id]);
        setTimeout(() => {
          setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
          setExitingToasts((prev) => prev.filter((toastId) => toastId !== id));
        }, 500);
      }, duration);
    };

    const unsubscribe = eventEmitter.subscribe('toast', handleNewToast);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className={toastContainer}>
      {toasts.map((toastMessage) => (
        <div
          key={toastMessage.id}
          className={classNames(
            toast,
            toastMessage.type === 'default' && toastDefault,
            toastMessage.type === 'warning' && toastWarning,
            toastMessage.type === 'error' && toastError,
            toastMessage.type === 'success' && toastSuccess,
            enteringToasts.includes(toastMessage.id) ? toastEntering : toastEntered,
            exitingToasts.includes(toastMessage.id) && toastExiting,
          )}
        >
          {toastMessage.message}
          <div
            className={progressBar}
            style={{
              animationDuration: `${toastMessage.duration}ms`,
              width: exitingToasts.includes(toastMessage.id) ? '0%' : '100%',
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}
