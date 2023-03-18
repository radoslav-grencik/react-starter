import { Route, Switch } from 'wouter';

import { AuthRoute, UnAuthRoute } from './components/auth/Route';
import DefaultPage from './pages/default-page/DefaultPage';
import LoginPage from './pages/login-page/LoginPage';
import NotFoundPage from './pages/not-found-page/NotFoundPage';

export enum RoutePath {
  HOME = '/',
  LOGIN = '/login',
}

const Routes: React.FC = () => {
  return (
    <Switch>
      <AuthRoute path={RoutePath.HOME}>
        <DefaultPage />
      </AuthRoute>
      <UnAuthRoute path={RoutePath.LOGIN}>
        <LoginPage />
      </UnAuthRoute>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default Routes;
