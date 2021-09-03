import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import TypographyDemo from './TypographyDemo';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TypographyDemo />
    </ThemeProvider>
  );
}

export default App;
