import { createContext, PropsWithChildren, useContext } from 'react';
import { getMemberProfile, MemberProfile } from '../_apis/auth';
import { useQuery } from '@tanstack/react-query';

export interface AuthInfo {
  isAuthenticated: boolean;
  user: MemberProfile | null;
  isLoading: boolean;
}

const AuthContext = createContext<AuthInfo | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('context provider 내부에서 실행되어야 합니다.');
  }

  return context;
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const { data: memberProfile, isLoading } = useMemberProfile();

  const authInfo = {
    isAuthenticated: Boolean(memberProfile),
    user: memberProfile ?? null,
    isLoading,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

function useMemberProfile() {
  return useQuery({
    queryKey: ['memberProfile'],
    queryFn: getMemberProfile,
    retry: false,
  });
}
