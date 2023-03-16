import { createContext, useCallback, useMemo } from 'react';
import noop from 'lodash/noop';
import useLocalStorage from 'use-local-storage';
import { useLocation } from 'wouter';

import { RoutePath } from '@/js/Routes';

import { AuthContextType } from './types';

export const UserContext = createContext<AuthContextType>({
  user: null,
  isAuthorized: false,
  login: noop,
  logout: noop,
  toggleLogin: noop,
});

export const UserProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [, setLocation] = useLocation();

  // TODO - implement authorization

  const [isAuthorized, setIsAuthorized] = useLocalStorage(
    'isAuthorized',
    false
  );

  const login = useCallback(() => {
    setIsAuthorized(true);
    setLocation(RoutePath.HOME);
  }, [setIsAuthorized, setLocation]);

  const logout = useCallback(() => {
    setIsAuthorized(false);
    setLocation(RoutePath.LOGIN);
  }, [setIsAuthorized, setLocation]);

  const toggleLogin = useMemo(() => {
    return isAuthorized ? logout : login;
  }, [isAuthorized, login, logout]);

  return (
    <UserContext.Provider
      value={{
        user: null,
        isAuthorized,
        login,
        logout,
        toggleLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
