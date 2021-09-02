import './App.css';

import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  hellowThereStyle: {
    fontStyle: 'oblique'
  }
});

function App() {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.hellowThereStyle} variant="h1" align="center" color="primary">Hello World</Typography>
    <Button className={classes.buttonStyles} variant="outlined" color="secondary">First Button</Button>
    </div>
  );
}

export default App;
