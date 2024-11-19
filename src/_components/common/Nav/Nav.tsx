'use client';

import { useRouter } from 'next/navigation';
import { container, innerWrapper, logo, positionStyle } from './nav.css';
import PrimaryLogo from '@/_assets/images/primaryLogo.svg';

interface NavProps {
  RightSide?: React.ReactNode;
  position?: 'default' | 'sticky';
}

export default function Nav({ RightSide, position = 'default' }: NavProps) {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <div className={`${container} ${positionStyle[position]}`}>
      <div className={innerWrapper}>
        <PrimaryLogo onClick={handleLogoClick} className={logo} />
        {RightSide && RightSide}
      </div>
    </div>
  );
}
