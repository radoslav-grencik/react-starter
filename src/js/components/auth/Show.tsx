import React, { useContext } from 'react';

import { UserContext } from '@/js/contexts/user-context/UserContext';

import Show from '../show/Show';

export const AuthShow: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isAuthorized } = useContext(UserContext);

  return <Show when={isAuthorized}>{children}</Show>;
};

export const UnAuthShow: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isAuthorized } = useContext(UserContext);

  return <Show when={!isAuthorized}>{children}</Show>;
};
