'use client';

import { type ComponentType, type MouseEvent } from 'react';
import { useAuthContext } from '../_store/authContext';
import { redirectToGithubLogin } from '../_utils/redirectToGithubLogin';

type WithAuthCheckProps = {
  onClick: (event: MouseEvent) => void;
};

// withAuthClick을 사용하는 컴포넌트 외부에 AuthProvider를 감싸주어야 합니다.
export function withAuthClick<T extends WithAuthCheckProps>(Component: ComponentType<T>) {
  return function WithAuthClick(props: T) {
    const { isAuthenticated } = useAuthContext();

    const handleClick = (event: MouseEvent) => {
      if (!isAuthenticated) {
        alert('로그인 후 사용하실 수 있습니다.');
        redirectToGithubLogin();
        return;
      }

      props?.onClick(event);
    };

    return <Component {...props} onClick={handleClick} />;
  };
}
