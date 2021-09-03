import { Switch, Button, Grid, Paper, Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  const greenTheme = createTheme({
    palette: {
      primary: green,
      secondary: green,
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : greenTheme}>
      <Paper style={{ height: '100vh' }}>
        <Grid container direction="column">
          <Typography variant="h1">This is my App!</Typography>
          <Button variant="contained" color="primary">
            This is a button
          </Button>
          <Button variant="contained" color="secondary">
            This is another button
          </Button>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
