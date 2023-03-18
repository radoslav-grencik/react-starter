import React from 'react';
import { useLocation } from 'wouter';

import { RoutePath } from '@/Routes';

const NotFoundPage: React.FC = () => {
  const [, setLocation] = useLocation();

  return (
    <div>
      404 not found...
      <button type="button" onClick={() => setLocation(RoutePath.HOME)}>
        Back home
      </button>
    </div>
  );
};

export default NotFoundPage;
