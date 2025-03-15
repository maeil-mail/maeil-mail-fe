import debounce from '@/utils/debounce';
import { useEffect, useState } from 'react';

const DEBOUNCE_WAIT = 300;

const useDeviceWidth = (): number => {
  const [width, setWidth] = useState<number>(0);

  const handleResize = debounce(() => {
    setWidth(window.innerWidth);
  }, DEBOUNCE_WAIT);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    setWidth(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};

export default useDeviceWidth;
