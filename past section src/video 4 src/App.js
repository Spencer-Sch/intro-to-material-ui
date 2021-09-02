import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'red',
    border: 'none',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Button
        classes={{
          root: classes.root,
        }}
        // className={classes.root}
        variant="outlined"
        color="primary"
        size="small"
      >
        Small Button
      </Button>
    </>
  );
}

export default App;
