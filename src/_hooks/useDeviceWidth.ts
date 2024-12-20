import debounce from '@/_utils/debounce';
import { useEffect, useState } from 'react';

const DEBOUNCE_WAIT = 300;

const useDeviceWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = debounce(() => {
    setWidth(window.innerWidth);
  }, DEBOUNCE_WAIT);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};

export default useDeviceWidth;
