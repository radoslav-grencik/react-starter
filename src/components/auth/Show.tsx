import React, { useContext } from 'react';

import { UserContext } from '@/contexts/user-context/UserContext';

import Show from '../control-flow/Show';

export const AuthShow: React.FC<
  React.PropsWithChildren<{
    fallback?: React.ReactNode;
  }>
> = ({ children, ...rest }) => {
  const { isAuthorized } = useContext(UserContext);

  return (
    <Show when={isAuthorized} {...rest}>
      {children}
    </Show>
  );
};

export const UnAuthShow: React.FC<
  React.PropsWithChildren<{
    fallback?: React.ReactNode;
  }>
> = ({ children, ...rest }) => {
  const { isAuthorized } = useContext(UserContext);

  return (
    <Show when={!isAuthorized} {...rest}>
      {children}
    </Show>
  );
};
