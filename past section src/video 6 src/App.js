import React from 'react';
import { Button, Paper, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   height: '100vh',
  //   background: 'linear-gradient(45deg, #FE688B 30%, #FF8E53 90%)',
  // },
  // button: {
  //   backgroundColor: 'blue',
  //   [theme.breakpoints.up('sm')]: {
  //     backgroundColor: 'black',
  //   },
  // },
}));

function App() {
  const classes = useStyles();
  // const theme = useTheme();
  return (
    <Paper>
      <Button color="primary" variant="contained">
        This is a button
      </Button>
      <Typography variant={'h1'}>This is my Typography</Typography>
    </Paper>
  );
}

export default App;
