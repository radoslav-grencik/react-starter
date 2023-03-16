import { useContext } from 'react';

import SideNav from '@/js/components/side-nav/SideNav';
import TopNav from '@/js/components/top-nav/TopNav';
import { UserContext } from '@/js/contexts/user-context/UserContext';

const DefaultPage: React.FC = () => {
  const { isAuthorized, toggleLogin } = useContext(UserContext);

  return (
    <div>
      <header>
        <TopNav />
      </header>
      <div>
        <SideNav />
      </div>
      <main>
        DefaultPage
        <button type="button" onClick={toggleLogin}>
          {isAuthorized ? 'Logout' : 'Login'}
        </button>
      </main>
      <footer />
    </div>
  );
};

export default DefaultPage;
