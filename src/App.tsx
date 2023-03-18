import { UserProvider } from './contexts/user-context/UserContext';
import MuiThemeProvider from './theme/MuiThemeProvider';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <MuiThemeProvider>
      <UserProvider>
        <Routes />
      </UserProvider>
    </MuiThemeProvider>
  );
};

export default App;
