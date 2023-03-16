import { useContext } from 'react';

import TopNav from '@/js/components/top-nav/TopNav';
import { UserContext } from '@/js/contexts/user-context/UserContext';

const LoginPage: React.FC = () => {
  const { isAuthorized, toggleLogin } = useContext(UserContext);

  return (
    <div>
      <header>
        <TopNav />
      </header>
      <main>
        LoginPage
        <button type="button" onClick={toggleLogin}>
          {isAuthorized ? 'Logout' : 'Login'}
        </button>
      </main>
      <footer />
    </div>
  );
};

export default LoginPage;
