import { useEffect, useState } from 'react';
import UpArrow from '../Icon/UpArrow';
import { container, visible } from './scrollToTop.css';

const MAX_SCROLL_Y = 300;

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > MAX_SCROLL_Y) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`${container} ${isVisible ? visible : ''}`}>
      <button onClick={scrollToTop}>
        <UpArrow width={30} height={30} />
      </button>
    </div>
  );
}
