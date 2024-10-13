import eventEmitter from './eventEmitter';

interface ToastOptions {
  message: string;
  type: 'default' | 'warning' | 'error' | 'success';
  duration?: number;
}

const showToast = ({ message, type, duration = 2500 }: ToastOptions) => {
  eventEmitter.publish('toast', { message, type, duration });
};

const toast = {
  notify: (message: string, duration?: number) => showToast({ message, type: 'default', duration }),
  warning: (message: string, duration?: number) =>
    showToast({ message, type: 'warning', duration }),
  error: (message: string, duration?: number) => showToast({ message, type: 'error', duration }),
  success: (message: string, duration?: number) =>
    showToast({ message, type: 'success', duration }),
};

export default toast;
