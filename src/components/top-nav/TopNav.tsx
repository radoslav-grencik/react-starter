import { Link } from 'wouter';

import { RoutePath } from '@/Routes';

import { AuthShow, UnAuthShow } from '../auth/Show';

const TopNav: React.FC = () => {
  return (
    <nav>
      <ul>
        <AuthShow>
          <li>
            <Link href={RoutePath.HOME}>Home</Link>
          </li>
        </AuthShow>
        <UnAuthShow>
          <li>
            <Link href={RoutePath.LOGIN}>Login</Link>
          </li>
        </UnAuthShow>
      </ul>
    </nav>
  );
};

export default TopNav;
