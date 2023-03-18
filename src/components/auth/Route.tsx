import { useContext, useMemo } from 'react';
import { Redirect, Route, useRoute } from 'wouter';

import { UserContext } from '@/contexts/user-context/UserContext';
import { RoutePath } from '@/Routes';

export const AuthRoute: typeof Route = (props) => {
  const { isAuthorized } = useContext(UserContext);

  const [isActive] = useRoute(props.path ?? '');

  const shouldReirect = useMemo(
    () => isActive && !isAuthorized,
    [isActive, isAuthorized]
  );

  if (shouldReirect) {
    return <Redirect to={RoutePath.LOGIN} />;
  }

  return <Route {...props}>{props.children}</Route>;
};

export const UnAuthRoute: typeof Route = (props) => {
  const { isAuthorized } = useContext(UserContext);

  const [isActive] = useRoute(props.path ?? '');

  const shouldReirect = useMemo(
    () => isActive && isAuthorized,
    [isActive, isAuthorized]
  );

  if (shouldReirect) {
    return <Redirect to={RoutePath.HOME} />;
  }

  return <Route {...props}>{props.children}</Route>;
};
