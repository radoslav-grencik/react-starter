import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({});

const MuiThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
